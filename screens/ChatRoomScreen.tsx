import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox';
import { messagesByChatRoom } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  const route = useRoute();

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await API.graphql(
        graphqlOperation(
          messagesByChatRoom,
          {
            chatRoomID: route.params.id,
            sortDirection: 'DESC'
          }
        )
      );
      setMessages(messages.data.messagesByChatRoom.items);
    };

    fetchMessages();
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
          console.log('Message is in another room');
          return;
        }

        setMessages([ newMessage, ...messages ]);
      }
    });

    return () => subscription.unsubscribe();
  }, [messages]);

  return (
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={BG}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatMessage message={item} currentUserId={currentUserId}/>}
        inverted
      />
      <InputBox chatRoomID={route.params.id} />
    </ImageBackground>
  );
};

export default ChatRoomScreen;