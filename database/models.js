const ChatRoom = {
  name: "ChatRoom",
  properties: {
    roomId: "string",
    messages: { type: "list", objectType: "Message" },
    hashKey: "string",
  },
};

export { ChatRoom };
