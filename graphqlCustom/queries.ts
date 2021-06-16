
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
      createdAt
      updatedAt
    }
  }
`;

