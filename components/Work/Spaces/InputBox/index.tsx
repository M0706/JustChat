import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView,} from "react-native";
import styles from './styles';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from '@expo/vector-icons';

const InputBox = () => {

  const [message, setMessage] = useState('');
  const audioRecord = false; //temporary here

  const onMicrophonePress = () => {
    console.warn('Microphone')
  }

  const onSendPress = () => {
    console.warn(`Sending: ${message}`)

    // send the message to the backend

    setMessage('');
  }

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }

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
          // onPress={onPressAttachment}
        />

        {!message && (
          <Fontisto
            name="camera"
            size={24}
            color="grey"
            style={styles.icon}
            // onPress={onCameraPress}
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
  )
}

export default InputBox;