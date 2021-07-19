import React from "react";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewGroupsButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AddContacts", {
      NewGroup: true,
      existingMembers: []
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NewGroupsButton;
