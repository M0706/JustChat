import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { View } from "../../../components/Themed";
import ForwardListItem from "./components/ForwardListItem";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../src/graphql/queries";
import { User } from "../../../types";
import { Cache } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { authActions } from "../../../store/slices/Auth-slice";
import {
  createChatRoom,
  createChatRoomUser,
  createMessage,
  updateChatRoom,
} from "../../../src/graphql/mutations";
import { useDispatch, useSelector } from "react-redux";
import { AuthDetails } from "../../../store/actions/auth-actions";

export default function ForwardScreen() {
  const [users, setUsers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const route = useRoute();
  const currentUser = useSelector((state) => state.currentUserInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  let chatRoomGroups: any[] = []
  let groupsFetched = false;

  // console.log(route);
  const {forwardMedia, forwardMessage } = route.params;
  

  const mapUsers = (user: User, currentAuthedUser: string) => {
    if (user.id === currentAuthedUser) {
      return null;
    }
    let chatRoomSingle: any[] = [];
    
    currentUser.userData.data.getUser.chatRoomUser.items.map((room) => {
      if (room.chatRoom.group === "False") {
        chatRoomSingle.push(room.chatRoom);
      }
      else if(!groupsFetched){
        chatRoomGroups.push(room);
      }
    });
    groupsFetched = true;
    

    let filterChatRoom = chatRoomSingle.filter(
      (value: {}) => Object.keys(value).length !== 0
    );

    for (var cr in filterChatRoom) {
      var temp = filterChatRoom[cr];
      //Users can have multiple groups with same members but no single chats with same members
      if (temp.group === "True") {
        continue;
      }
      for (var tr in temp.chatRoomUsers.items) {
        var tuser = temp.chatRoomUsers.items[tr];
        if (tuser.user.id === user.id) {
          return {
            ...user,
            previousChatID: temp.id
          }
        }
      }
    }

    return { ...user };
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await API.graphql(graphqlOperation(listUsers));
        
        let filteredUsers = userList.data.listUsers.items
          .map((i: User) => mapUsers(i, currentUser.userID))
          .filter(Boolean);

        filteredUsers.push(...chatRoomGroups);
       
        
        setUsers(filteredUsers);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchUsers();
  }, []);

  const updateChatRoomAsync = async (
    lastMessageID: string,
    chatRoomID: string
  ) => {
    try {
      await API.graphql(
        graphqlOperation(updateChatRoom, {
          input: {
            id: chatRoomID,
            lastMessageID,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onClick = async (user) => {
    try {
      let newChatRoomData;
      let chatRoomID = "";

      let groupCheck: boolean = false;
      if (user.chatRoom) {
        if (user.chatRoom.group == "True") {
          groupCheck = true;
        }
      }

      if (!groupCheck && !user.previousChatID) {
        newChatRoomData = await API.graphql(
          graphqlOperation(createChatRoom, {
            input: { lastMessageID: "", group: "False" },
          })
        );

        if (!newChatRoomData.data) {
          console.log("Failed to create chat room");
          return;
        }

        dispatch(authActions.userInfoChanged());

        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: user.id,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );

        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: currentUser.userID,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );
      }

      if (groupCheck) {
        chatRoomID = user.chatRoomID;
      } else {
        chatRoomID = user.previousChatID
          ? user.previousChatID
          : newChatRoomData?.data.createChatRoom.id || "";
      }
      // navigation.navigate("ChatScreen");

      const forwardMessageData = await API.graphql(
        graphqlOperation(createMessage, {
          input: {
            content: forwardMessage,
            media: forwardMedia,
            userID: currentUser.userID,
            chatRoomID,
          },
        })
      );

      await updateChatRoomAsync(
        forwardMessageData.data.createMessage.id,
        chatRoomID
      );
    } catch (err) {
      console.warn("error in line 121 in ForwrdListItem-->", err);
    }
  };

  const forward = () => {
    selectedItems.map(async (user) => {
      onClick(user);
    });
    navigation.navigate("ChatScreen");
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          data={users}
          renderItem={({ item }) => (
            <ForwardListItem
              user={item}
              forwardMessage={forwardMessage}
              select={setSelectedItems}
            />
          )}
          keyExtractor={(item: User) => item.id}
        />
      </View>
      <AntDesign
        name="arrowright"
        size={50}
        color="white"
        style={styles.next}
        onPress={forward}
      />
    </>
  );
}

const styles = StyleSheet.create({
  next: {
    backgroundColor: Colors.light.tint,
    width: 50,
    borderRadius: 25,
    left: 340,
    bottom: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});