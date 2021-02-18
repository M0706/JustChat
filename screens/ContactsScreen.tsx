import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Auth, API, graphqlOperation } from 'aws-amplify';
import { View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';

import { listUsers }  from '../graphql/queries';
import {useEffect, useState} from "react";
import { useRoute } from '@react-navigation/native';
import { User } from '../types';

export default function ContactsScreen() {

  const [users, setUsers] = useState([]);
  const route = useRoute();
  //console.log(route.params);
  const chatRooms = route.params.chatRooms;
  
  

  const mapUsers = (user: User, currentAuthedUser: string) => {
    if (user.id === currentAuthedUser) {
      return null;
    }
    // console.log("hi")
    // let filterChatRoom = chatRooms.filter((value: {}) => 
    //                     Object.keys(value).length !== 0);
    //console.log(filterChatRoom)

    const chatRoom = chatRooms.filter((value: {}) => 
                        Object.keys(value).length !== 0).find(cr =>{
                          cr.chatRoomUsers.items.some((i) => (i.user.id === user.id))
                        });
    //console.log("Hi")
    if (chatRoom) {
      return {
        ...user,
        previousChatID: chatRoom.id
      };
    }


    return { ...user };
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));
        const currentUser = await Auth.currentAuthenticatedUser();
        const filteredUsers = usersData.data.listUsers.items
                .map((i: User) => 
                mapUsers(i, currentUser.attributes.sub)).filter(Boolean);
        console.log("Filtered users-->",filteredUsers);
        setUsers(filteredUsers);
      } catch(err) {
        console.warn(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

