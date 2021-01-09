import React, { useState } from 'react';
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {
  const [message, setMessage] = useState('');

  const onMicrophonePress = () => {
    console.warn('Microphone');
  };

  const sendPress = () => {
    console.warn(`Sending: ${message}`);

    // Send message to the backend

    setMessage('');
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      sendPress();
    }
  };

  return (
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
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        { !message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} /> }
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {
            !message
              ? <MaterialCommunityIcons name="microphone" size={24} color="white" />
              : <MaterialIcons name="send" size={24} color="white" />
          }
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;