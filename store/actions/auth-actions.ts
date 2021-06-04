import { authActions } from '../slices/Auth-slice'

import Amplify, { Auth, API, graphqlOperation, Hub } from "aws-amplify";
import { getUser } from '../../graphqlCustom/queries';
import { createUser } from '../../src/graphql/mutations';


export const AuthDetails = () => {
  return async (dispatch) => {
    
    const authDetails = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      return userInfo
    }

    const userDetails = async (userInfo) => {
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        if (userData.data.getUser) {
          console.log("User registered");
          return userData;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
          status: "Hey, Im a tree",
        };

        const newUserData = await API.graphql(graphqlOperation(createUser, { input: newUser }));
        return newUserData;

      }
    }

    try {
      const userInfo = await authDetails();
      const userData = await userDetails(userInfo);
    

      dispatch(authActions.updateAuthInfo({
        userData: userData,
        userID: userInfo.attributes.sub,
        isAuth: true,
        changed:false
      }))

    } catch (error) {
      console.log(error);
    } 
    
  }
}

export const getCurrentDetails = ()=>{

}

