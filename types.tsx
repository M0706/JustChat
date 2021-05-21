export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
  Fleet: undefined;
  Login: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Personal: undefined;
  Work: undefined;
  Stories: undefined;
};

export type BottomTabParamList={
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined; 
};

export type ChatScreenList = {
  ChatScreen: undefined;
};

export type StoriesScreenList = {
  Stories: undefined;
};

export type CameraScreenList = {
  Camera: undefined;
};

export type LoginScreenList = {
  Login: undefined;
}

export type User = {
  id: String;
  name: String;
  imageUri: string;
  status: String;
  previousChatID: string;
}

export type Message = {
  id: String;
  ciphers: [[string]];
  createdAt: string;
  user: User;
  media: String;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}

export type FleetType = {
  id: string,
  createdAt: string,
  user: User,
  type: string,
  text?:string,
  image?:string,
}