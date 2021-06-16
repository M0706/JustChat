import { authActions } from '../slices/Auth-slice'

import Amplify, { Auth, API, graphqlOperation, Hub } from "aws-amplify";
import { getUser } from '../../graphqlCustom/queries';
import { createUser, updateUser } from '../../src/graphql/mutations';
import moment from 'moment';


export const AuthDetails = () => {
  return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {

    console.log("In Auth Details--->","Hi");
    
    const authDetails = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      return userInfo
    }
  
    const userDetails = async (userInfo: { attribute: string; attributes: string; username: any; }) => {
      if (userInfo) {
        await API.graphql(
          graphqlOperation(updateUser,{
            input:{
              id:userInfo.attributes.sub,
              lastSeen: new Date().toISOString()
            }
          })
        )
        
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        if (userData.data.getUser) {
          console.log("User registered");
          console.log(moment(userData.data.getUser.lastSeen).format('YYYY-MM-DD h:mm:ss a'));
          return userData;
        }
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri:"",
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

