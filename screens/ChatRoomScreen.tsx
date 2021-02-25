import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import DoubleClick from "react-native-double-click";

import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";

import { getChatRoom, messagesByChatRoom } from "../graphql/queries";
import { onCreateMessage } from "../graphql/subscriptions";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox";
import AsyncStorage from "@react-native-community/async-storage";
import { RSA, RSAKey } from "../helpers/rsa";
import { UserState } from "realm";
import { ContentInsetAdjustmentBehavior } from "react-native-webview/lib/WebViewTypes";

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [publicKeyOfOtherUser, setpublicKeyOfOtherUser] = useState("");
  const [privateKeyOfThisUser, setprivateKeyOfThisUser] = useState("");
  const [publicKeyOfThisUser, setpublicKeyOfThisUser] = useState("");
  const [userIndex, setuserIndex] = useState("");
  const [otherUserIndex, setotherUserIndex] = useState("");

  // PUblic key routes

  const route = useRoute();

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await API.graphql(
        graphqlOperation(messagesByChatRoom, {
          chatRoomID: route.params.id,
          sortDirection: "DESC",
        })
      );

      setMessages(messages.data.messagesByChatRoom.items);
    };

    const setKeys = async () => {
      let publicKeyOfThisUser = await AsyncStorage.getItem("publicKey");
      setpublicKeyOfThisUser(publicKeyOfThisUser);

      // console.log("publicKeyOfThisUser", publicKeyOfThisUser);

      const chatRoomObj = await API.graphql(
        graphqlOperation(getChatRoom, {
          id: route.params.id,
        })
      );

      for (let userIndex in chatRoomObj.data.getChatRoom.chatRoomUsers.items) {
        if (
          chatRoomObj.data.getChatRoom.chatRoomUsers.items[userIndex]
            .publicKey != publicKeyOfThisUser
        ) {
          setpublicKeyOfOtherUser(
            chatRoomObj.data.getChatRoom.chatRoomUsers.items[userIndex]
              .publicKey
          );
          // console.log("publickeflkjasrkldfjdasf", publicKeyOfOtherUser);
          setotherUserIndex(userIndex);
        } else {
          setuserIndex(userIndex);
        }
      }

      const privateKeyOfThisUserString = await AsyncStorage.getItem(
        "privateKey"
      );
      setprivateKeyOfThisUser(privateKeyOfThisUserString);

      console.log(
        "Moment of Truth partIIII----------------->>>>>>>>>>>> ",
        privateKeyOfThisUser
      );
    };

    fetchMessages();
    setKeys();

  }, []);

  useEffect(() => {
    const fetchUserId = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setCurrentUserId(currentUser.attributes.sub);
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: async (data) => {
        const newMessage = data.value.data.onCreateMessage;

        if (newMessage.chatRoomID !== route.params.id) {
          // console.log('Message is in another room');
          return;
        }

        setMessages([newMessage, ...messages]);
        //console.log(messages);
      },
    });

    return () => subscription.unsubscribe();
  }, [messages]);

  //console.log(`messages in state: ${messages.length}`)

  const doubleClick = () => {
    console.warn("Double Clicked");
  };

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <DoubleClick onClick={doubleClick}>
            <ChatMessage
              myId={currentUserId}
              message={item}
              privateKeyOfThisUser={privateKeyOfThisUser}
              userIndex={userIndex}
            />
          </DoubleClick>
        )}
        inverted
      />

      <InputBox
        chatRoomID={route.params.id}
        publicKeyOfOtherUser={publicKeyOfOtherUser}
        otherUserIndex={otherUserIndex}
        publicKeyOfThisUser={publicKeyOfThisUser}
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
