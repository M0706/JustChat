import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChatRoom } from "../../../../types";
import styles from "./style";
import { Auth } from "aws-amplify";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const [otherUser, setOtherUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getOtherUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      //console.log(chatRoom);
      if (chatRoom.group === "True") {
        setOtherUser({
          name: chatRoom.name,
          imageUri: "",
        });
      }
      else {
        const user = chatRoom.chatRoomUsers.items.find(
          (i) => i.user.id !== userInfo.attributes.sub
        ).user;
        setOtherUser(user);
      }
    };

    getOtherUser();
  }, []);

  const onClick = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: otherUser.name,
      group: props.group,
    });
  };

  if (!otherUser) return null;

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: otherUser.imageUri }} />

        <View style={styles.rightContainer}>
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{otherUser.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {chatRoom.lastMessage
                ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`
                : ""}
            </Text>
          </View>

          <Text style={styles.time}>
            {chatRoom.lastMessage &&
              moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
