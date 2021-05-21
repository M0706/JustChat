/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  phoneNumber?: string | null,
  Email?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
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
  id?: string,
  name?: string,
  phoneNumber?: string | null,
  Email?: string | null,
  imageUri?: string | null,
  status?: string | null,
  personalChatRoomUser?: ModelPersonalChatRoomUserConnection,
  workChatRoomUser?: ModelWorkChatRoomUserConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPersonalChatRoomUserConnection = {
  __typename: "ModelPersonalChatRoomUserConnection",
  items?:  Array<PersonalChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type PersonalChatRoomUser = {
  __typename: "PersonalChatRoomUser",
  id?: string,
  userID?: string,
  chatRoomID?: string,
  user?: User,
  chatRoom?: PersonalChatRoom,
  createdAt?: string,
  updatedAt?: string,
};

export type PersonalChatRoom = {
  __typename: "PersonalChatRoom",
  id?: string,
  chatRoomUsers?: ModelPersonalChatRoomUserConnection,
  messages?: ModelPersonalMessageConnection,
  lastMessageID?: string,
  lastMessage?: PersonalMessage,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPersonalMessageConnection = {
  __typename: "ModelPersonalMessageConnection",
  items?:  Array<PersonalMessage | null > | null,
  nextToken?: string | null,
};

export type PersonalMessage = {
  __typename: "PersonalMessage",
  id?: string,
  createdAt?: string,
  content?: string | null,
  media?: string | null,
  userID?: string,
  chatRoomID?: string,
  user?: User,
  personalChatRoom?: PersonalChatRoom,
  updatedAt?: string,
};

export type ModelWorkChatRoomUserConnection = {
  __typename: "ModelWorkChatRoomUserConnection",
  items?:  Array<WorkChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type WorkChatRoomUser = {
  __typename: "WorkChatRoomUser",
  id?: string,
  userID?: string,
  chatRoomID?: string,
  user?: User,
  workChatRoom?: WorkChatRoom,
  createdAt?: string,
  updatedAt?: string,
};

export type WorkChatRoom = {
  __typename: "WorkChatRoom",
  id?: string,
  chatRoomUsers?: ModelWorkChatRoomUserConnection,
  messages?: ModelWorkMessageConnection,
  lastMessageID?: string,
  lastMessage?: WorkMessage,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelWorkMessageConnection = {
  __typename: "ModelWorkMessageConnection",
  items?:  Array<WorkMessage | null > | null,
  nextToken?: string | null,
};

export type WorkMessage = {
  __typename: "WorkMessage",
  id?: string,
  createdAt?: string,
  content?: string | null,
  media?: string | null,
  userID?: string,
  chatRoomID?: string,
  user?: User,
  workChatRoom?: WorkChatRoom,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  phoneNumber?: string | null,
  Email?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreatePersonalChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelPersonalChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelPersonalChatRoomUserConditionInput | null > | null,
  or?: Array< ModelPersonalChatRoomUserConditionInput | null > | null,
  not?: ModelPersonalChatRoomUserConditionInput | null,
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

export type UpdatePersonalChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeletePersonalChatRoomUserInput = {
  id?: string | null,
};

export type CreatePersonalChatRoomInput = {
  id?: string | null,
  lastMessageID: string,
};

export type ModelPersonalChatRoomConditionInput = {
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelPersonalChatRoomConditionInput | null > | null,
  or?: Array< ModelPersonalChatRoomConditionInput | null > | null,
  not?: ModelPersonalChatRoomConditionInput | null,
};

export type UpdatePersonalChatRoomInput = {
  id: string,
  lastMessageID?: string | null,
};

export type DeletePersonalChatRoomInput = {
  id?: string | null,
};

export type CreatePersonalMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content?: string | null,
  media?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelPersonalMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelPersonalMessageConditionInput | null > | null,
  or?: Array< ModelPersonalMessageConditionInput | null > | null,
  not?: ModelPersonalMessageConditionInput | null,
};

export type UpdatePersonalMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  media?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeletePersonalMessageInput = {
  id?: string | null,
};

export type CreateWorkChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelWorkChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelWorkChatRoomUserConditionInput | null > | null,
  or?: Array< ModelWorkChatRoomUserConditionInput | null > | null,
  not?: ModelWorkChatRoomUserConditionInput | null,
};

export type UpdateWorkChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteWorkChatRoomUserInput = {
  id?: string | null,
};

export type CreateWorkChatRoomInput = {
  id?: string | null,
  lastMessageID: string,
};

export type ModelWorkChatRoomConditionInput = {
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelWorkChatRoomConditionInput | null > | null,
  or?: Array< ModelWorkChatRoomConditionInput | null > | null,
  not?: ModelWorkChatRoomConditionInput | null,
};

export type UpdateWorkChatRoomInput = {
  id: string,
  lastMessageID?: string | null,
};

export type DeleteWorkChatRoomInput = {
  id?: string | null,
};

export type CreateWorkMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content?: string | null,
  media?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelWorkMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelWorkMessageConditionInput | null > | null,
  or?: Array< ModelWorkMessageConditionInput | null > | null,
  not?: ModelWorkMessageConditionInput | null,
};

export type UpdateWorkMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  media?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteWorkMessageInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
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

export type ModelPersonalChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelPersonalChatRoomUserFilterInput | null > | null,
  or?: Array< ModelPersonalChatRoomUserFilterInput | null > | null,
  not?: ModelPersonalChatRoomUserFilterInput | null,
};

export type ModelPersonalChatRoomFilterInput = {
  id?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelPersonalChatRoomFilterInput | null > | null,
  or?: Array< ModelPersonalChatRoomFilterInput | null > | null,
  not?: ModelPersonalChatRoomFilterInput | null,
};

export type ModelPersonalChatRoomConnection = {
  __typename: "ModelPersonalChatRoomConnection",
  items?:  Array<PersonalChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelPersonalMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelPersonalMessageFilterInput | null > | null,
  or?: Array< ModelPersonalMessageFilterInput | null > | null,
  not?: ModelPersonalMessageFilterInput | null,
};

export type ModelWorkChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelWorkChatRoomUserFilterInput | null > | null,
  or?: Array< ModelWorkChatRoomUserFilterInput | null > | null,
  not?: ModelWorkChatRoomUserFilterInput | null,
};

