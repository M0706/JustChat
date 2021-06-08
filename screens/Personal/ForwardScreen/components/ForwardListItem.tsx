import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import {
  createChatRoomUser,
  createChatRoom,
  createMessage,
  updateChatRoom,
} from "../../../../src/graphql/mutations";

import { User, Message } from "../../../../types";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/slices/Auth-slice";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";

export type ForwardListItemProps = {
  user: User;
  forwardMessage: Message;
};

const ForwardListItem = (props: ForwardListItemProps) => {
  const { user } = props;
  const { forwardMessage } = props;
  const [userID, setUserID] = useState("");
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  let chatRoomID = "";
  const currentUser = useSelector((state) => state.currentUserInfo);

  const navigation = useNavigation();

  // const updateChatRoomAsync = async (lastMessageID: string) => {
  //   try {
  //     await API.graphql(
  //       graphqlOperation(updateChatRoom, {
  //         input: {
  //           id: chatRoomID,
  //           lastMessageID,
  //         },
  //       })
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const onClick = async () => {
  //   try {
  //     let newChatRoomData;
  //     // console.log("User -->", user);
  //     let groupCheck: boolean = false;
  //     if (user.chatRoom) {
  //       if (user.chatRoom.group == "True") {
  //         groupCheck = true;
  //       }
  //     }

  //     if (!groupCheck && !user.previousChatID) {
  //       newChatRoomData = await API.graphql(
  //         graphqlOperation(createChatRoom, {
  //           input: { lastMessageID: "", group: "False" },
  //         })
  //       );

  //       if (!newChatRoomData.data) {
  //         console.log("Failed to create chat room");
  //         return;
  //       }

  //       dispatch(authActions.userInfoChanged());

  //       await API.graphql(
  //         graphqlOperation(createChatRoomUser, {
  //           input: {
  //             userID: user.id,
  //             chatRoomID: newChatRoomData.data.createChatRoom.id,
  //           },
  //         })
  //       );

  //       await API.graphql(
  //         graphqlOperation(createChatRoomUser, {
  //           input: {
  //             userID: currentUser.userID,
  //             chatRoomID: newChatRoomData.data.createChatRoom.id,
  //           },
  //         })
  //       );
  //     }

  //     if (groupCheck) {
  //       chatRoomID = user.chatRoomID;
  //     } else {
  //       chatRoomID = user.previousChatID
  //         ? user.previousChatID
  //         : newChatRoomData?.data.createChatRoom.id || "";
  //     }
  //     navigation.navigate("ChatScreen");

  //     const forwardMessageData = await API.graphql(
  //       graphqlOperation(createMessage, {
  //         input: {
  //           content: forwardMessage,
  //           media: "",
  //           userID: currentUser.userID,
  //           chatRoomID,
  //         },
  //       })
  //     );

  //     await updateChatRoomAsync(forwardMessageData.data.createMessage.id);
  //   } catch (err) {
  //     console.warn("error in line 121 in ForwrdListItem-->", err);
  //   }
  // };

  const onPressChatRoom = () => {
    // console.log("User", user);
    if (select == false) {
      props.select((prevState) => {
        return [...prevState, user];
      });
    } else {
      props.select((prevState) => {
        let tempList = [...prevState];
        let filteredList = tempList.filter((item) => {
          return item.id !== user.id;
        });
        return [...filteredList];
      });
    }
    setSelect(!select);
  };

  return (
    <TouchableWithoutFeedback onPress={onPressChatRoom}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {select == true ? (
            <>
              <AntDesign
                name="checkcircleo"
                size={24}
                color="blue"
                style={styles.tick}
              />
            </>
          ) : (
            <>
              <Entypo
                name="circle"
                size={24}
                color="black"
                style={styles.tick}
              />
            </>
          )}
          <Image style={styles.avatar} source={{ uri: user.imageUri }} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>
              {user.chatRoom?.group == "True" ? user.chatRoom.name : user.name}
            </Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForwardListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },

  leftContainer: {
    flexDirection: "row",
  },

  midContainer: {
    justifyContent: "space-around",
  },

  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },

  status: {
    fontSize: 16,
    color: "grey",
  },

  avatar: {
    width: 60,
    height: 60,
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 60,
  },
});
