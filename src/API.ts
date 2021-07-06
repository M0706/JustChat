/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  lastSeen?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  lastSeen?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUri?: string | null,
  lastSeen?: string | null,
  status?: string | null,
  chatRoomUser?: ModelChatRoomUserConnection | null,
  channelUser?: ModelChannelUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items?:  Array<ChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id: string,
  userID: string,
  chatRoomID: string,
  clearChatTime?: string | null,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  group: string,
  name?: string | null,
  imageUri?: string | null,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
  messages?: ModelMessageConnection | null,
  lastMessageID: string,
  lastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  createdAt: string,
  content: string,
  media?: string | null,
  userID: string,
  chatRoomID: string,
  read: boolean,
  replyMessageID?: string | null,
  replyMessage?: Message | null,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  updatedAt: string,
};

export type ModelChannelUserConnection = {
  __typename: "ModelChannelUserConnection",
  items?:  Array<ChannelUser | null > | null,
  nextToken?: string | null,
};

export type ChannelUser = {
  __typename: "ChannelUser",
  id: string,
  userID: string,
  channelID: string,
  user?: User | null,
  channel?: Channel | null,
  createdAt: string,
  updatedAt: string,
};

export type Channel = {
  __typename: "Channel",
  id: string,
  spaceRoomID: string,
  name: string,
  channelUsers?: ModelChannelUserConnection | null,
  messages?: ModelChannelMessageConnection | null,
  lastMessageID: string,
  lastMessage?: ChannelMessage | null,
  spaceRoom?: SpaceRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChannelMessageConnection = {
  __typename: "ModelChannelMessageConnection",
  items?:  Array<ChannelMessage | null > | null,
  nextToken?: string | null,
};

export type ChannelMessage = {
  __typename: "ChannelMessage",
  id: string,
  createdAt: string,
  content: string,
  media?: string | null,
  read?: boolean | null,
  userID: string,
  channelID: string,
  user?: User | null,
  channel?: Channel | null,
  updatedAt: string,
};

export type SpaceRoom = {
  __typename: "SpaceRoom",
  id: string,
  name: string,
  imageUri?: string | null,
  channels?: ModelChannelConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChannelConnection = {
  __typename: "ModelChannelConnection",
  items?:  Array<Channel | null > | null,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  lastSeen?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
  clearChatTime?: string | null,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  clearChatTime?: ModelStringInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
  clearChatTime?: string | null,
};

export type DeleteChatRoomUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  group: string,
  name?: string | null,
  imageUri?: string | null,
  lastMessageID: string,
};

export type ModelChatRoomConditionInput = {
  group?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  group?: string | null,
  name?: string | null,
  imageUri?: string | null,
  lastMessageID?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content: string,
  media?: string | null,
  userID: string,
  chatRoomID: string,
  read: boolean,
  replyMessageID?: string | null,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  read?: ModelBooleanInput | null,
  replyMessageID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  media?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
  read?: boolean | null,
  replyMessageID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateSpaceRoomInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
};

export type ModelSpaceRoomConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSpaceRoomConditionInput | null > | null,
  or?: Array< ModelSpaceRoomConditionInput | null > | null,
  not?: ModelSpaceRoomConditionInput | null,
};

export type UpdateSpaceRoomInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
};

export type DeleteSpaceRoomInput = {
  id: string,
};

export type CreateChannelUserInput = {
  id?: string | null,
  userID: string,
  channelID: string,
};

export type ModelChannelUserConditionInput = {
  userID?: ModelIDInput | null,
  channelID?: ModelIDInput | null,
  and?: Array< ModelChannelUserConditionInput | null > | null,
  or?: Array< ModelChannelUserConditionInput | null > | null,
  not?: ModelChannelUserConditionInput | null,
};

export type UpdateChannelUserInput = {
  id: string,
  userID?: string | null,
  channelID?: string | null,
};

export type DeleteChannelUserInput = {
  id: string,
};

export type CreateChannelInput = {
  id?: string | null,
  spaceRoomID: string,
  name: string,
  lastMessageID: string,
};

export type ModelChannelConditionInput = {
  spaceRoomID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChannelConditionInput | null > | null,
  or?: Array< ModelChannelConditionInput | null > | null,
  not?: ModelChannelConditionInput | null,
};

