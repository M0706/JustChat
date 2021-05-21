/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePersonalChatRoomUser = /* GraphQL */ `
  subscription OnCreatePersonalChatRoomUser {
    onCreatePersonalChatRoomUser {
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
export const onUpdatePersonalChatRoomUser = /* GraphQL */ `
  subscription OnUpdatePersonalChatRoomUser {
    onUpdatePersonalChatRoomUser {
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
export const onDeletePersonalChatRoomUser = /* GraphQL */ `
  subscription OnDeletePersonalChatRoomUser {
    onDeletePersonalChatRoomUser {
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
export const onCreatePersonalChatRoom = /* GraphQL */ `
  subscription OnCreatePersonalChatRoom {
    onCreatePersonalChatRoom {
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
export const onUpdatePersonalChatRoom = /* GraphQL */ `
  subscription OnUpdatePersonalChatRoom {
    onUpdatePersonalChatRoom {
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
export const onDeletePersonalChatRoom = /* GraphQL */ `
  subscription OnDeletePersonalChatRoom {
    onDeletePersonalChatRoom {
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
export const onCreatePersonalMessage = /* GraphQL */ `
  subscription OnCreatePersonalMessage {
    onCreatePersonalMessage {
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
export const onUpdatePersonalMessage = /* GraphQL */ `
  subscription OnUpdatePersonalMessage {
    onUpdatePersonalMessage {
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
export const onDeletePersonalMessage = /* GraphQL */ `
  subscription OnDeletePersonalMessage {
    onDeletePersonalMessage {
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
export const onCreateWorkChatRoomUser = /* GraphQL */ `
  subscription OnCreateWorkChatRoomUser {
    onCreateWorkChatRoomUser {
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
export const onUpdateWorkChatRoomUser = /* GraphQL */ `
  subscription OnUpdateWorkChatRoomUser {
    onUpdateWorkChatRoomUser {
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
export const onDeleteWorkChatRoomUser = /* GraphQL */ `
  subscription OnDeleteWorkChatRoomUser {
    onDeleteWorkChatRoomUser {
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
export const onCreateWorkChatRoom = /* GraphQL */ `
  subscription OnCreateWorkChatRoom {
    onCreateWorkChatRoom {
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
export const onUpdateWorkChatRoom = /* GraphQL */ `
  subscription OnUpdateWorkChatRoom {
    onUpdateWorkChatRoom {
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
export const onDeleteWorkChatRoom = /* GraphQL */ `
  subscription OnDeleteWorkChatRoom {
    onDeleteWorkChatRoom {
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
export const onCreateWorkMessage = /* GraphQL */ `
  subscription OnCreateWorkMessage {
    onCreateWorkMessage {
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
export const onUpdateWorkMessage = /* GraphQL */ `
  subscription OnUpdateWorkMessage {
    onUpdateWorkMessage {
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
export const onDeleteWorkMessage = /* GraphQL */ `
  subscription OnDeleteWorkMessage {
    onDeleteWorkMessage {
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
