import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from './styles';

import { Message } from '../../types';

export type ChatMessageProps = {
  message: Message
  currentUserId: string
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, currentUserId } = props;

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
  

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>
        { !isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> }
        {/* convert next line after adding media */}
        <Text>{message.content}</Text>

        {/* {message.media==="" ? <Text style={styles.message}>{message.content}</Text>
           :<Image source={{uri: message.media}} style={{ width: 100, height: 100 }} /> */}

        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;