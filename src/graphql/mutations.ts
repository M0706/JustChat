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
      imageUri
      lastSeen
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          clearChatTime
          createdAt
          updatedAt
        }
        nextToken
      }
      channelUser {
        items {
          id
          userID
          channelID
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
      lastSeen
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          clearChatTime
          createdAt
          updatedAt
        }
        nextToken
      }
      channelUser {
        items {
          id
          userID
          channelID
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
      lastSeen
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          clearChatTime
          createdAt
          updatedAt
        }
        nextToken
      }
      channelUser {
        items {
          id
          userID
          channelID
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
      clearChatTime
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        group
        name
        imageUri
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
          read
          replyMessageID
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
      clearChatTime
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        group
        name
        imageUri
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
          read
          replyMessageID
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
      clearChatTime
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        group
        name
        imageUri
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
          read
          replyMessageID
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
      group
      name
      imageUri
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          clearChatTime
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
          read
          replyMessageID
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
        read
        replyMessageID
        replyMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          read
          replyMessageID
          updatedAt
        }
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          group
          name
          imageUri
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      group
      name
      imageUri
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          clearChatTime
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
          read
          replyMessageID
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
        read
        replyMessageID
        replyMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          read
          replyMessageID
          updatedAt
        }
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          group
          name
          imageUri
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      group
      name
      imageUri
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          clearChatTime
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
          read
          replyMessageID
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
        read
        replyMessageID
        replyMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          read
          replyMessageID
          updatedAt
        }
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          group
          name
          imageUri
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      userID
      chatRoomID
      read
      replyMessageID
      replyMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        read
        replyMessageID
        replyMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          read
          replyMessageID
          updatedAt
        }
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          group
          name
          imageUri
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        group
        name
        imageUri
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
          read
          replyMessageID
          updatedAt
        }
        createdAt
        updatedAt
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
      content
      media
      userID
      chatRoomID
      read
      replyMessageID
      replyMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        read
        replyMessageID
        replyMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          read
          replyMessageID
          updatedAt
        }
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          group
          name
          imageUri
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        group
        name
        imageUri
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
          read
          replyMessageID
          updatedAt
        }
        createdAt
        updatedAt
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
      content
      media
      userID
      chatRoomID
      read
      replyMessageID
      replyMessage {
        id
        createdAt
        content
        media
        userID
        chatRoomID
        read
        replyMessageID
        replyMessage {
          id
          createdAt
          content
          media
          userID
          chatRoomID
          read
          replyMessageID
          updatedAt
        }
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          group
          name
          imageUri
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        group
        name
        imageUri
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
          read
          replyMessageID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createSpaceRoom = /* GraphQL */ `
  mutation CreateSpaceRoom(
    $input: CreateSpaceRoomInput!
    $condition: ModelSpaceRoomConditionInput
  ) {
    createSpaceRoom(input: $input, condition: $condition) {
      id
      name
      imageUri
      channels {
        items {
          id
          spaceRoomID
          name
          lastMessageID
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
export const updateSpaceRoom = /* GraphQL */ `
  mutation UpdateSpaceRoom(
    $input: UpdateSpaceRoomInput!
    $condition: ModelSpaceRoomConditionInput
  ) {
    updateSpaceRoom(input: $input, condition: $condition) {
      id
      name
      imageUri
      channels {
        items {
          id
          spaceRoomID
          name
          lastMessageID
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
export const deleteSpaceRoom = /* GraphQL */ `
  mutation DeleteSpaceRoom(
    $input: DeleteSpaceRoomInput!
    $condition: ModelSpaceRoomConditionInput
  ) {
    deleteSpaceRoom(input: $input, condition: $condition) {
      id
      name
      imageUri
      channels {
        items {
          id
          spaceRoomID
          name
          lastMessageID
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
export const createChannelUser = /* GraphQL */ `
  mutation CreateChannelUser(
    $input: CreateChannelUserInput!
    $condition: ModelChannelUserConditionInput
  ) {
    createChannelUser(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      channel {
        id
        spaceRoomID
        name
        channelUsers {
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
          read
          userID
          channelID
          updatedAt
        }
        spaceRoom {
          id
          name
          imageUri
          createdAt
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
export const updateChannelUser = /* GraphQL */ `
  mutation UpdateChannelUser(
    $input: UpdateChannelUserInput!
    $condition: ModelChannelUserConditionInput
  ) {
    updateChannelUser(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      channel {
        id
        spaceRoomID
        name
        channelUsers {
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
          read
          userID
          channelID
          updatedAt
        }
        spaceRoom {
          id
          name
          imageUri
          createdAt
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
export const deleteChannelUser = /* GraphQL */ `
  mutation DeleteChannelUser(
    $input: DeleteChannelUserInput!
    $condition: ModelChannelUserConditionInput
  ) {
    deleteChannelUser(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      channel {
        id
        spaceRoomID
        name
        channelUsers {
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
          read
          userID
          channelID
          updatedAt
        }
        spaceRoom {
          id
          name
          imageUri
          createdAt
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
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
      id
      spaceRoomID
      name
      channelUsers {
        items {
          id
          userID
          channelID
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
          read
          userID
          channelID
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
        read
        userID
        channelID
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        channel {
          id
          spaceRoomID
          name
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      spaceRoom {
        id
        name
        imageUri
        channels {
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
      id
      spaceRoomID
      name
      channelUsers {
        items {
          id
          userID
          channelID
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
          read
          userID
          channelID
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
        read
        userID
        channelID
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        channel {
          id
          spaceRoomID
          name
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      spaceRoom {
        id
        name
        imageUri
        channels {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
      id
      spaceRoomID
      name
      channelUsers {
        items {
          id
          userID
          channelID
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
          read
          userID
          channelID
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
        read
        userID
        channelID
        user {
          id
          name
          imageUri
          lastSeen
          status
          createdAt
          updatedAt
        }
        channel {
          id
          spaceRoomID
          name
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      spaceRoom {
        id
        name
        imageUri
        channels {
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
export const createChannelMessage = /* GraphQL */ `
  mutation CreateChannelMessage(
    $input: CreateChannelMessageInput!
    $condition: ModelChannelMessageConditionInput
  ) {
    createChannelMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      read
      userID
      channelID
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      channel {
        id
        spaceRoomID
        name
        channelUsers {
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
          read
          userID
          channelID
          updatedAt
        }
        spaceRoom {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateChannelMessage = /* GraphQL */ `
  mutation UpdateChannelMessage(
    $input: UpdateChannelMessageInput!
    $condition: ModelChannelMessageConditionInput
  ) {
    updateChannelMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      read
      userID
      channelID
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      channel {
        id
        spaceRoomID
        name
        channelUsers {
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
          read
          userID
          channelID
          updatedAt
        }
        spaceRoom {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteChannelMessage = /* GraphQL */ `
  mutation DeleteChannelMessage(
    $input: DeleteChannelMessageInput!
    $condition: ModelChannelMessageConditionInput
  ) {
    deleteChannelMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      media
      read
      userID
      channelID
      user {
        id
        name
        imageUri
        lastSeen
        status
        chatRoomUser {
          nextToken
        }
        channelUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      channel {
        id
        spaceRoomID
        name
        channelUsers {
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
          read
          userID
          channelID
          updatedAt
        }
        spaceRoom {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
