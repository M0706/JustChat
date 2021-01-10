import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';
import { User } from '../types';

export default function ContactsScreen() {
  const [users, setUsers] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));
        const currentUser = await Auth.currentAuthenticatedUser();
        const filteredUsers = usersData.data.listUsers.items.filter((i) => i.id !== currentUser.attributes.sub);
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
        style={{ width: '100%' }}
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
    backgroundColor: '#fff'
  },
});
