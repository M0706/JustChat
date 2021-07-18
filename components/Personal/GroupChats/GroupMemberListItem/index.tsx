import React from 'react';
import {useEffect} from 'react';

import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from './styles';

const GroupMemberListItem = props => {
  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <View style={styles.image}>
          <Image
            style={styles.userImage}
            source={{uri: props.member.imageUri}}
          />
        </View>
        <View style={styles.textSection}>
          <View style={styles.userInfoText}>
            <View style={styles.userName}>
              <Text>{props.member.name}</Text>
            </View>
          </View>
          <View style={styles.status}>
            <Text>{props.member.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GroupMemberListItem;