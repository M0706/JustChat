import React, { useState, useEffect } from "react";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { View, Text,Button, KeyboardAvoidingView, TextInput, Platform, Alert, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../constants/Colors";

const ChatsRoomHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign name="back" size={24} color="black" style={styles.backButton} onPress={()=> navigation.navigate("ChatScreen")}/>
      <Text style={styles.headerText} >{props.Name}</Text>
      <View
          style={styles.right}
        >
        <FontAwesome5 name="video" size={22} color={"black"}/>
          <MaterialIcons
            name="call"
            size={22}
            color={"black"}
            onPress={() => {
              navigation.navigate("OtherUserInfo");
            }}
          />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            color={"black"}
          />
        </View>

      </View>

  )
  
}

export default ChatsRoomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 20,
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight:120,
    letterSpacing: 1,
    color: '#333',
    paddingTop: 15,
  },
  right: {
    width: 90,
    flexDirection: "row",
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  backButton: {
    paddingTop: 15,
  }
})
