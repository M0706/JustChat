/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      nextToken
    }
  }
`;
export const getPersonalChatRoomUser = /* GraphQL */ `
  query GetPersonalChatRoomUser($id: ID!) {
    getPersonalChatRoomUser(id: $id) {
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
export const listPersonalChatRoomUsers = /* GraphQL */ `
  query ListPersonalChatRoomUsers(
    $filter: ModelPersonalChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalChatRoomUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        chatRoom {
          id
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
export const getPersonalChatRoom = /* GraphQL */ `
  query GetPersonalChatRoom($id: ID!) {
    getPersonalChatRoom(id: $id) {
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
export const listPersonalChatRooms = /* GraphQL */ `
  query ListPersonalChatRooms(
    $filter: ModelPersonalChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPersonalMessage = /* GraphQL */ `
  query GetPersonalMessage($id: ID!) {
    getPersonalMessage(id: $id) {
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
export const listPersonalMessages = /* GraphQL */ `
  query ListPersonalMessages(
    $filter: ModelPersonalMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalMessages(
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
      nextToken
    }
  }
`;
export const getWorkChatRoomUser = /* GraphQL */ `
  query GetWorkChatRoomUser($id: ID!) {
    getWorkChatRoomUser(id: $id) {
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
export const listWorkChatRoomUsers = /* GraphQL */ `
  query ListWorkChatRoomUsers(
    $filter: ModelWorkChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkChatRoomUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        workChatRoom {
          id
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
export const getWorkChatRoom = /* GraphQL */ `
  query GetWorkChatRoom($id: ID!) {
    getWorkChatRoom(id: $id) {
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
export const listWorkChatRooms = /* GraphQL */ `
  query ListWorkChatRooms(
    $filter: ModelWorkChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWorkMessage = /* GraphQL */ `
  query GetWorkMessage($id: ID!) {
    getWorkMessage(id: $id) {
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
export const listWorkMessages = /* GraphQL */ `
  query ListWorkMessages(
    $filter: ModelWorkMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByPersonalChatRoom = /* GraphQL */ `
  query MessagesByPersonalChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonalMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByPersonalChatRoom(
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
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkMessageFilterInput
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
      nextToken
    }
  }
`;
