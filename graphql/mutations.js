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
      imageUri
      status
      publicKey
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          image
          userID
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
      imageUri
      status
      publicKey
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          image
          userID
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
      imageUri
      status
      publicKey
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          type
          text
          image
          userID
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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      publicKey
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
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
          ciphers
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      publicKey
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
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
          ciphers
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      publicKey
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
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
          ciphers
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          ciphers
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
        ciphers
        media
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          publicKey
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          ciphers
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
        ciphers
        media
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          publicKey
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          ciphers
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
        ciphers
        media
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          publicKey
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      createdAt
      ciphers
      media
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
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
          ciphers
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          messageID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      createdAt
      ciphers
      media
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
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
          ciphers
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          messageID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      createdAt
      ciphers
      media
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
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
          ciphers
          media
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          messageID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createFleet = /* GraphQL */ `
  mutation CreateFleet(
    $input: CreateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    createFleet(input: $input, condition: $condition) {
      id
      type
      text
      image
      userID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFleet = /* GraphQL */ `
  mutation UpdateFleet(
    $input: UpdateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    updateFleet(input: $input, condition: $condition) {
      id
      type
      text
      image
      userID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFleet = /* GraphQL */ `
  mutation DeleteFleet(
    $input: DeleteFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    deleteFleet(input: $input, condition: $condition) {
      id
      type
      text
      image
      userID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      messageID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      message {
        id
        createdAt
        ciphers
        media
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          publicKey
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      messageID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      message {
        id
        createdAt
        ciphers
        media
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          publicKey
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      messageID
      user {
        id
        name
        imageUri
        status
        publicKey
        chatRoomUser {
          nextToken
        }
        fleets {
          nextToken
        }
        createdAt
        updatedAt
      }
      message {
        id
        createdAt
        ciphers
        media
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          publicKey
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
