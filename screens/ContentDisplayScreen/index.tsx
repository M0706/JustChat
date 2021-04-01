import React from "react";
import { StyleSheet, Text, View ,Image, TouchableOpacity} from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";

export default function ImageScreen({route}) {
 //console.log(route)
 const navigation = useNavigation()
 const { photo } = route.params;
 const {Screen} = route.params;
 //console.log("Screen---->",params);

 const onPress = (Screen: { Screen: string; },photo: any) => {
    console.log("fuck")
    if(Screen.Screen==="AccountScreen"){
        navigation.navigate("AccountScreen",{imageUri: photo.uri});
    }
    //navigation.navigate("Contacts", { chatRooms: props.chatRooms });
    
  };
 
 return (
 <View style={{ flex: 1, alignItems: "center",justifyContent:"center" }}>
 <Image source={{ uri: photo.uri }} style={{width:380,height:550}}/>
 <TouchableOpacity onPress={()=>onPress(Screen,photo)}>
        <Text>SENDBUTTON</Text>
  </TouchableOpacity>
</View>
 );
}