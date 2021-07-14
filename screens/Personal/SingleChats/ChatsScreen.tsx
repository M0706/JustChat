//This is Personal ChatScreen

import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "../../../components/Themed";
import ChatListItem from "../../../components/Personal/SingleChats/ChatListItem";
import NewMessageButton from "../../../components/Personal/SingleChats/NewMessageButton";
import {  API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphqlCustom/queries";
import {
  onUpdateChatRoom,
  onCreateChatRoom,
  onUpdateMessage,
} from "../../../src/graphql/subscriptions";
import moment from "moment";
import { ChatRoom } from "../../../types";
import { Cache } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { AuthDetails } from "../../../store/actions/auth-actions";

// selectors
// import { useRecoilValue } from 'recoil';
// import { User } from "../../../recoil/selectors/UserAuth"

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
  const currentUser = useSelector((state) => state.currentUserInfo);
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  // const UserDetails = useRecoilValue(User);

  useEffect(() => {
    let unmounted = false;
    if (!currentUser.isAuth) {
      dispatch(AuthDetails());
    }
    return () => { unmounted = true };

  }, [dispatch]);


  const fetchChatRooms = async () => {
    try {
      const currentUserID = currentUser.userID;
      //const currentUserID = UserDetails.userID;
      // console.log(currentID);
      let userData = await API.graphql(
        graphqlOperation(getUser, { id: currentUserID })
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
      console.log("Error in chatScreen");
    }
  };

  useEffect(() => {
    let unmounted = false;
   // console.log(currentUser.isAuth);
    if (!unmounted) {
      fetchChatRooms();
    }
    return () => { unmounted = true };
  }, []);

  useEffect(() => {
    const onUpdateMessageSubscription = API.graphql(
      graphqlOperation(onUpdateMessage)
    ).subscribe({
      next: (data) => {
        fetchChatRooms();
      },
    });

    return () => onUpdateMessageSubscription.unsubscribe();
  }, [chatRooms]);

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
      {loading ? <ActivityIndicator />:
      <>
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
              renderItem={({ item }) => (
                <ChatListItem chatRoom={item} group="False" />
              )}
              keyExtractor={(item: ChatRoom) => item.id}
            />
          )}
      </>}

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

