import React, { useEffect, useState } from "react";
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
  userIndex: String;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props;
  // const [message, setMessage] = useState(null);
  // const [myId, setMyId] = useState("");
  const [privateKeyOfThisUser, setPrivateKeyOfThisUser] = useState("");
  const [userIndex, setUserIndex] = useState("");

  useEffect(() => {
    // setMessage(props.message);
    // setMyId(props.myId);
    setPrivateKeyOfThisUser(props.privateKeyOfThisUser);
    setUserIndex(props.userIndex);
  }, [props.privateKeyOfThisUser, props.userIndex]);

  const isMyMessage = () => {
    return message.user.id === myId;
  };

  const mediaMessage = (media) =>{
    console.log(media)
    if(media===""){
      return (<Text style={styles.message}>
      {RSA.decryptWithKey(
        message.ciphers[userIndex],
        JSON.parse(privateKeyOfThisUser)
      )}
    </Text>) 
    }
    //video needs to be sorted
    else{
      return ( <Image
        source={{ uri: message.media }}
        style={{ width: 100, height: 100 }}
      />)
    }
  }



  if (privateKeyOfThisUser == "") {
    return <Text></Text>;
  }

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

          {mediaMessage(message.media)}
{/* 
          {message.media === "" ? (
            <Text style={styles.message}>
              {RSA.decryptWithKey(
                message.ciphers[userIndex],
                JSON.parse(privateKeyOfThisUser)
              )}
            </Text>
          ) : (
            <Image
              source={{ uri: message.media }}
              style={{ width: 100, height: 100 }}
            />
          )}
           */}
          <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatMessage;
