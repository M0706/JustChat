import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Message } from "../../types";
import moment from "moment";
import styles from "./styles";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { deleteMessage } from "../../graphql/mutations";

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
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setPrivateKeyOfThisUser(props.privateKeyOfThisUser);
    setUserIndex(props.userIndex);
  }, [props.privateKeyOfThisUser, props.userIndex]);

  const isMyMessage = () => {
    return message.user.id === myId;
  };

  const mediaMessage = (media) => {
    console.log("JLSDFjlksjflksajflkdsjafklajsdflkjads", userIndex);
    try {
      if (media === "") {
        return (
          <Text style={styles.message}>
            {RSA.decryptWithKey(
              message.ciphers[userIndex],
              JSON.parse(privateKeyOfThisUser)
            )}
          </Text>
        );
      }
      //video needs to be sorted
      else {
        return (
          <Image
            source={{ uri: message.media }}
            style={{ width: "100%", height: 100 }}
          />
        );
      }
    } catch (er) {}
  };

  if (privateKeyOfThisUser == "") {
    return <Text></Text>;
  }
  const deleteMessageF = async () => {
    await API.graphql(
      graphqlOperation(deleteMessage, { input: { id: message.id } })
    );
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete the message?
            </Text>
            <View style={styles.buttonComp}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={deleteMessageF}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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

          <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatMessage;
