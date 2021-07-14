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

const ImageHeader = (props) => {
  const navigation = useNavigation();
//   //console.log(props.isGroup);
  const {forwardMedia,forwardMessage} = props.forwardScreenProps;
//   console.log("media---->", props.forwardScreenProps.forwardMedia);
//   console.log("message--->", props.forwardScreenProps.forwardMessage);
//   console.log("chatrooms--->", props.forwardScreenProps.chatRooms);


  
  const backButtonHandler = () => {


      return (
        <AntDesign name="back" size={24} color="black" style={styles.backButton} onPress={()=> navigation.goBack()}/>
       )
  }

  // const customMenu = () = {
    
  // }

  return (
    <View style={styles.container}>
      {backButtonHandler()}

     
      <View
          style={styles.right}
        >
        {/* <FontAwesome5 name="video" size={22} color={"black"}/> */}
          <AntDesign name="arrowright" size={22} color="black" 
          onPress={()=>{
                navigation.navigate("ForwardScreen", {
                    forwardMessage,
                    forwardMedia,
                  });
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

export default ImageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding:20,
    paddingBottom:10,
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
