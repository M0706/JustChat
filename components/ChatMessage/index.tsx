import React from 'react';
import {Text, View,Image} from 'react-native';
import { Message } from "../../types";
import moment from "moment";
import styles from './styles';
import {S3Image} from "aws-amplify-react-native";

export type ChatMessageProps = {
  message: Message;
  myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props

  const isMyMessage = () => {
    return message.user.id === myId;
  }

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox, {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>

        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}

        {message.media==="" ? <Text style={styles.message}>{message.content}</Text>
           :<Image source={{uri: message.media}} style={{ width: 100, height: 100 }} />
                 }
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  )
}

export default ChatMessage;
