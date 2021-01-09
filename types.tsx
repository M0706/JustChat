export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  CameraScreen: undefined;
};

export type TabTwoParamList = {
  ChatScreen: undefined;
};

export type TabThreeParamList = {
  StatusScreen: undefined;
}

export type TabFourParamList = {
  CallsScreen: undefined;
}

export type User = {
  id: string;
  name: string;
  imageUri: string;
}

export type Message = {
  id: string;
  content: string;
  user: User;
  createdAt: string;
}

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message
}
