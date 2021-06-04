import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  createChatRoomUser,
  createChatRoom,
  createMessage,
  updateChatRoom,
} from "../../../../src/graphql/mutations";

import { User, Message } from "../../../../types";
import { StyleSheet } from "react-native";

export type ContactListItemProps = {
  user: User;
  forwardMessage: Message;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const { forwardMessage } = props;
  const [userID, setUserID] = useState("");
  const [chatRoomID, setChatRoomID] = useState(null);

  const navigation = useNavigation();

  const updateChatRoomAsync = async (lastMessageID: string) => {
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

  //Add media in schema before sending images
  const createMess = async (mediaKey: object) => {
    try {
      console.log("chatRoomID",chatRoomID);
      const forwardMessageData = await API.graphql(
        graphqlOperation(createMessage, {
          input: {
            content: forwardMessage,
            media: mediaKey,
            userID: userID,
            chatRoomID,
          },
        })
      );
      // setMessage("");
      // setMedia(null);
      await updateChatRoomAsync(forwardMessageData.data.createMessage.id);

      navigation.navigate("ChatRoom", {
        id: chatRoomID,
        name: user.name,
        group: "False",
      });
    } catch (e) {
      console.log("sdhck sdnks--->",e);
    }

    //setMessage('');
  };

  const onClick = async () => {
    try {
      let newChatRoomData;
      const userInfo = await Auth.currentAuthenticatedUser();
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

        //const userInfo = await Auth.currentAuthenticatedUser();
        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: userInfo.attributes.sub,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );
      }

      setUserID(userInfo.attributes.sub);
      setChatRoomID(
        user.previousChatID
          ? user.previousChatID
          : newChatRoomData?.data.createChatRoom.id || ""
      );

      createMess({});
    } catch (err) {
      console.warn("error in line 117-->",err);
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
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 60,
  },
});