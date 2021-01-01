import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,Image} from "react-native";
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import {
  API,
  Auth,
  graphqlOperation,
  Storage
} from 'aws-amplify';

import {
  createMessage,
  updateChatRoom,
} from '../../graphql/mutations';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from '@expo/vector-icons';

import Attachment from "./Attachment";
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid/async/index.native'

const InputBox = (props) => {

  const { chatRoomID } = props;

  const [message, setMessage] = useState('');
  const [myUserId, setMyUserId] = useState(null);
  const [image, setImage] = useState(null);
  //const [key,setImagekey] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyUserId(userInfo.attributes.sub);
    }
    fetchUser();
  }, [])

  useEffect(() => {
    (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            askpermission(null);
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
     })();
  }, []);

  const onMicrophonePress = () => {
        console.warn("Microphone pressed")
    }
  

  const onCameraPress=()=>{
    //console.warn("Camera pressed")
    navigation.navigate("Camera")
  }

  const updateChatRoomLastMessage = async (messageId: string) => {
    try {
      await API.graphql(
        graphqlOperation(
          updateChatRoom, {
            input: {
              id: chatRoomID,
              lastMessageID: messageId,
            }
          }
        )
      );
    } catch (e) {
      console.log(e);
    }
  }

  const onSendPress = async (Imagekey: string) => {
    //console.log("key in onSendPress ==>",Imagekey)
     try {
      const newMessageData = await API.graphql(
        graphqlOperation(
          createMessage, {
            input: {
              content: message,
              media:Imagekey,
              userID: myUserId,
              chatRoomID
            }
          }
        )
      )
      //console.log("NewMessage Data --->",newMessageData)
      await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
    } catch (e) {
      console.log(e);
    }

    setMessage('');
  }

  const uploadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const urlParts = image.split('.');
      const extension = urlParts[urlParts.length - 1];

      const key = `FirstImage.${extension}`;

      await Storage.put(key, blob).then(result=>{
        console.log("Uploaded image to S3")
      });
      
      return key;

    } catch (e) {
      console.log(e);
    }
    return '';
  }

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress("");
    }
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
    //console.log(result)
      setImage(result.uri);
    }
  };

  const onPressAttachment= async ()=>{
    //console.warn("Send Attachment")
    await pickImage();
    const imagekey = await uploadImage();
    //console.log("Image key in OnpressAttachment -->",imagekey);
    onSendPress(imagekey);
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{width: '100%'}}
    >
      <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder={"Type a message"}
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        
        <Entypo name="attachment" 
        size={24} color="grey" 
        style={styles.icon} 
        onPress={onPressAttachment}
        />
        
        

        {!message && 
        <Fontisto name="camera" 
                  size={24} color="grey" 
                  style={styles.icon}
                  onPress={onCameraPress}
                  />}
        </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message
            ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
            : <MaterialIcons name="send" size={28} color="white" />}
        </View>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default InputBox;