export type ModelWorkChatRoomFilterInput = {
  id?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelWorkChatRoomFilterInput | null > | null,
  or?: Array< ModelWorkChatRoomFilterInput | null > | null,
  not?: ModelWorkChatRoomFilterInput | null,
};

export type ModelWorkChatRoomConnection = {
  __typename: "ModelWorkChatRoomConnection",
  items?:  Array<WorkChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelWorkMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelWorkMessageFilterInput | null > | null,
  or?: Array< ModelWorkMessageFilterInput | null > | null,
  not?: ModelWorkMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
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
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
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
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonalChatRoomUserMutationVariables = {
  input?: CreatePersonalChatRoomUserInput,
  condition?: ModelPersonalChatRoomUserConditionInput | null,
};

export type CreatePersonalChatRoomUserMutation = {
  createPersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonalChatRoomUserMutationVariables = {
  input?: UpdatePersonalChatRoomUserInput,
  condition?: ModelPersonalChatRoomUserConditionInput | null,
};

export type UpdatePersonalChatRoomUserMutation = {
  updatePersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonalChatRoomUserMutationVariables = {
  input?: DeletePersonalChatRoomUserInput,
  condition?: ModelPersonalChatRoomUserConditionInput | null,
};

export type DeletePersonalChatRoomUserMutation = {
  deletePersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonalChatRoomMutationVariables = {
  input?: CreatePersonalChatRoomInput,
  condition?: ModelPersonalChatRoomConditionInput | null,
};

export type CreatePersonalChatRoomMutation = {
  createPersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type UpdatePersonalChatRoomMutationVariables = {
  input?: UpdatePersonalChatRoomInput,
  condition?: ModelPersonalChatRoomConditionInput | null,
};

export type UpdatePersonalChatRoomMutation = {
  updatePersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type DeletePersonalChatRoomMutationVariables = {
  input?: DeletePersonalChatRoomInput,
  condition?: ModelPersonalChatRoomConditionInput | null,
};

export type DeletePersonalChatRoomMutation = {
  deletePersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type CreatePersonalMessageMutationVariables = {
  input?: CreatePersonalMessageInput,
  condition?: ModelPersonalMessageConditionInput | null,
};

export type CreatePersonalMessageMutation = {
  createPersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePersonalMessageMutationVariables = {
  input?: UpdatePersonalMessageInput,
  condition?: ModelPersonalMessageConditionInput | null,
};

export type UpdatePersonalMessageMutation = {
  updatePersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePersonalMessageMutationVariables = {
  input?: DeletePersonalMessageInput,
  condition?: ModelPersonalMessageConditionInput | null,
};

export type DeletePersonalMessageMutation = {
  deletePersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateWorkChatRoomUserMutationVariables = {
  input?: CreateWorkChatRoomUserInput,
  condition?: ModelWorkChatRoomUserConditionInput | null,
};

export type CreateWorkChatRoomUserMutation = {
  createWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkChatRoomUserMutationVariables = {
  input?: UpdateWorkChatRoomUserInput,
  condition?: ModelWorkChatRoomUserConditionInput | null,
};

export type UpdateWorkChatRoomUserMutation = {
  updateWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkChatRoomUserMutationVariables = {
  input?: DeleteWorkChatRoomUserInput,
  condition?: ModelWorkChatRoomUserConditionInput | null,
};

export type DeleteWorkChatRoomUserMutation = {
  deleteWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkChatRoomMutationVariables = {
  input?: CreateWorkChatRoomInput,
  condition?: ModelWorkChatRoomConditionInput | null,
};

export type CreateWorkChatRoomMutation = {
  createWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type UpdateWorkChatRoomMutationVariables = {
  input?: UpdateWorkChatRoomInput,
  condition?: ModelWorkChatRoomConditionInput | null,
};

export type UpdateWorkChatRoomMutation = {
  updateWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type DeleteWorkChatRoomMutationVariables = {
  input?: DeleteWorkChatRoomInput,
  condition?: ModelWorkChatRoomConditionInput | null,
};

export type DeleteWorkChatRoomMutation = {
  deleteWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type CreateWorkMessageMutationVariables = {
  input?: CreateWorkMessageInput,
  condition?: ModelWorkMessageConditionInput | null,
};

export type CreateWorkMessageMutation = {
  createWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateWorkMessageMutationVariables = {
  input?: UpdateWorkMessageInput,
  condition?: ModelWorkMessageConditionInput | null,
};

export type UpdateWorkMessageMutation = {
  updateWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteWorkMessageMutationVariables = {
  input?: DeleteWorkMessageInput,
  condition?: ModelWorkMessageConditionInput | null,
};

export type DeleteWorkMessageMutation = {
  deleteWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
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
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPersonalChatRoomUserQueryVariables = {
  id?: string,
};

export type GetPersonalChatRoomUserQuery = {
  getPersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonalChatRoomUsersQueryVariables = {
  filter?: ModelPersonalChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonalChatRoomUsersQuery = {
  listPersonalChatRoomUsers?:  {
    __typename: "ModelPersonalChatRoomUserConnection",
    items?:  Array< {
      __typename: "PersonalChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type GetPersonalChatRoomQueryVariables = {
  id?: string,
};

export type GetPersonalChatRoomQuery = {
  getPersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type ListPersonalChatRoomsQueryVariables = {
  filter?: ModelPersonalChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonalChatRoomsQuery = {
  listPersonalChatRooms?:  {
    __typename: "ModelPersonalChatRoomConnection",
    items?:  Array< {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPersonalMessageQueryVariables = {
  id?: string,
};

export type GetPersonalMessageQuery = {
  getPersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPersonalMessagesQueryVariables = {
  filter?: ModelPersonalMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonalMessagesQuery = {
  listPersonalMessages?:  {
    __typename: "ModelPersonalMessageConnection",
    items?:  Array< {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWorkChatRoomUserQueryVariables = {
  id?: string,
};

export type GetWorkChatRoomUserQuery = {
  getWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkChatRoomUsersQueryVariables = {
  filter?: ModelWorkChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkChatRoomUsersQuery = {
  listWorkChatRoomUsers?:  {
    __typename: "ModelWorkChatRoomUserConnection",
    items?:  Array< {
      __typename: "WorkChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type GetWorkChatRoomQueryVariables = {
  id?: string,
};

export type GetWorkChatRoomQuery = {
  getWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type ListWorkChatRoomsQueryVariables = {
  filter?: ModelWorkChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkChatRoomsQuery = {
  listWorkChatRooms?:  {
    __typename: "ModelWorkChatRoomConnection",
    items?:  Array< {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWorkMessageQueryVariables = {
  id?: string,
};

export type GetWorkMessageQuery = {
  getWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListWorkMessagesQueryVariables = {
  filter?: ModelWorkMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkMessagesQuery = {
  listWorkMessages?:  {
    __typename: "ModelWorkMessageConnection",
    items?:  Array< {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByPersonalChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonalMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByPersonalChatRoomQuery = {
  messagesByPersonalChatRoom?:  {
    __typename: "ModelPersonalMessageConnection",
    items?:  Array< {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWorkMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelWorkMessageConnection",
    items?:  Array< {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
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
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
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
    phoneNumber?: string | null,
    Email?: string | null,
    imageUri?: string | null,
    status?: string | null,
    personalChatRoomUser?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workChatRoomUser?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonalChatRoomUserSubscription = {
  onCreatePersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonalChatRoomUserSubscription = {
  onUpdatePersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonalChatRoomUserSubscription = {
  onDeletePersonalChatRoomUser?:  {
    __typename: "PersonalChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonalChatRoomSubscription = {
  onCreatePersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type OnUpdatePersonalChatRoomSubscription = {
  onUpdatePersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type OnDeletePersonalChatRoomSubscription = {
  onDeletePersonalChatRoom?:  {
    __typename: "PersonalChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelPersonalChatRoomUserConnection",
      items?:  Array< {
        __typename: "PersonalChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelPersonalMessageConnection",
      items?:  Array< {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "PersonalMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personalChatRoom?:  {
        __typename: "PersonalChatRoom",
        id: string,
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

export type OnCreatePersonalMessageSubscription = {
  onCreatePersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonalMessageSubscription = {
  onUpdatePersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonalMessageSubscription = {
  onDeletePersonalMessage?:  {
    __typename: "PersonalMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personalChatRoom?:  {
      __typename: "PersonalChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelPersonalMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "PersonalMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkChatRoomUserSubscription = {
  onCreateWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkChatRoomUserSubscription = {
  onUpdateWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkChatRoomUserSubscription = {
  onDeleteWorkChatRoomUser?:  {
    __typename: "WorkChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkChatRoomSubscription = {
  onCreateWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type OnUpdateWorkChatRoomSubscription = {
  onUpdateWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type OnDeleteWorkChatRoomSubscription = {
  onDeleteWorkChatRoom?:  {
    __typename: "WorkChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelWorkChatRoomUserConnection",
      items?:  Array< {
        __typename: "WorkChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelWorkMessageConnection",
      items?:  Array< {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "WorkMessage",
      id: string,
      createdAt: string,
      content?: string | null,
      media?: string | null,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phoneNumber?: string | null,
        Email?: string | null,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workChatRoom?:  {
        __typename: "WorkChatRoom",
        id: string,
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

export type OnCreateWorkMessageSubscription = {
  onCreateWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkMessageSubscription = {
  onUpdateWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkMessageSubscription = {
  onDeleteWorkMessage?:  {
    __typename: "WorkMessage",
    id: string,
    createdAt: string,
    content?: string | null,
    media?: string | null,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      phoneNumber?: string | null,
      Email?: string | null,
      imageUri?: string | null,
      status?: string | null,
      personalChatRoomUser?:  {
        __typename: "ModelPersonalChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      workChatRoomUser?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    workChatRoom?:  {
      __typename: "WorkChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelWorkChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelWorkMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "WorkMessage",
        id: string,
        createdAt: string,
        content?: string | null,
        media?: string | null,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};
