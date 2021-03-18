import React, { useEffect, useState, userRef, useRef } from "react";
import {
  FlatList,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
} from "react-native";
import DoubleClick from "react-native-double-click";
import { onDeleteMessage } from "../graphql/subscriptions";

import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";

import { getChatRoom, messagesByChatRoom } from "../graphql/queries";
import { onCreateMessage } from "../graphql/subscriptions";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox";
import AsyncStorage from "@react-native-community/async-storage";
// import { RSA, RSAKey } from "../helpers/rsa";
// import { UserState } from "realm";

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  // const currentUserId = useRef("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [publicKeyOfOtherUser, setPublicKeyOfOtherUser] = useState("");
  const [privateKeyOfThisUser, setPrivateKeyOfThisUser] = useState("");
  const [publicKeyOfThisUser, setPublicKeyOfThisUser] = useState("");
  const [userIndex, setUserIndex] = useState("");
  const [otherUserIndex, setOtherUserIndex] = useState("");
  const [nextToken, setNextToken] = useState(null);
  // PUblic key routes

  const route = useRoute();

  const HandleScroll = () => {
    //console.warn("fuck")
    if (nextToken !== null) {
      fetchMessages(nextToken);
      setKeys();
    }
  };

  const fetchMessages = async (nextToken) => {
    const loadmessages = await API.graphql(
      graphqlOperation(messagesByChatRoom, {
        chatRoomID: route.params.id,
        sortDirection: "DESC",
        limit: 10,
        nextToken,
      })
    );

    //console.log("dfssdff--->",loadmessages.data.messagesByChatRoom.items)
    let messageArr = [...messages].concat(
      loadmessages.data.messagesByChatRoom.items
    );
    setMessages(messageArr);
    setNextToken(loadmessages.data.messagesByChatRoom.nextToken);
    // console.log("Next Token --->",
    //   messages.data.messagesByChatRoom.nextToken
    // );
  };

  const setKeys = async () => {
    const publicKeyOfThisUser = await AsyncStorage.getItem("publicKey");
    setPublicKeyOfThisUser(publicKeyOfThisUser);

    const chatRoomObj = await API.graphql(
      graphqlOperation(getChatRoom, {
        id: route.params.id,
      })
    );

    for (let userIndex in chatRoomObj.data.getChatRoom.chatRoomUsers.items) {
      if (
        chatRoomObj.data.getChatRoom.chatRoomUsers.items[userIndex].publicKey !=
        publicKeyOfThisUser
      ) {
        console.log(
          "Chat Room Screen publicKeyOfOtherUser --------->",
          userIndex,
          chatRoomObj.data.getChatRoom.chatRoomUsers.items[userIndex].publicKey,
          publicKeyOfThisUser
        );

        setPublicKeyOfOtherUser(
          chatRoomObj.data.getChatRoom.chatRoomUsers.items[userIndex].publicKey
        );

        setOtherUserIndex(userIndex);
      } else {
        setUserIndex(userIndex);
      }
    }

    const privateKeyOfThisUserString = await AsyncStorage.getItem("privateKey");
    setPrivateKeyOfThisUser(privateKeyOfThisUserString);
  };

  useEffect(() => {
    fetchMessages(nextToken);
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
    const onDeleteMessageSubscription = API.graphql(
      graphqlOperation(onDeleteMessage)
    ).subscribe({
      next: (data) => {
        console.log("Yahan pr fetch kia mene :)");
        fetchMessages(nextToken);
      },
    });

    return () => onDeleteMessageSubscription.unsubscribe();
  }, [messages]);
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

  const renderLoader = () => {
    //add loader when reached top, to be added later
    return (
      <View style={{ alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={messages}
        onEndReached={HandleScroll}
        onEndReachedThreshold={0}
        //ListHeaderComponent={renderLoader}
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
