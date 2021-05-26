//This is Personal ChatScreen

import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "../../../components/Themed";
import ChatListItem from "../../../components/Personal/SingleChats/ChatListItem";
import NewMessageButton from "../../../components/Personal/SingleChats/NewMessageButton";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphqlCustom/queries";
import {
  onUpdateChatRoom,
  onCreateChatRoom,
} from "../../../graphql/subscriptions";
import { ChatRoom } from "../../../types";

export default function ChatsScreen() {
  const [chatRooms, setChatRooms] = useState([]);

  const fetchChatRooms = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();

      let userData = await API.graphql(
        graphqlOperation(getUser, { id: currentUser.attributes.sub })
      );

      let tempChatRoomArr: any = [];
      userData.data.getUser.chatRoomUser.items.map((room) => {
        if (room.chatRoom.group === "False") {
          tempChatRoomArr.push(room);
        }
      });

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
          renderItem={({ item }) => <ChatListItem chatRoom={item} />}
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
