import React from 'react';
import{ View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChatRoom } from '../../../../types';

export type NewMessageButtonProps = {
  chatRooms: ChatRoom[],
}

const NewMessageButton = (
  props: NewMessageButtonProps
) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Contacts', { chatRooms: props.chatRooms });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;