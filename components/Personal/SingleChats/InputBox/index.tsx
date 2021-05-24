import React, { useState, useEffect } from 'react';
import {
  Entypo, FontAwesome5, 
  MaterialCommunityIcons, 
  Fontisto,
  MaterialIcons          
} from  '@expo/vector-icons';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform
} from 'react-native';
import {
  TouchableOpacity
} from 'react-native-gesture-handler';
import {
  Auth,
  API,
  Storage,
  graphqlOperation
} from 'aws-amplify';
import { createMessage, updateChatRoom } from '../../../../graphql/mutations';
import styles from './styles';

export type InputBoxProps = {
  chatRoomID: string
}

const InputBox = (props: InputBoxProps) => {
  const [userID, setUserID] = useState(null);
  
  const { chatRoomID } = props;

  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUserID(userInfo.attributes.sub);
    };

    fetchUser();
  }, []);

  const onMicrophonePress = () => {
    console.warn('Microphone');
  };

  const updateChatRoomAsync = async (lastMessageID: string) => {
    try {
      await API.graphql(
        graphqlOperation(
          updateChatRoom,
          {
            input: {
              id: chatRoomID,
              lastMessageID
            }
          }
        )
      );
    } catch(err) {
      console.log(err);
    }
  };
 
  //Add media in schema before sending images
  const sendPress = async (Imagekey:object) => {
    //console.log("key in onSendPress ==>",Imagekey)
     try {
      const newMessageData = await API.graphql(
        graphqlOperation(
          createMessage, {
            input: {
              content: message,
              //media:Imagekey,
              userID: userID,
              chatRoomID
            }
          }
        )
      )
      //console.log("NewMessage Data --->",newMessageData)
      setMessage('');
      await updateChatRoomAsync(newMessageData.data.createMessage.id)
    } catch (e) {
      console.log(e);
    }

    //setMessage('');
  }

  const uploadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const urlParts = image.split(".");
      const extension = urlParts[urlParts.length - 1];
      const uniqueId = uuid();
      console.log(uniqueId);
      const key = `${uniqueId}.${extension}`;
      console.log("Key -->", key);
      await Storage.put(key, blob).then((result) => {
        console.log("Uploaded image to S3");
      });

      return key;
    } catch (e) {
      console.log(e);
    }
    return "";
  };

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
    const signedUrl = await Storage.get(imagekey)
    //console.log("Signed Url --->",signedUrl);
    //sendPress(signedUrl); 
}

const onCameraPress=()=>{
  console.warn("Camera pressed")
}



  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      sendPress("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{ width: '100%' }}
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
  );
};

export default InputBox;


