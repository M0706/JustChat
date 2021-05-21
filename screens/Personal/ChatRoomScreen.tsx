import React, {useEffect, useState} from 'react';
import {FlatList, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import DoubleClick from 'react-native-double-click';

import { useRoute } from '@react-navigation/native';
import {
  API,
  graphqlOperation,
  Auth,
} from 'aws-amplify';

import { messagesByChatRoom } from '../../graphql/queries';
import { onCreateMessage } from '../../graphql/subscriptions';
import ChatMessage from "../../components/ChatMessage";
import BG from '../assets/images/BG.png';
import InputBox from "../../components/InputBox";

const ChatRoomScreen = () => {

  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  const [nextToken, setNextToken] = useState(null);

  // PUblic key routes

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


  useEffect(() => {
    fetchMessages(nextToken);
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

        setMessages([ newMessage, ...messages ]);
        //console.log(messages);
      }
    });

    return () => subscription.unsubscribe();
  }, [messages])



  //console.log(`messages in state: ${messages.length}`)

  const doubleClick=()=>{
    console.warn("Double Clicked")
  }

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
      <FlatList
        data={messages}
        onEndReached={HandleScroll}
        onEndReachedThreshold={0}
        //ListHeaderComponent={renderLoader}
        renderItem={({ item }) => (
          <DoubleClick onClick={doubleClick}>

          <ChatMessage myId={currentUserId} message={item}/>
          </DoubleClick>
       )}
        inverted
        
      />

      <InputBox chatRoomID={route.params.id} />

    </ImageBackground>


  );
}

export default ChatRoomScreen;