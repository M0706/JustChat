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
