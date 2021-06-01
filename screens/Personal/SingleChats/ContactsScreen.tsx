import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { View } from "../../../components/Themed";
import ContactListItem from "../../../components/Personal/SingleChats/ContactListItem";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../src/graphql/queries";
import { User } from "../../../types";
import { Cache } from "aws-amplify";

export default function ContactsScreen() {
  const [users, setUsers] = useState([]);
  const route = useRoute();

  const chatRooms = route.params.chatRooms;

  const mapUsers = (user: User, currentAuthedUser: string) => {
    if (user.id === currentAuthedUser) {
      return null;
    }
    // console.log("hi")
    let filterChatRoom = chatRooms.filter(
      (value: {}) => Object.keys(value).length !== 0
    );

    //console.log("Contact Screen --------->", filterChatRoom);

    // const chatRoom = filterChatRoom.find(cr =>{
    //                       cr.chatRoomUsers.items.some((i) => (i.user.id === user.id))
    // });

    //console.log("sd cks  ====>", filterChatRoom[0].group);
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
        let currentUser =  await Cache.getItem("UserID");
        if(!currentUser){
          const user= await Auth.currentAuthenticatedUser();
          currentUser = user.attributes.sub;
          Cache.setItem("UserID",currentUser);
        }
        const filteredUsers = usersData.data.listUsers.items
          .map((i: User) => mapUsers(i, currentUser))
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
        renderItem={({ item }) => <ContactListItem user={item} />}
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
