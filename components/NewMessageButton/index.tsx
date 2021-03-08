import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ChatRoom } from "../../types";

export type NewMessageButtonProps = {
  chatRooms: ChatRoom[];
};

const NewMessageButton = (props: NewMessageButtonProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    //console.log(props)
    navigation.navigate("Contacts", { chatRooms: props.chatRooms });
  };

  return (
    <View style={styles.container}>
      <ThreeDRotation />
      <TouchableOpacity onPress={onPress}>
        <Text>ICON</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;
