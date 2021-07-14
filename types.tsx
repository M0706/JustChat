export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  NotFound: undefined;
  Contacts: undefined;
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
  ChatsScreen: undefined;
};

export type TabThreeParamList = {
  StatusScreen: undefined;
};

export type TabFourParamList = {
  CallsScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
  status: string;
  previousChatID: string;
};

export type Message = {
  id: string;
  content: string;
  media: string;
  user: User;
  createdAt: string;
};

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
};
export type Channel = {
  id: string,
  users: User[]
  lastMessage: Message
}

export type Space = {
  id: string;
  channels: Channel[];
}