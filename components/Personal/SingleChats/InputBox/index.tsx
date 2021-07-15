import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import { View, KeyboardAvoidingView, TextInput, Platform, Alert, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Auth, API, Storage, graphqlOperation } from "aws-amplify";
import { createMessage, updateChatRoom } from "../../../../src/graphql/mutations";
import styles from "./styles";
// import * as ImagePicker from 'expo-image-picker';
import uuid from "uuid-random";
import Microphone from "./microhone";

export type InputBoxProps = {
  chatRoomID: string;
};

const InputBox = (props: InputBoxProps) => {
  const [userID, setUserID] = useState(null);
  const { chatRoomID, replyMessageID, setReply } = props;
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [audioRecord, setAudioRecord] = useState(false);
  const [audioURI, setAudioURI] = useState("")
    
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUserID(userInfo.attributes.sub);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const onMicrophonePress = () => {
    return (
      <Microphone />
    )
  };

  const updateChatRoomAsync = async (lastMessageID: string) => {
    try {
      await API.graphql(
        graphqlOperation(updateChatRoom, {
          input: {
            id: chatRoomID,
            lastMessageID,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  //Add media in schema before sending images
  const sendPress = async (mediaKey: object) => {

    try {

      const newMessageData = await API.graphql(
        graphqlOperation(createMessage, {
          input: {
            content: message,
            media:mediaKey,
            userID: userID,
            read: false,
            chatRoomID,
            replyMessageID, setReply
          },
        })
      );
      setMessage("");
      setReply(null);
      await updateChatRoomAsync(newMessageData.data.createMessage.id);
    } catch (e) {
      console.log(e);
    }

    //setMessage('');
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
      await Storage.put(key, blob).then((result) => {
      });

      return key;
    } catch (e) {
      setError(true);
      console.log(e);
    }
    return "";
  };

  const pickMedia = async () => {
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

  const onPressAttachment = async () => {
    const mediaFile = await pickMedia();
    const mediaKey = await uploadMedia(mediaFile.uri);
    //console.log("mediakey-->",mediaKey);
    if(mediaKey){
      const signedUrl = await Storage.get(mediaKey);
      sendPress(signedUrl);
    }
    else{
      Alert.alert("Network error, try again later");
    }

  };

  const onCameraPress = () => {
    console.warn("Camera pressed");
  };

  const audioShare = () => {
    return (
      <Microphone setAudioRecord={setAudioRecord} setAudioURI={setAudioURI} />
    )
  }

  const onPress = () => {
    if (!message) {
      setAudioRecord(!audioRecord);
    } else {
      sendPress({});
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ width: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FontAwesome5 name="laugh-beam" size={24} color="grey" />
          <TextInput
            placeholder="Type a message"
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <Entypo
            name="attachment"
            size={24}
            color="grey"
            style={styles.icon}
            onPress={onPressAttachment}
          />

          {!message && (
            <Fontisto
              name="camera"
              size={24}
              color="grey"
              style={styles.icon}
              onPress={onCameraPress}
            />
          )}
        </View>
        <View>
        {audioRecord ? audioShare()
          :
          <TouchableOpacity onPress={onPress} >
               <View style={styles.buttonContainer}>
                 {!message ? (
                   <MaterialCommunityIcons
                     name="microphone"
                     size={28}
                     color="white"
                   />
                 ) : (
                   <MaterialIcons name="send" size={28} color="white" />
                 )}
               </View>
        </TouchableOpacity> }
        </View>
  
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputBox;
