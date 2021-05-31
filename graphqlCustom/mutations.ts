import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: boolean!, $username: string!, $id: string) {
    login(input: $input, username: $username, id: $id) @client {
      hasSession
    }
  }
`;

