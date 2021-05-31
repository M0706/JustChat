import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { Auth } from "aws-amplify";
import AWSAppSyncClient, { AUTH_TYPE, createAppSyncLink } from "aws-appsync";
import config from "../aws-exports";

const httpLink = createHttpLink({
    uri: config.aws_appsync_graphqlEndpoint,
  });

export const publicClient = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: config.aws_appsync_apiKey
  },
  disableOffline: true
});

const awsLink = createAppSyncLink({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
      type: config.aws_appsync_authenticationType,
      credentials: () => Auth.currentCredentials(),
      jwtToken: async () =>
        (await Auth.currentSession()).getAccessToken().getJwtToken()
    },
    complexObjectsCredentials: () => Auth.currentCredentials()
   })

export const authClient = new ApolloClient({
  link: awsLink.concat(httpLink),
  cache: new InMemoryCache(),
  clientState:{
    defaults:{
      userData:{}
    }
  }
});
