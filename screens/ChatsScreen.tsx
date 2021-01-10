import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphqlCustom/queries';

export default function ChatsScreen() {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: currentUser.attributes.sub }
          )
        );

        setChatRooms(userData.data.getUser.chatRoomUser.items);
      } catch(err) {
        console.log(err);
      }
    };

    fetchChatRooms();
  }, []);

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
              renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
              keyExtractor={(item) => item.id}
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
