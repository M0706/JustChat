import React, { useState, useEffect } from 'react';
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import {
  TextInput,
  View
} from 'react-native';
import {
  TouchableOpacity
} from 'react-native-gesture-handler';
import {
  Auth,
  API,
  graphqlOperation
} from 'aws-amplify';
import { createMessage, updateChatRoom } from '../../graphql/mutations';
import styles from './styles';

export type InputBoxProps = {
  chatRoomID: string
}

const InputBox = (props: InputBoxProps) => {
  const { chatRoomID } = props;
  const [message, setMessage] = useState('');
  const [userID, setUserID] = useState(null);

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

  const sendPress = async () => {
    try {
      const createdMessage = await API.graphql(
        graphqlOperation(
          createMessage,
          {
            input: {
              content: message,
              userID,
              chatRoomID
            }
          }
        )
      );

      await updateChatRoomAsync(createdMessage.data.createMessage.id);
    } catch (err) {
      console.log(err);
    }

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