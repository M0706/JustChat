import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import { User } from '../../types';
import styles from './style';

export type ContactListItemProps = {
  user: User
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();

  const onClick = () => {
    //Nav to chat room with user
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: user.imageUri }} />

          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;