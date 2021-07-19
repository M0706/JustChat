//This is Group ChatScreen

import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, View, Text, Image, Alert} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers} from '../../../src/graphql/queries';
import {User} from '../../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../../store/slices/Auth-slice';
import { ContactsFlatlist } from './ContactsFlatlist';


export default function AddContactsScreen() {
  const route = useRoute();

  const [users, setUsers] = useState(route.params.existingMembers);
  const [click, setClick] = useState(0);
  const currentUser = useSelector(state => state.currentUserInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // console.log(route.params)
  // let members = [];

  const mapUsers = (user: User, currentAuthedUser: string) => {
    if (user.id === currentAuthedUser) {
      return null;
    }

    return {...user};
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));

        const filteredUsers = usersData.data.listUsers.items
          .map((i: User) => mapUsers(i, currentUser.userID))
          .filter(Boolean);
        
        setUsers(filteredUsers);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchUsers();
  }, []);

  const onPressContact = member => {
    let newuserArray = [...users];

    newuserArray.forEach(item => {
      if (item.id == member.id) {
        item.selected = item.selected == null ? true : !item.selected;
      }
    });

    setUsers(newuserArray);
  };

  const makeGroup = async () => {
    let selectedUsers: never[] = [];
    console.log('hi');
    users.forEach(user => {
      if (user.selected == true) {
        selectedUsers.push(user);
      }
    });
    if (selectedUsers.length == 0) {
      Alert.alert('Error!', 'You have to select atleast one user');
      return;
    }
    dispatch(authActions.userInfoChanged());

    navigation.navigate('AddGroupInfo', {
      GroupUsers: selectedUsers,
    });
  };

  const updateExistingGroup = () => {
    console.log("Members-->", users);
  }

  return (
    <>
      <View style={styles.container}>
        <ContactsFlatlist
          users={users}
          onPressContact={onPressContact}></ContactsFlatlist>
      </View>
      <AntDesign
        name="arrowright"
        size={50}
        color="white"
        style={styles.next}
        onPress={route.params.NewGroup ? makeGroup : updateExistingGroup}
      />
    </>
  );
}

export const styles = StyleSheet.create({
  next: {
    backgroundColor: Colors.light.tint,
    width: 50,
    borderRadius: 25,
    left: 340,
    bottom: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    // top: 20,
  },

  leftContainer: {
    flexDirection: 'row',
  },

  tick: {
    marginTop: 25,
    marginRight: 10,
  },

  midContainer: {
    justifyContent: 'space-around',
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  status: {
    fontSize: 16,
    color: 'grey',
    paddingTop: 10,
    height: 50,
  },

  avatar: {
    width: 60,
    height: 70,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 60,
  },
});
