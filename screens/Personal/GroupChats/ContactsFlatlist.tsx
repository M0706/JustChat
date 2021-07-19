import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { User } from '../../../types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './AddContactsScreen';

export function ContactsFlatlist(props) {
  return (
    <FlatList
      style={{
        width: '100%',
      }}
      data={props.users}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            props.onPressContact(item);
          }}>
          <View style={styles.container}>
            {item.selected == true ? (
              <>
                <AntDesign
                  name="checkcircleo"
                  size={24}
                  color="blue"
                  style={styles.tick} />
              </>
            ) : (
              <>
                <Entypo
                  name="circle"
                  size={24}
                  color="black"
                  style={styles.tick} />
              </>
            )}
            <View style={styles.leftContainer}>
              <Image
                style={styles.avatar}
                source={{
                  uri: item.imageUri,
                }} />
              <View style={styles.midContainer}>
                {item.selected == true ? (
                  <>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.status}>{item.status}</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.status}>{item.status}</Text>
                  </>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item: User) => item.id} />
  );
}
