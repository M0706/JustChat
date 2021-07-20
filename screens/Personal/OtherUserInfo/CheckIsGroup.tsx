import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import GroupMemberListItem from '../../../components/Personal/GroupChats/GroupMemberListItem';
import styles from './styles';

//import ParallaxView from "react-native-parallax-view";
export function CheckIsGroup(props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={{...styles.green, ...styles.text}}>
          {props.members.length} Members
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={props.members}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                if (props.userID != item.id) props.onClickMember(item);
              }}>
              <GroupMemberListItem member={item} />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </View>
  );
}
