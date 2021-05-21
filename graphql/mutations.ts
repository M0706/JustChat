/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      imageUri
      status
      personalChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      workChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      imageUri
      status
      personalChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      workChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      imageUri
      status
      personalChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      workChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPersonalChatRoomUser = /* GraphQL */ `
  mutation CreatePersonalChatRoomUser(
    $input: CreatePersonalChatRoomUserInput!
    $condition: ModelPersonalChatRoomUserConditionInput
  ) {
    createPersonalChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonalChatRoomUser = /* GraphQL */ `
  mutation UpdatePersonalChatRoomUser(
    $input: UpdatePersonalChatRoomUserInput!
    $condition: ModelPersonalChatRoomUserConditionInput
  ) {
    updatePersonalChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonalChatRoomUser = /* GraphQL */ `
  mutation DeletePersonalChatRoomUser(
    $input: DeletePersonalChatRoomUserInput!
    $condition: ModelPersonalChatRoomUserConditionInput
  ) {
    deletePersonalChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPersonalChatRoom = /* GraphQL */ `
  mutation CreatePersonalChatRoom(
    $input: CreatePersonalChatRoomInput!
    $condition: ModelPersonalChatRoomConditionInput
  ) {
    createPersonalChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        user {
          id
          name
          phoneNumber
          email
          imageUri
          status
          createdAt
          updatedAt
        }
        personalChatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonalChatRoom = /* GraphQL */ `
  mutation UpdatePersonalChatRoom(
    $input: UpdatePersonalChatRoomInput!
    $condition: ModelPersonalChatRoomConditionInput
  ) {
    updatePersonalChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        user {
          id
          name
          phoneNumber
          email
          imageUri
          status
          createdAt
          updatedAt
        }
        personalChatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonalChatRoom = /* GraphQL */ `
  mutation DeletePersonalChatRoom(
    $input: DeletePersonalChatRoomInput!
    $condition: ModelPersonalChatRoomConditionInput
  ) {
    deletePersonalChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        user {
          id
          name
          phoneNumber
          email
          imageUri
          status
          createdAt
          updatedAt
        }
        personalChatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPersonalMessage = /* GraphQL */ `
  mutation CreatePersonalMessage(
    $input: CreatePersonalMessageInput!
    $condition: ModelPersonalMessageConditionInput
  ) {
    createPersonalMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      personalChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updatePersonalMessage = /* GraphQL */ `
  mutation UpdatePersonalMessage(
    $input: UpdatePersonalMessageInput!
    $condition: ModelPersonalMessageConditionInput
  ) {
    updatePersonalMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      personalChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deletePersonalMessage = /* GraphQL */ `
  mutation DeletePersonalMessage(
    $input: DeletePersonalMessageInput!
    $condition: ModelPersonalMessageConditionInput
  ) {
    deletePersonalMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      personalChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createWorkChatRoomUser = /* GraphQL */ `
  mutation CreateWorkChatRoomUser(
    $input: CreateWorkChatRoomUserInput!
    $condition: ModelWorkChatRoomUserConditionInput
  ) {
    createWorkChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      workChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkChatRoomUser = /* GraphQL */ `
  mutation UpdateWorkChatRoomUser(
    $input: UpdateWorkChatRoomUserInput!
    $condition: ModelWorkChatRoomUserConditionInput
  ) {
    updateWorkChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      workChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkChatRoomUser = /* GraphQL */ `
  mutation DeleteWorkChatRoomUser(
    $input: DeleteWorkChatRoomUserInput!
    $condition: ModelWorkChatRoomUserConditionInput
  ) {
    deleteWorkChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      workChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkChatRoom = /* GraphQL */ `
  mutation CreateWorkChatRoom(
    $input: CreateWorkChatRoomInput!
    $condition: ModelWorkChatRoomConditionInput
  ) {
    createWorkChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        user {
          id
          name
          phoneNumber
          email
          imageUri
          status
          createdAt
          updatedAt
        }
        workChatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkChatRoom = /* GraphQL */ `
  mutation UpdateWorkChatRoom(
    $input: UpdateWorkChatRoomInput!
    $condition: ModelWorkChatRoomConditionInput
  ) {
    updateWorkChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        user {
          id
          name
          phoneNumber
          email
          imageUri
          status
          createdAt
          updatedAt
        }
        workChatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkChatRoom = /* GraphQL */ `
  mutation DeleteWorkChatRoom(
    $input: DeleteWorkChatRoomInput!
    $condition: ModelWorkChatRoomConditionInput
  ) {
    deleteWorkChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        user {
          id
          name
          phoneNumber
          email
          imageUri
          status
          createdAt
          updatedAt
        }
        workChatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkMessage = /* GraphQL */ `
  mutation CreateWorkMessage(
    $input: CreateWorkMessageInput!
    $condition: ModelWorkMessageConditionInput
  ) {
    createWorkMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      workChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateWorkMessage = /* GraphQL */ `
  mutation UpdateWorkMessage(
    $input: UpdateWorkMessageInput!
    $condition: ModelWorkMessageConditionInput
  ) {
    updateWorkMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      workChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteWorkMessage = /* GraphQL */ `
  mutation DeleteWorkMessage(
    $input: DeleteWorkMessageInput!
    $condition: ModelWorkMessageConditionInput
  ) {
    deleteWorkMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      user {
        id
        name
        phoneNumber
        email
        imageUri
        status
        personalChatRoomUser {
          nextToken
        }
        workChatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      workChatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
