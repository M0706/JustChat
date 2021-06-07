import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { View } from "../../../components/Themed";
import ForwardListItem from "./components/ForwardListItem";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../src/graphql/queries";
import { User } from "../../../types";
import { Cache } from "aws-amplify";
import { useSelector } from "react-redux";

export default function ForwardScreen() {
  const [users, setUsers] = useState([]);
  const route = useRoute();
  const currentUser = useSelector((state) => state.currentUserInfo);

  // console.log(route);
  const chatRooms = route.params.chatRooms;

  const forwardMessage = route.params.forwardMessage;

  const mapUsers = (user: User, currentAuthedUser: string) => {
    if (user.id === currentAuthedUser) {
      return null;
    }
    let filterChatRoom = chatRooms.filter(
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
        if (tuser.user.id == user.id) {
          return {
            ...user,
            previousChatID: temp.id,
          };
        }
      }
    }

    return { ...user };
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));
        const filteredUsers = usersData.data.listUsers.items
          .map((i: User) => mapUsers(i, currentUser.userID))
          .filter(Boolean);
          setUsers(filteredUsers);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => (
          <ForwardListItem user={item} forwardMessage={forwardMessage} />
        )}
        keyExtractor={(item: User) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
