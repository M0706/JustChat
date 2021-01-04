import React from 'react';
import { View, Text, Image } from 'react-native';

import { ChatRoom } from '../../types';
import styles from './style';

export type ChatListItemProps = {
  chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.avatar} source={{ uri: user.imageUri }} />

        <View style={styles.midContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>

      <Text style={styles.time}>Yesterday</Text>
    </View>
  );
};

export default ChatListItem;