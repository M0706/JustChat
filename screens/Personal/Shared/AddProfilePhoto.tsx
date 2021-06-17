import React, { useEffect, useState } from 'react';
import { View, Text, Platform, Button, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import uuid from "uuid-random";
import { Auth, API, Storage, graphqlOperation } from "aws-amplify";
import { updateUser } from '../../../src/graphql/mutations';


const AddProfile = (props) => {
  const [img, setImg] = useState("");
  const navigation = useNavigation();
  // console.log(props);
  const userID = props.route.params.userID;

  const getPermission = async() => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      };
  };

  const pickMedia = async () => {
    getPermission();
    const mediaFile = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!mediaFile.cancelled) {
      return mediaFile
    }
  };

  const uploadMedia = async (mediaUri) => {
    // setError(false);
    try {
      const response = await fetch(mediaUri);
      console.log(response);
      const blob = await response.blob();
      console.log("Blog--->",blob);
      const urlParts = mediaUri.split(".");
      const extension = urlParts[urlParts.length - 1];
      const uniqueId = uuid();
      const key = `${uniqueId}.${extension}`;
      await Storage.put(key, blob).then((result: any) => {
      });

      return key;
    } catch (e) {
      console.log(e);
    }
    return "";
  };



  const getMediaFile = async() => {
    const imageUri = await pickMedia();
    const mediaKey = await uploadMedia(imageUri.uri);
    if(mediaKey){
      const signedUrl = await Storage.get(mediaKey);
      console.log(userID);
      await API.graphql(graphqlOperation(updateUser,{
        input:{
          id:userID,
          imageUri:signedUrl,
        }
      }))
      navigation.navigate("MainScreen");
    }
    else{
      Alert.alert("Could not set profile photo");
    }

  }
  
  const skip = ()=>{
    console.warn("fuck you");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={getMediaFile}>
        {/* <Button onPress={pickMedia} title="Choose Photo" /> */}
        <Text style={styles.loginText}>Choose photo</Text>
      </TouchableOpacity>
      <Button onPress={skip} title="Skip" />

    </View>
  )
}

export default AddProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    skipButton:{
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
    loginText:{
      color:"white",
    },
    navigate:{
      color:"white",
      textDecorationLine:"underline"
    }
  });