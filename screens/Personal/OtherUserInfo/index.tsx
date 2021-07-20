import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import BottomPopup from '../../../components/Personal/shared/GroupBottomPopUp/BottomPopup';
import AddMembers from '../../Work/Spaces/SpaceRoom/Channel/AddMembers';
import styles from './styles';
import {CheckIsGroup} from './CheckIsGroup';

const Profile = props => {
  const route = useRoute();
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [groupMembers, setGroupMembers] = useState(
    route.params.isGroup == 'True' ? route.params.members : null,
  );
  console.log(route.params);
  const currentUser = useSelector(state => state.currentUserInfo);
  const navigation = useNavigation();

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

  const onAddMember = () => {
    navigation.navigate('AddContacts', {
      newGroup: false,
      existingMembers: route.params.members,
      chatRoomId: route.params.chatRoomId,
    });
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
        <View>
          <Text onPress={onAddMember}>Add members</Text>
          <CheckIsGroup
            userID={currentUser.userID}
            members={groupMembers ? groupMembers : []}
            onClickMember={onClickMember}
          />
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
