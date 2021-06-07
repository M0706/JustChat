import React, { useState, useEffect } from "react";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, Text,Button, KeyboardAvoidingView, TextInput, Platform, Alert, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ChatsRoomHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button ></Button>
      <Text>Manav Garg</Text>

    </View>
  )
  
}

export default ChatsRoomHeader;

const styles = StyleSheet.create({
  header: {
    
  }
})
