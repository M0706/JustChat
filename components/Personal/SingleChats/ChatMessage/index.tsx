import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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


  // const messageDelete=async()=>{
  //   try{
  //     const deletedmessageData = await API.graphql(
  //       graphqlOperation(
  //         deleteMessage, {
  //           input: {
  //             id:myId
  //           }
  //         }
  //       )
  //     )
  //     console.log("Deletemessage===>",deletedmessageData)

  //   }
  //   catch(e){ 
  //     console.log("Message cannot be deleted")
  //   }
  // }

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
        
        <Text >{message.content}</Text>

        {/* {message.media==="" ? <Text style={styles.message}>{message.content}</Text>
           :<Image source={{uri: message.media}} style={{ width: 100, height: 100 }} /> */}

        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
      </TouchableOpacity>

    </View>
  );
};

export default ChatMessage;