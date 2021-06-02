import React from 'react';
import { Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import moment from 'moment';
import styles from './styles';
//import Clipboard from '@react-native-community/clipboard';
import Clipboard from 'expo-clipboard';


import { Message } from '../../../../types';
import { useState } from 'react';
import { color } from 'react-native-elements/dist/helpers';

export type ChatMessageProps = {
  message: Message
  currentUserId: string
  group: string
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, currentUserId, group } = props;
  // console.log(message)
  const [copiedText, setCopiedText] = useState('');

  const isMyMessage = () => {
    return message.user.id === currentUserId;
    
  };



  const messageType=(message)=>{
    if(message.content!==""){
      return(<Text style = {[{color: isMyMessage()? "white": "black"}]}>{message.content}</Text>);
    }
    else if(message.media!==""){
      const mediaLink = String(message.media);
      //console.log("media--->",mediaLink);
      
      return(
        <>
        {message.media!==''?
        <Image
          source = {{ uri: message.media }}
          style={styles.image}
        />: <ActivityIndicator /> }
        </>
      )
    }
  }

 
  const copyToClipboard = async () => {
    Clipboard.setString(message.content);
    // await fetchCopiedText();
    const text = await Clipboard.getStringAsync();
    console.warn(text);
    setCopiedText(text);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={copyToClipboard} >
      <View style={[
        styles.messageBox,
        {
          backgroundColor: !isMyMessage() ? '#ECECEC' : '#4169E1',
          marginLeft: isMyMessage() ? 70 : 0,
          marginRight: isMyMessage() ? 0 : 70,
        }
      
      ]}>
        { group==="True" && !isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> }

        {messageType(message)}

        

        <Text style={[styles.time, {color: isMyMessage()? "white": "black"}]}>{moment(message.createdAt).fromNow()}</Text>
      </View>
      </TouchableOpacity>

    </View>
  );
};

export default ChatMessage;