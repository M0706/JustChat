import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createChatRoom,
  createChatRoomUser,
} from '../../../../src/graphql/mutations';
import {authActions} from '../../../../store/slices/Auth-slice';
import { Options } from './Options';

const deviceHeight = Dimensions.get('window').height;

const BottomPopup = props => {
  const {show, openModal, closeModal, member, currentUser} = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const performAction = async action => {
    if (action.name == 'Message') {
      let chatRooms = currentUser.chatRooms;
      let otherUser = null;
      let filterChatRoom = chatRooms.filter(
        (value: {}) => Object.keys(value).length !== 0,
      );
      for (var cr in filterChatRoom) {
        var temp = filterChatRoom[cr];
        //Users can have multiple groups with same members but no single chats with same members
        if (temp.group === 'True') {
          continue;
        }
        for (var tr in temp.chatRoomUsers.items) {
          var tuser = temp.chatRoomUsers.items[tr];
          if (tuser.user.id == member.id) {
            otherUser = {
              ...member,
              previousChatID: temp.id,
            };
            break;
          }
        }
      }
      if (otherUser == null) otherUser = {...member};

      try {
        let newChatRoomData;
        // console.log("Otheruser--->", otherUser);
        if (!otherUser.previousChatID) {
          newChatRoomData = await API.graphql(
            graphqlOperation(createChatRoom, {
              input: {lastMessageID: '', group: 'False'},
            }),
          );

          if (!newChatRoomData.data) {
            console.log('Failed to create chat room');
            return;
          }

          //dispatched action to tell store that state has been changed
          dispatch(authActions.userInfoChanged());

          await API.graphql(
            graphqlOperation(createChatRoomUser, {
              input: {
                userID: otherUser.id,
                chatRoomID: newChatRoomData.data.createChatRoom.id,
              },
            }),
          );

          await API.graphql(
            graphqlOperation(createChatRoomUser, {
              input: {
                userID: currentUser.userID,
                chatRoomID: newChatRoomData.data.createChatRoom.id,
              },
            }),
          );
        }

        navigation.navigate('ChatRoom', {
          id: otherUser.previousChatID
            ? otherUser.previousChatID
            : newChatRoomData?.data.createChatRoom.id || '',
          name: otherUser.name,
          group: 'False',
        });
      } catch (err) {
        console.warn(err);
      }
    }
  };

  
  const onOutside = onTouch => {
    const view = <View style={{flex: 1, width: '100%'}}></View>;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  };

  const displayName = name => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#182E44',
            fontSize: 25,
            fontWeight: '500',
            marginTop: 15,
            marginBottom: 30,
          }}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <>
      {member != null ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={show}
          onRequestClose={closeModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000AA',
              justifyContent: 'flex-end',
            }}>
            {onOutside(closeModal)}
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: '100%',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                paddingHorizontal: 10,
                maxHeight: deviceHeight * 0.4,
              }}>
              {displayName(member.name)}
              <Options performAction={performAction}></Options>
            </View>
          </View>
        </Modal>
      ) : (
        <>{null}</>
      )}
    </>
  );
};

export default BottomPopup;
