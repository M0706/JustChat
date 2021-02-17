import React from 'react';
import {Text, View,Image, TouchableOpacity} from 'react-native';
import { Message } from "../../types";
import moment from "moment";
import styles from './styles';
import {
  API,
  Auth,
  graphqlOperation,
  Storage
} from 'aws-amplify';
import {
  deleteMessage,
} from '../../graphql/mutations';

export type ChatMessageProps = {
  message: Message;
  myId: String,
}



const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props

  const isMyMessage = () => {
    console.log("Message --->",message)
    return message.user.id === myId;
  }

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
      <TouchableOpacity onPress={messageDelete}>
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

      </TouchableOpacity>
      
    </View>
  )
}

export default ChatMessage;