export type UpdateChannelInput = {
  id: string,
  spaceRoomID?: string | null,
  name?: string | null,
  lastMessageID?: string | null,
};

export type DeleteChannelInput = {
  id: string,
};

export type CreateChannelMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content: string,
  media?: string | null,
  read?: boolean | null,
  userID: string,
  channelID: string,
};

export type ModelChannelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  channelID?: ModelIDInput | null,
  and?: Array< ModelChannelMessageConditionInput | null > | null,
  or?: Array< ModelChannelMessageConditionInput | null > | null,
  not?: ModelChannelMessageConditionInput | null,
};

export type UpdateChannelMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  media?: string | null,
  read?: boolean | null,
  userID?: string | null,
  channelID?: string | null,
};

export type DeleteChannelMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  lastSeen?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  clearChatTime?: ModelStringInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  read?: ModelBooleanInput | null,
  replyMessageID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelSpaceRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSpaceRoomFilterInput | null > | null,
  or?: Array< ModelSpaceRoomFilterInput | null > | null,
  not?: ModelSpaceRoomFilterInput | null,
};

export type ModelSpaceRoomConnection = {
  __typename: "ModelSpaceRoomConnection",
  items?:  Array<SpaceRoom | null > | null,
  nextToken?: string | null,
};

export type ModelChannelUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  channelID?: ModelIDInput | null,
  and?: Array< ModelChannelUserFilterInput | null > | null,
  or?: Array< ModelChannelUserFilterInput | null > | null,
  not?: ModelChannelUserFilterInput | null,
};

export type ModelChannelFilterInput = {
  id?: ModelIDInput | null,
  spaceRoomID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChannelFilterInput | null > | null,
  or?: Array< ModelChannelFilterInput | null > | null,
  not?: ModelChannelFilterInput | null,
};

export type ModelChannelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  channelID?: ModelIDInput | null,
  and?: Array< ModelChannelMessageFilterInput | null > | null,
  or?: Array< ModelChannelMessageFilterInput | null > | null,
  not?: ModelChannelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateSpaceRoomMutationVariables = {
  input: CreateSpaceRoomInput,
  condition?: ModelSpaceRoomConditionInput | null,
};

