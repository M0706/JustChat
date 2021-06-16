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
import { useSelector } from "react-redux";
import moment from "moment";

const ChatRoomHeader = (props) => {
  const navigation = useNavigation();
  let lastSeen;
  if (props.lastSeen) {
    lastSeen = moment(props.lastSeen).fromNow();
  }
   
  
  const backButtonHandler = () => {
    if (props.isGroup ==="True") {
      return (
        <AntDesign name="back" size={24} color="black" style={styles.backButton} onPress={()=> navigation.navigate("GroupChatScreen")}/>
       )
    }
    else if(props.isGroup ==="False"){
      return (
        <AntDesign name="back" size={24} color="black" style={styles.backButton} onPress={() => navigation.navigate("ChatScreen")} />
      )
    }
  }


  return (
    <View style={styles.container}>
      {backButtonHandler()}
      <View style={styles.rightContainer}> 
        <View style={styles.midContainer}>
          <Text style={styles.headerText} onPress= {() => {
                navigation.navigate("OtherUserInfo");
              }} >{props.Name}</Text>
          <Text style={styles.lastSeen}>{lastSeen}</Text>
        </View>
      </View>
     
      <View
          style={styles.right}
        >
        <FontAwesome5 name="video" size={22} color={"black"}/>
          <MaterialIcons
            name="call"
            size={22}
            color={"black"}
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

export default ChatRoomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding:20,
    paddingBottom:10,
  },
  midContainer:{
    width:'65%',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop : 6,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#333',
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
  },
  lastSeen: {
    fontSize: 16,
    color: 'grey',
  }
})
