import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';
import { ChatRoom } from '../types';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        // keyExtractor={}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
