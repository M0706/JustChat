import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createChatRoom, createChatRoomUser } from "../../graphql/mutations";
import AsyncStorage from "@react-native-community/async-storage";
import { getChatRoom } from "../../graphql/queries";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = async () => {
    try {
      //  1. Create a new Chat Room

      let newChatRoomData;

      const publicKeyOfThisUser = await AsyncStorage.getItem("publicKey");

      // var oldChatRoom = await API.graphql(
      //   graphqlOperation(getChatRoom, { id: user.previousChatID })
      // );
      console.log(
        "Inside Contact List Item -------> ",
        user,
        publicKeyOfThisUser
      );

      if (!user.previousChatID) {
        newChatRoomData = await API.graphql(
          graphqlOperation(createChatRoom, { input: { lastMessageID: "" } })
        );

        if (!newChatRoomData.data) {
          console.log("Failed to create chat room");
          return;
        }
        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: user.id,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
              publicKey: user.publicKey,
            },
          })
        );

        const userInfo = await Auth.currentAuthenticatedUser();
        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: userInfo.attributes.sub,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
              publicKey: publicKeyOfThisUser,
            },
          })
        );
      }

      navigation.navigate("ChatRoom", {
        id: user.previousChatID
          ? user.previousChatID
          : newChatRoomData?.data.createChatRoom.id || "",
        name: user.name,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: user.imageUri }} />

          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
