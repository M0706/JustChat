const ChatRoom = {
  name: "ChatRoom",
  properties: {
    roomId: "string",
    messages: { type: "list", objectType: "Message" },
  },
};

const UserData = {
  name: "UserData",
  properties: {
    privateKey: "String",
  },
};

export { ChatRoom, UserData };
