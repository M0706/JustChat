import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';

import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GroupMemberListItem from '../../../components/Personal/GroupChats/GroupMemberListItem';

import styles from './styles';

//import ParallaxView from "react-native-parallax-view";
const Profile = props => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>Mute</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Custom notifications</Text>
        </View>
      </View>
      {route.params.isGroup == 'True' ? (
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={{...styles.green, ...styles.text}}>
              {route.params.members.length} Members
            </Text>
          </View>

          <View style={styles.container}>
            <FlatList
              data={route.params.members}
              keyExtractor={item => item.id}
              renderItem={({item}) => <GroupMemberListItem member={item} />}
            />
          </View>
        </View>
      ) : (
        <>{null}</>
      )}

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.green}>Status and Phone</Text>
          <Text style={styles.text}>{props.status}</Text>
          <Text style={styles.subText}>January 5</Text>
        </View>
        <View style={styles.number}>
          <View style={{paddingHorizontal: 5}}>
            <Text style={styles.text}>+00 9874563212</Text>
            <Text style={styles.subText}>Mobile</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="chat" color="#075e54" size={23} style={{padding: 5}} />
            <Icon name="call" color="#075e54" size={23} style={{padding: 5}} />
            <Icon
              name="videocam"
              color="#075e54"
              size={23}
              style={{padding: 5}}
            />
          </View>
        </View>
      </View>
      {/* </ParallaxView> */}
    </>
  );
};

export default Profile;