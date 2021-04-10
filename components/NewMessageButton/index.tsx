import React from 'react';
import {TouchableOpacity, View} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { ChatRoom } from '../../types';


export type NewMessageButtonProps = {
  chatRooms: ChatRoom[],
}

const NewMessageButton = (props:NewMessageButtonProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    //console.log(props)
    navigation.navigate('Contacts',{ chatRooms: props.chatRooms });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </TouchableOpacity>
    </View>
  )
}

export default NewMessageButton;
