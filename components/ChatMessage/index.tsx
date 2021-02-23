import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Message } from "../../types";
import moment from "moment";
import styles from "./styles";
// import {
//   API,
//   Auth,
//   graphqlOperation,
//   Storage
// } from 'aws-amplify';
// import {
//   deleteMessage,
// } from '../../graphql/mutations';

import { RSA, RSAKey } from "../../helpers/rsa";

export type ChatMessageProps = {
  message: Message;
  myId: String;
  privateKeyOfThisUser: String;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId, privateKeyOfThisUser } = props;

  const isMyMessage = () => {
    return message.user.id === myId;
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
      <TouchableOpacity>
        <View
          style={[
            styles.messageBox,
            {
              backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
              marginLeft: isMyMessage() ? 50 : 0,
              marginRight: isMyMessage() ? 0 : 50,
            },
          ]}
        >
          {!isMyMessage() && (
            <Text style={styles.name}>{message.user.name}</Text>
          )}

          {message.media === "" ? (
            <Text style={styles.message}>
              {/* {RSA.decryptWithKey(
                message.content,
                JSON.parse(privateKeyOfThisUser)
              )} */}
              {privateKeyOfThisUser}
              {message.content}
            </Text>
          ) : (
            <Image
              source={{ uri: message.media }}
              style={{ width: 100, height: 100 }}
            />
          )}
          <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatMessage;
