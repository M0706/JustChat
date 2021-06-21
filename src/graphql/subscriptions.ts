/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