export type CreateSpaceRoomMutation = {
  createSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpaceRoomMutationVariables = {
  input: UpdateSpaceRoomInput,
  condition?: ModelSpaceRoomConditionInput | null,
};

export type UpdateSpaceRoomMutation = {
  updateSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpaceRoomMutationVariables = {
  input: DeleteSpaceRoomInput,
  condition?: ModelSpaceRoomConditionInput | null,
};

export type DeleteSpaceRoomMutation = {
  deleteSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChannelUserMutationVariables = {
  input: CreateChannelUserInput,
  condition?: ModelChannelUserConditionInput | null,
};

export type CreateChannelUserMutation = {
  createChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChannelUserMutationVariables = {
  input: UpdateChannelUserInput,
  condition?: ModelChannelUserConditionInput | null,
};

export type UpdateChannelUserMutation = {
  updateChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChannelUserMutationVariables = {
  input: DeleteChannelUserInput,
  condition?: ModelChannelUserConditionInput | null,
};

export type DeleteChannelUserMutation = {
  deleteChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChannelMutationVariables = {
  input: CreateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type CreateChannelMutation = {
  createChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChannelMutationVariables = {
  input: UpdateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type UpdateChannelMutation = {
  updateChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChannelMutationVariables = {
  input: DeleteChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type DeleteChannelMutation = {
  deleteChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChannelMessageMutationVariables = {
  input: CreateChannelMessageInput,
  condition?: ModelChannelMessageConditionInput | null,
};

export type CreateChannelMessageMutation = {
  createChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateChannelMessageMutationVariables = {
  input: UpdateChannelMessageInput,
  condition?: ModelChannelMessageConditionInput | null,
};

export type UpdateChannelMessageMutation = {
  updateChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteChannelMessageMutationVariables = {
  input: DeleteChannelMessageInput,
  condition?: ModelChannelMessageConditionInput | null,
};

export type DeleteChannelMessageMutation = {
  deleteChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      clearChatTime?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpaceRoomQueryVariables = {
  id: string,
};

export type GetSpaceRoomQuery = {
  getSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpaceRoomsQueryVariables = {
  filter?: ModelSpaceRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpaceRoomsQuery = {
  listSpaceRooms?:  {
    __typename: "ModelSpaceRoomConnection",
    items?:  Array< {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChannelUserQueryVariables = {
  id: string,
};

export type GetChannelUserQuery = {
  getChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChannelUsersQueryVariables = {
  filter?: ModelChannelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelUsersQuery = {
  listChannelUsers?:  {
    __typename: "ModelChannelUserConnection",
    items?:  Array< {
      __typename: "ChannelUser",
      id: string,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChannelQueryVariables = {
  id: string,
};

export type GetChannelQuery = {
  getChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelsQuery = {
  listChannels?:  {
    __typename: "ModelChannelConnection",
    items?:  Array< {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChannelMessageQueryVariables = {
  id: string,
};

export type GetChannelMessageQuery = {
  getChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListChannelMessagesQueryVariables = {
  filter?: ModelChannelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelMessagesQuery = {
  listChannelMessages?:  {
    __typename: "ModelChannelMessageConnection",
    items?:  Array< {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomsByGroupsQueryVariables = {
  group?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomsByGroupsQuery = {
  chatRoomsByGroups?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChannelQueryVariables = {
  channelID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChannelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChannelQuery = {
  messagesByChannel?:  {
    __typename: "ModelChannelMessageConnection",
    items?:  Array< {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    lastSeen?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    channelUser?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    clearChatTime?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    group: string,
    name?: string | null,
    imageUri?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        clearChatTime?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    read: boolean,
    replyMessageID?: string | null,
    replyMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      read: boolean,
      replyMessageID?: string | null,
      replyMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        group: string,
        name?: string | null,
        imageUri?: string | null,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      group: string,
      name?: string | null,
      imageUri?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        read: boolean,
        replyMessageID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSpaceRoomSubscription = {
  onCreateSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpaceRoomSubscription = {
  onUpdateSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpaceRoomSubscription = {
  onDeleteSpaceRoom?:  {
    __typename: "SpaceRoom",
    id: string,
    name: string,
    imageUri?: string | null,
    channels?:  {
      __typename: "ModelChannelConnection",
      items?:  Array< {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChannelUserSubscription = {
  onCreateChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChannelUserSubscription = {
  onUpdateChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChannelUserSubscription = {
  onDeleteChannelUser?:  {
    __typename: "ChannelUser",
    id: string,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChannelSubscription = {
  onCreateChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel?:  {
    __typename: "Channel",
    id: string,
    spaceRoomID: string,
    name: string,
    channelUsers?:  {
      __typename: "ModelChannelUserConnection",
      items?:  Array< {
        __typename: "ChannelUser",
        id: string,
        userID: string,
        channelID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChannelMessageConnection",
      items?:  Array< {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "ChannelMessage",
      id: string,
      createdAt: string,
      content: string,
      media?: string | null,
      read?: boolean | null,
      userID: string,
      channelID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        lastSeen?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      channel?:  {
        __typename: "Channel",
        id: string,
        spaceRoomID: string,
        name: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    spaceRoom?:  {
      __typename: "SpaceRoom",
      id: string,
      name: string,
      imageUri?: string | null,
      channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChannelMessageSubscription = {
  onCreateChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateChannelMessageSubscription = {
  onUpdateChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteChannelMessageSubscription = {
  onDeleteChannelMessage?:  {
    __typename: "ChannelMessage",
    id: string,
    createdAt: string,
    content: string,
    media?: string | null,
    read?: boolean | null,
    userID: string,
    channelID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      lastSeen?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      channelUser?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    channel?:  {
      __typename: "Channel",
      id: string,
      spaceRoomID: string,
      name: string,
      channelUsers?:  {
        __typename: "ModelChannelUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChannelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "ChannelMessage",
        id: string,
        createdAt: string,
        content: string,
        media?: string | null,
        read?: boolean | null,
        userID: string,
        channelID: string,
        updatedAt: string,
      } | null,
      spaceRoom?:  {
        __typename: "SpaceRoom",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};
