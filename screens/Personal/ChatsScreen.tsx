import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from '../../components/Themed';
import ChatListItem from '../../components/ChatListItem';
import NewMessageButton from '../../components/NewMessageButton';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from './queries';
import { useNavigation } from "@react-navigation/native";
import { onUpdateChatRoom, onCreateChatRoom } from '../../graphql/subscriptions';
import { ChatRoom } from '../../types';

export default function ChatsScreen() {

  const navigation = useNavigation();
  const [chatRooms, setChatRooms] = useState([]);

  const fetchChatRooms = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log("CurrentAuthenticatedUSER---->",currentUser);

      const userData = await API.graphql(
        graphqlOperation(
          getUser,
          { id: currentUser.attributes.sub }
        )
      );

      setChatRooms(userData.data.getUser.chatRoomUser.items.map(i => ({ ...i.chatRoom })));
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchChatRooms();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchChatRooms();
  }, []);

  useEffect(() => {
    const onUpdateChatRoomSubscription = API.graphql(
      graphqlOperation(onUpdateChatRoom)
    ).subscribe({
      next: (data) => {
        fetchChatRooms();
      }
    });

    return () => onUpdateChatRoomSubscription.unsubscribe();
  }, [chatRooms]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateChatRoom)
    ).subscribe({
      next: (data) => {
        fetchChatRooms();
      }
    });

    return () => subscription.unsubscribe();
  }, [chatRooms]);

  return (
    <View style={styles.container}>
      {
        chatRooms.length === 0
          ? (
            <View>
              <FontAwesome5 style={{ textAlign: 'center' }} name="rocketchat" size={100} color="black" />
              <Text style={styles.mainActionText}>Create a new chat using</Text>
              <Text style={styles.subMainActionText}>the bottom below</Text>
            </View>
          ) : (
            <FlatList
              style={styles.list}
              data={chatRooms}
              renderItem={({ item }) => <ChatListItem chatRoom={item} />}
              keyExtractor={(item: ChatRoom) => item.id}
            />
          )
      }
      <NewMessageButton chatRooms={chatRooms} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  list: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  mainActionText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20
  },
  subMainActionText: {
    textAlign: 'center',
    fontSize: 18
  }
});

