import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'

const replyMessage = (props: { message: any; }) => {

  const { message } = props;
  return (

    <View
      style=
      {styles.replyText}
    >

      <Text style={{ color: "white" }}>{message.replyMessage?.content}</Text>
      {/* <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        /> */}


    </View>
  )
}

export default replyMessage;