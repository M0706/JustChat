import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';

import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import BottomPopup from '../../../components/BottomPopup';
import GroupMemberListItem from '../../../components/Personal/GroupChats/GroupMemberListItem';
import AddMembers from '../../Work/Spaces/SpaceRoom/Channel/AddMembers';
import styles from './styles';

//import ParallaxView from "react-native-parallax-view";
const Profile = props => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const currentUser = useSelector(state => state.currentUserInfo);
  const route = useRoute();

  const onShowModal = () => {
    setShow(true);
    // modalRef.showModal();
  };
  const onCloseModal = () => {
    setShow(false);
    setSelectedMember(null);
    // modalRef.showModal();
  };

  const onClickMember = member => {
    setSelectedMember(member), onShowModal();
  };

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
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    if (currentUser.userID != item.id) onClickMember(item);
                  }}>
                  <GroupMemberListItem member={item} />
                </TouchableWithoutFeedback>
              )}
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
      <BottomPopup
        show={show}
        openModal={onShowModal}
        closeModal={onCloseModal}
        member={selectedMember}
        currentUser={currentUser}
      />
    </>
  );
};

export default Profile;
