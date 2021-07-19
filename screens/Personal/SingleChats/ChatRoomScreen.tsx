import React, {useEffect, useState, useRef} from 'react';
import {FlatList, ImageBackground, View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';

import ChatMessage from '../../../components/Personal/SingleChats/ChatMessage';
import BG from '../../../assets/images/BG.png';
import InputBox from '../../../components/Personal/SingleChats/InputBox';
import {messagesByChatRoom} from '../../../src/graphql/queries';
import {onCreateMessage} from '../../../src/graphql/subscriptions';
import Colors from '../../../constants/Colors';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {AuthDetails} from '../../../store/actions/auth-actions';
import ChatsRoomHeader from '../../../components/Personal/shared/ChatRoomHeader';
import {updateMessage} from '../../../src/graphql/mutations';
import ReplyBox from '../../../components/Personal/shared/ReplyBox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {authActions} from '../../../store/slices/Auth-slice';

// import styles from "../../Authentication/Login/styles";

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  const [nextToken, setNextToken] = useState(null);
  const [pressed, setPressed] = useState(false);
  const [chatRooms, setChatRooms] = useState([]);
  const [reply, setReply] = useState(null);
  const currentUser = useSelector(state => state.currentUserInfo);
  const dispatch = useDispatch();
  const flatListRef = useRef();
  const [moveBottom, setMoveBottom] = useState(false);

  const route = useRoute();
  //console.log("routes", route);
  const HandleScroll = () => {
    if (nextToken !== null) {
      fetchMessages(nextToken);
    }
  };

  function compare_time(
    a: {chatRoom: {updatedAt: moment.MomentInput}},
    b: {chatRoom: {updatedAt: moment.MomentInput}},
  ) {
    if (moment(a.chatRoom.updatedAt).isBefore(b.chatRoom.updatedAt)) {
      return 1;
    } else if (moment(a.chatRoom.updatedAt).isAfter(b.chatRoom.updatedAt)) {
      return -1;
    } else {
      return 0;
    }
  }

  const fetchChatRooms = async () => {
    try {
      let userData = currentUser.userData;
      let tempChatRoomArr: any = [];
      userData.data.getUser.chatRoomUser.items.map(
        (room: {chatRoom: {group: string}}) => {
          if (room.chatRoom.group === 'False') {
            tempChatRoomArr.push(room);
          }
        },
      );

      tempChatRoomArr.sort(compare_time);

      setChatRooms(
        tempChatRoomArr.map((i: {chatRoom: any}) => ({...i.chatRoom})),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMessages = async (nextToken: null) => {
    const loadmessages = await API.graphql(
      graphqlOperation(messagesByChatRoom, {
        chatRoomID: route.params.id,
        sortDirection: 'DESC',
        limit: 40,
        nextToken,
      }),
    );

    let messageArr = [...messages].concat(
      loadmessages.data.messagesByChatRoom.items,
    );
    setMessages(messageArr);
    setNextToken(loadmessages.data.messagesByChatRoom.nextToken);
    updateReadAsync(messageArr);
  };

  const updateReadAsync = async loadedMessages => {
    loadedMessages.every(async message => {
      if (message.read === true || message.user.id === currentUser.userID) {
        return false;
      }
      await API.graphql(
        graphqlOperation(updateMessage, {
          input: {
            id: message.id,
            chatRoomID: message.chatRoomID,
            read: true,
          },
        }),
      );
      return true;
    });
  };

  useEffect(() => {
    if (currentUser.changed === true) {
      dispatch(AuthDetails());
    }
  }, [dispatch]);

  useEffect(() => {
    if (currentUser.changed === false) {
      fetchMessages(nextToken);
      fetchChatRooms();
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage),
    ).subscribe({
      next: async (data: {value: {data: {onCreateMessage: any}}}) => {
        const newMessage = data.value.data.onCreateMessage;
        if (newMessage.chatRoomID !== route.params.id) {
          console.log('Message is in another room');
          return;
        }
        setMessages([newMessage, ...messages]);
      },
    });

    return () => subscription.unsubscribe();
  }, [messages]);

  const downButtonHandler = () => {
    //OnCLick of Up button we scrolled the list to top
    flatListRef.current.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const scrollHandler = () => {
    if (moveBottom === false) {
      setMoveBottom(true);
    }
  };

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
      <ChatsRoomHeader
        Name={route.params.name}
        isGroup={route.params.group}
        lastSeen={route.params.lastSeen}
        chatRoomId={route.params.id}
      />
      <FlatList
        data={messages}
        onEndReached={HandleScroll}
        refreshing={true}
        onScroll={scrollHandler}
        ref={ref => {
          flatListRef.current = ref;
        }}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => (
          <View style={styles.container}>
            <ChatMessage
              currentUserId={currentUser.userID}
              message={item}
              group={route.params.group}
              pressed={setPressed}
              chatRooms={chatRooms}
              setReply={setReply}
            />
          </View>
        )}
        inverted
        keyExtractor={(item, index) => index.toString()}
      />

      {reply == null ? (
        <></>
      ) : (
        <View>
          <ReplyBox>
            <Text> {reply.content} </Text>
          </ReplyBox>
        </View>
      )}
      {moveBottom && (
        <MaterialIcons
          name="arrow-drop-down-circle"
          size={30}
          color="blue"
          onPress={downButtonHandler}
          style={styles.bottomButtom}
        />
      )}

      <InputBox
        chatRoomID={route.params.id}
        replyMessageID={reply?.id}
        setReply={setReply}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  next: {
    backgroundColor: Colors.light.tint,
    width: 50,
    borderRadius: 25,
    left: 340,
    bottom: 40,
  },
  container: {
    // flex: 1,
    // flexDirection: "row",
    // width: "100%",
    // padding: 10,
    // top: 20,
  },

  leftContainer: {
    flexDirection: 'row',
  },

  tick: {
    marginTop: 25,
    marginRight: 30,
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
  bottomButton: {
    backgroundColor: 'black',
  },
});

export default ChatRoomScreen;
