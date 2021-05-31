import { gql } from "@apollo/client";

const getLoginInfo = gql`
  query GetSession @client {
    hasSession
    currentUser
  }
`;

export const resolvers = {
  Mutation: {
    login(parent, { input, username, id }, { cache }, info) {
      cache.writeQuery({
        query: getLoginInfo,
        data: { hasSession: input, currentUser: username, currentUserId: id}
      });
      return null;
    }
  }
};
