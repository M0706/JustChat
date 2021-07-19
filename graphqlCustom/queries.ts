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
          createdAt
          updatedAt
          chatRoom {
            id
            group
            name
            updatedAt
            chatRoomUsers {
              items {
                user {
                  id
                  name
                  imageUri
                  lastSeen
                  status
                }
              }
            }
            lastMessage {
              id
              content
              read
              media
              updatedAt
              user {
                id
                name
              }
            }
          }
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
          channel {
            spaceRoom {
              name
              id
              imageUri
              createdAt
              updatedAt
              channels {
                items {
                  id
                  name
                  createdAt
                  updatedAt
                }
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
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
          user {
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
