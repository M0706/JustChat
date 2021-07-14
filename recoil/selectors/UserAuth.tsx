import { API, Auth, graphqlOperation } from "aws-amplify";
import { selector, atom, selectorFamily} from "recoil";
import { getUser } from "../../graphqlCustom/queries";
import { updateUser } from "../../src/graphql/mutations";
    
const authDetails = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      return userInfo
    }
  
const userDetails = async (userInfo: { attribute: string; attributes: string; username: any; }) => {
  if (userInfo) {
    await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: userInfo.attributes.sub,
          lastSeen: new Date().toISOString()
        }
      })
    )
        
    const userData = await API.graphql(
      graphqlOperation(getUser, { id: userInfo.attributes.sub })
    );

    if (userData.data.getUser) {
      console.log("User registered");
      return userData;
    }
    console.warn("You are not registered");
    // const newUser = {
    //   id: userInfo.attributes.sub,
    //   name: userInfo.username,
    //   imageUri:"",
    //   status: "Hey, Im a tree",
    // };

    // const newUserData = await API.graphql(graphqlOperation(createUser, { input: newUser }));
    // return newUserData;

  }
}

export const ChangeInfo = atom({
  key:"ChangeInfo",
  default:false
})


export const User = selector({
  key: "User",
  get: async ({get}) => {
    
    const userInfo = await authDetails();
    const userData = await userDetails(userInfo);
    const change = get(ChangeInfo);
    console.log("User selector run")

    return {
      userData: userData,
      userID: userInfo.attributes.sub,
      isAuth: true,
      changed: false,
    }
  }
})



// const currentUserIDState = atom({
//   key: "CurrentUserID",
//   default: null
// });

// const userInfoQuery = selectorFamily({
//   key: 'UserInfoQuery',
//   get: userID => async () => {
//     const response = await Auth.currentAuthenticatedUser({
//       bypassCache: false,
//     });;
//     if (response.error) {
//       throw response.error;
//     }
//     return response;
//   },
// });

// const currentUserInfoQuery = selector({
//   key: 'CurrentUserInfoQuery',
//   get: ({get}) => get(userDetails(get(currentUserIDState))),
// });
