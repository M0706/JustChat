import React from 'react';
import { Text } from 'react-native';
import { Message } from '../../types';

export type ChatMessageProps = {
  message: Message
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  return (
    <Text>{message.content}</Text>
  );
};

export default ChatMessage;