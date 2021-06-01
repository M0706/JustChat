import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";

import ChatMessage from "../../../components/Personal/SingleChats/ChatMessage";
import BG from "../../../assets/images/BG.png";
import InputBox from "../../../components/Personal/SingleChats/InputBox";
import { messagesByChatRoom } from "../../../src/graphql/queries";
import { onCreateMessage } from "../../../src/graphql/subscriptions";
import { Cache } from "aws-amplify";

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [nextToken, setNextToken] = useState(null);

  const route = useRoute();
  const HandleScroll = () => {
    if (nextToken !== null) {
      fetchMessages(nextToken);
    }
  };

  const fetchMessages = async (nextToken) => {
    const loadmessages = await API.graphql(
      graphqlOperation(messagesByChatRoom, {
        chatRoomID: route.params.id,
        sortDirection: "DESC",
        limit: 15,
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

  const fetchUserId = async () => {
    let currentUserID =  await Cache.getItem("UserID")
    if(!currentUserID){
      const user= await Auth.currentAuthenticatedUser();
      currentUserID = user.attributes.sub;
      Cache.setItem("UserID",currentUserID);
    }
    setCurrentUserId(currentUserID);
  };

  useEffect(() => {
    fetchMessages(nextToken);
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

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={messages}
        onEndReached={HandleScroll}
        onEndReachedThreshold={0}
        //ListHeaderComponent={renderLoader}
        renderItem={({ item }) => (
          <ChatMessage currentUserId={currentUserId} message={item} group={route.params.group} />
        )}
        inverted
      />

      <InputBox chatRoomID={route.params.id} />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
