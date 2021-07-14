import React,{useEffect, useState} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import UserFleetPreview from "../UserFleetPreview";

import { API, graphqlOperation,Auth } from "aws-amplify";
import {listUsers} from './queries'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  useNavigation} from "@react-navigation/native";
import {getUser} from '../../../../src/graphql/queries'
import ProfilePicture from '../ProfilePicture';

const UserFleetsList = () => {

  const [users,setUsers] = useState([])
  const navigation = useNavigation()
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
  }, [])

  useEffect(()=> {
    const fetchData = async()=>{
      try{
        const data = await API.graphql(graphqlOperation(listUsers));
        //console.log(data)
        setUsers(data.data.listUsers.items)
      }
      catch(e){
        console.warn("Network issues")
      }
    }
    fetchData();
  },[])

  const renderAddButton = () =>{
    return(
      <TouchableOpacity onPress = {()=>navigation.navigate('NewFleet')}>
        <ProfilePicture size={70} image={user?.image} />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserFleetPreview user={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={()=> renderAddButton()}
      />
    </View>
  )
}

export default UserFleetsList;
