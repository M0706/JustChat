import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import moment from "moment";
import styles from "./styles";
//import Clipboard from '@react-native-community/clipboard';
import Clipboard from "expo-clipboard";
import { Overlay } from "react-native-elements";

import { Message } from "../../../../types";
import { color } from "react-native-elements/dist/helpers";
import { useNavigation } from "@react-navigation/core";
import { ChatRoom } from "../../../../types";
import VideoPlay from "./components/video";
import ImageDisplay from "./components/image";

export type ChatMessageProps = {
  message: Message;
  currentUserId: string;
  group: string;
  chatRooms: ChatRoom[];
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, currentUserId, group, pressed } = props;
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [copiedText, setCopiedText] = useState("");

  const isMyMessage = () => {
    return message.user.id === currentUserId;
  };

  const CustomMenu = ({ visible, toggleOverlay }) => {
    return (
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
        animationType="fade"
      >
        <Text style={{ padding: 10 }} onPress={copyToClipboard}>
          Copy
        </Text>
        <Text style={{ padding: 10 }} onPress={forwardPress}>
          Forward
        </Text>

        <Text style={{ padding: 10 }}>Delete</Text>
      </Overlay>
    );
  };

  const messageType = (message) => {
    if (message.content !== "") {
      return (
        <Text style={[{ color: isMyMessage() ? "white" : "black" }]}>
          {message.content}
        </Text>
      );
    } else if (message.media !== "") {
      const extensionArr = message.media.split("?")[0].split(".");
      const extension = extensionArr[extensionArr.length - 1];
      //console.log(extension);
      if (extension === "jpg" || extension === "png") {
        return (
          <ImageDisplay
            uri={message.media}
            forwardScreenProps = {{
            forwardMessage: message.content,
            forwardMedia: message.media,
          }}
      />
        );
      }
      else if (extension === "mp4") {
        return (
          <VideoPlay uri={ message.media}/>
        )
      }
    }
  };

  const copyToClipboard = async () => {
    Clipboard.setString(message.content);
    // await fetchCopiedText();
    const text = await Clipboard.getStringAsync();
    pressed(true);
    toggleOverlay();
    setCopiedText(text);
  };

  const forwardPress = () => {
    //console.warn("message to be forward--->", message.content);
    toggleOverlay();
    navigation.navigate("ForwardScreen", {
      forwardMessage: message.content,
      forwardMedia: message.media
    });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={toggleOverlay} >
        <CustomMenu visible={visible} toggleOverlay={toggleOverlay} />

        <View
          style={[
            styles.messageBox,
            {
              backgroundColor: !isMyMessage() ? "#ECECEC" : "#4169E1",
              marginLeft: isMyMessage() ? 70 : 0,
              marginRight: isMyMessage() ? 0 : 70,
            },
          ]}
        >
          {group === "True" && !isMyMessage() && (
            <Text style={styles.name}>{message.user.name}</Text>
          )}

          {messageType(message)}

          <Text
            style={[styles.time, { color: isMyMessage() ? "white" : "black" }]}
          >
            {moment(message.createdAt).fromNow()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatMessage;
