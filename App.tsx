import React, { useEffect, useState } from "react";

import Amplify, { Auth, API, graphqlOperation, Hub } from "aws-amplify";

import config from "./aws-exports";
import {authClient} from "./graphqlCustom/client";
import {ApolloProvider, gql, useQuery} from "@apollo/client";
import {resolvers} from "./graphqlCustom/clientResolvers/sessionResolvers"
import Index from './index'



Amplify.configure(config);

// console.log(authClient);
// authClient.query({
//   query: gql`
//     query ListUsers(
//     $filter: ModelUserFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         name
//         imageUri
//         status
//         chatRoomUser {
//           nextToken
//         }
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
//   `
// })
// .then(result => console.log("Result--->",result));

// authClient.query({
//   query: gql(listUsers)
// })
// .then(result => console.log("Result--->",result));

authClient.cache.writeQuery({query: gql `query temp{temp} `,data: { hasSession: false, currentUser: "" }});
authClient.addResolvers(resolvers);


export default function App(){
  return(
    <ApolloProvider client= {authClient}>
    <Index />
    </ApolloProvider> 
  )
}