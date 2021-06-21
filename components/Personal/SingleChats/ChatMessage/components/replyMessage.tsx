import * as React from 'react';
import { View, Text} from 'react-native';
import styles from '../styles'

const replyMessage = (props) => {

  const { message } = props;
  return (
          <View style={styles.embeddedMessage}>
            <View style={styles.innerText}>

              <Text>{message.replyMessage?.content}</Text>
            </View>
          </View>
  )
}

export default replyMessage;