import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import NewMessageButton from "../components/NewMessageButton";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "./queries";
import { onUpdateChatRoom, onCreateChatRoom } from "../graphql/subscriptions";
import { ChatRoom } from "../types";

import { UserState } from "realm";
import { updateUser } from "../graphql/mutations";
import { RSA, RSAKey } from "../helpers/rsa";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

export default function ChatsScreen() {
  const navigation = useNavigation();
  const [chatRooms, setChatRooms] = useState([]);
  const [user, setUser] = useState({});

  const fetchChatRooms = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();

      const userData = await API.graphql(
        graphqlOperation(getUser, { id: currentUser.attributes.sub })
      );

      if (userData.data.getUser.publicKey == null) {
        var key = new RSAKey(true);

        key.setType("public");
        const publicKeyS = JSON.stringify(key);
        key.setType("private");
        const privateKeyS = JSON.stringify(key);

        // Save uski private key
        await AsyncStorage.setItem("privateKey", privateKeyS);
        await AsyncStorage.setItem("publicKey", publicKeyS);

        await API.graphql(
          graphqlOperation(updateUser, {
            input: {
              id: userData.data.getUser.id,
              publicKey: publicKeyS,
            },
          })
        );
      } else if ((await AsyncStorage.getItem("privateKey")) == null) {
        var key = new RSAKey(true);

        key.setType("public");
        const publicKeyS = JSON.stringify(key);
        key.setType("private");
        const privateKeyS = JSON.stringify(key);

        // Save uski private key
        AsyncStorage.setItem("privateKey", privateKeyS);
        AsyncStorage.setItem("publicKey", publicKeyS);

        await API.graphql(
          graphqlOperation(updateUser, {
            input: {
              id: userData.data.getUser.id,
              publicKey: publicKeyS,
            },
          })
        );
      }

      setChatRooms(
        userData.data.getUser.chatRoomUser.items.map((i) => ({ ...i.chatRoom }))
      );
    } catch (err) {
      const currentUser = await Auth.currentAuthenticatedUser();
      var key = new RSAKey(true);

      key.setType("public");
      const publicKeyS = JSON.stringify(key);
      key.setType("private");
      const privateKeyS = JSON.stringify(key);

      // Save uski private key
      await AsyncStorage.setItem("privateKey", privateKeyS);
      await AsyncStorage.setItem("publicKey", publicKeyS);

      await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: currentUser.attributes.sub,
            publicKey: publicKeyS,
          },
        })
      );
      console.log("Error while blah blah", err);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchChatRooms();
    });

    return unsubscribe;
  }, [navigation]);

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
