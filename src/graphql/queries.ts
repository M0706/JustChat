/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSpaceRoom = /* GraphQL */ `
  query GetSpaceRoom($id: ID!) {
    getSpaceRoom(id: $id) {
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
export const listSpaceRooms = /* GraphQL */ `
  query ListSpaceRooms(
    $filter: ModelSpaceRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaceRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        channels {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannelUser = /* GraphQL */ `
  query GetChannelUser($id: ID!) {
    getChannelUser(id: $id) {
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
export const listChannelUsers = /* GraphQL */ `
  query ListChannelUsers(
    $filter: ModelChannelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannelUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
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
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChannelMessage = /* GraphQL */ `
  query GetChannelMessage($id: ID!) {
    getChannelMessage(id: $id) {
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
export const listChannelMessages = /* GraphQL */ `
  query ListChannelMessages(
    $filter: ModelChannelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannelMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const chatRoomsByGroups = /* GraphQL */ `
  query ChatRoomsByGroups(
    $group: String
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomsByGroups(
      group: $group
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByChannel = /* GraphQL */ `
  query MessagesByChannel(
    $channelID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChannelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChannel(
      channelID: $channelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
