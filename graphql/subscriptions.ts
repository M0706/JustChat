/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      createdAt
      content
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
          content
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      createdAt
      content
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
          content
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      createdAt
      content
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
          content
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
export const onCreateFleet = /* GraphQL */ `
  subscription OnCreateFleet {
    onCreateFleet {
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
export const onUpdateFleet = /* GraphQL */ `
  subscription OnUpdateFleet {
    onUpdateFleet {
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
export const onDeleteFleet = /* GraphQL */ `
  subscription OnDeleteFleet {
    onDeleteFleet {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
        content
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
        content
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
        content
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
