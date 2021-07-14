import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../constants/Colors";

const NewSpaceButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CreateSpace");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NewSpaceButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
