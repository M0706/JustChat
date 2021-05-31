import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import moment from 'moment';
import styles from './styles';
//import Clipboard from '@react-native-community/clipboard';
import Clipboard from 'expo-clipboard';


import { Message } from '../../types';
import { useState } from 'react';

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
    console.log(message.media);
    if(message.content!==""){
      return(<Text>{message.content}</Text>);
    }
    else{
      return(
        <Image
          source={{ uri: message.media }}
          style={{ width: 100, height: 100 }}
        />
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
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      
      ]}>
        { group==="True" && !isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> }
        {/* convert next line after adding media */}
        
        {/* <Text >{message.content}</Text> */}
        {messageType(message)}

        

        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
      </TouchableOpacity>

    </View>
  );
};

export default ChatMessage;