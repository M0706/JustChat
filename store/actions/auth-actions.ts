import { authActions } from '../slices/Auth-slice'

import Amplify, { Auth, API, graphqlOperation, Hub } from "aws-amplify";


export const AuthDetails = () => {
  return async (dispatch) => {
    const authDetails = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      return userInfo
    }
    try {
      
    } 
    
  }
}