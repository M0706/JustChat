import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

export default function ImageScreen({route}) {
 
 const { photo } = route.params;
 console.log("Photo---->",photo);
 
 return (
 <View style={{ flex: 1, alignItems: "center",justifyContent:"center" }}>
 
 <Image source={{ uri: photo.uri }} style={{width:380,height:550}}/>
</View>
 );
}