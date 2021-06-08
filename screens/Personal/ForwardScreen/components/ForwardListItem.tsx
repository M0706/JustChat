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
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/slices/Auth-slice";

export type ForwardListItemProps = {
  user: User;
  forwardMessage: Message;
};

const ForwardListItem = (props: ForwardListItemProps) => {
  const { user } = props;
  const { forwardMessage } = props;
  const [userID, setUserID] = useState("");
  const dispatch = useDispatch();
  // const [chatRoomID, setChatRoomID] = useState("");
  let chatRoomID = "";
  const currentUser = useSelector((state) => state.currentUserInfo);

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

  const onClick = async () => {
    try {
      let newChatRoomData;
      // console.log("User previous ID-->", user.previousChatID);
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

        dispatch(authActions.userInfoChanged());

        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: user.id,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );

        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: currentUser.userID,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );
      }

      chatRoomID = user.previousChatID
        ? user.previousChatID
        : newChatRoomData?.data.createChatRoom.id || "";

      const forwardMessageData = await API.graphql(
        graphqlOperation(createMessage, {
          input: {
            content: forwardMessage,
            media: "",
            userID: currentUser.userID,
            chatRoomID,
          },
        })
      );

      await updateChatRoomAsync(forwardMessageData.data.createMessage.id);

      navigation.navigate("ChatRoom", {
        id: user.previousChatID
          ? user.previousChatID
          : newChatRoomData?.data.createChatRoom.id || "",
        name: user.name,
        group: "False",
      });
    } catch (err) {
      console.warn("error in line 121 in ForwrdListItem-->", err);
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
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 60,
  },
});
