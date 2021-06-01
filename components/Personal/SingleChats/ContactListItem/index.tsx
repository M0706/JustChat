import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  createChatRoomUser,
  createChatRoom,
} from "../../../../src/graphql/mutations";

import { User } from "../../../../types";
import styles from "./style";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  //console.log("User ====>", user);
  const navigation = useNavigation();

  const onClick = async () => {
    try {
      let newChatRoomData;
      if (!user.previousChatID) {
        newChatRoomData = await API.graphql(
          graphqlOperation(createChatRoom, {
            input: { lastMessageID: "", group: "False" },
          })
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
            },
          })
        );

        const userInfo = await Auth.currentAuthenticatedUser();
        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: userInfo.attributes.sub,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );
      }

      navigation.navigate("ChatRoom", {
        id: user.previousChatID
          ? user.previousChatID
          : newChatRoomData?.data.createChatRoom.id || "",
        name: user.name,
        group:"False",
      });
    } catch (err) {
      console.warn(err);
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
