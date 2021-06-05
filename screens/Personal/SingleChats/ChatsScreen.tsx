//This is Personal ChatScreen

import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "../../../components/Themed";
import ChatListItem from "../../../components/Personal/SingleChats/ChatListItem";
import NewMessageButton from "../../../components/Personal/SingleChats/NewMessageButton";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphqlCustom/queries";
import {
  onUpdateChatRoom,
  onCreateChatRoom,
  onCreateMessage,
  onUpdateMessage,
} from "../../../src/graphql/subscriptions";
import moment from "moment";
import { ChatRoom } from "../../../types";
import {Cache} from "aws-amplify"
import { useSelector, useDispatch } from "react-redux";
import { AuthDetails } from "../../../store/actions/auth-actions";

function compare_time(a, b) {
  if (moment(a.chatRoom.updatedAt).isBefore(b.chatRoom.updatedAt)) {
    return 1;
  } else if (moment(a.chatRoom.updatedAt).isAfter(b.chatRoom.updatedAt)) {
    return -1;
  } else {
    return 0;
  }
}

export default function ChatsScreen() {
  const [chatRooms, setChatRooms] = useState([]);
  const User = useSelector(state => state.currentUserInfo)
  const [currentUser,setCurrentUser] = useState(User)
  const dispatch = useDispatch();
  // console.log("hi--->",currentUser.userData);
  // console.log("In line 39");



 

  const fetchChatRooms = async () => {
    try {

      
     
   
        const user= await Auth.currentAuthenticatedUser();
        const currentUserID = user.attributes.sub;
  

      //console.log("Check==>", await Cache.getItem("userData"));

      let userData = await API.graphql(
        graphqlOperation(getUser, { id: currentUserID})
      );

      
      let tempChatRoomArr: any = [];
      userData.data.getUser.chatRoomUser.items.map((room) => {
        if (room.chatRoom.group === "False") {
          tempChatRoomArr.push(room);
        }
      });

      tempChatRoomArr.sort(compare_time);

      setChatRooms(tempChatRoomArr.map((i) => ({ ...i.chatRoom })));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  useEffect(() => {
    const onUpdateChatRoomSubscription = API.graphql(
      graphqlOperation(onUpdateChatRoom)
    ).subscribe({
      next: (data) => {
        fetchChatRooms();
      },
    });

    return () => onUpdateChatRoomSubscription.unsubscribe();
  }, [chatRooms]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateChatRoom)
    ).subscribe({
      next: (data) => {
        fetchChatRooms();
      },
    });
    return () => subscription.unsubscribe();
  }, [chatRooms]);

  return (
    <View style={styles.container}>
      
      {chatRooms.length === 0 ? (
        <View>
          <FontAwesome5
            style={{ textAlign: "center" }}
            name="rocketchat"
            size={100}
            color="black"
          />
          <Text style={styles.mainActionText}>Create a new chat using</Text>
          <Text style={styles.subMainActionText}>the bottom below</Text>
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={chatRooms}
          renderItem={({ item }) => <ChatListItem chatRoom={item} group="False"/>}
          keyExtractor={(item: ChatRoom) => item.id}
        />
      )}
      <NewMessageButton chatRooms={chatRooms} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  list: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  mainActionText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  subMainActionText: {
    textAlign: "center",
    fontSize: 18,
  },
});
