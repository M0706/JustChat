import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";

import ChatMessage from "../../../components/Personal/SingleChats/ChatMessage";
import BG from "../../../assets/images/BG.png";
import InputBox from "../../../components/Personal/SingleChats/InputBox";
import { messagesByChatRoom } from "../../../src/graphql/queries";
import { onCreateMessage } from "../../../src/graphql/subscriptions";
import { Cache } from "aws-amplify";
import Colors from "../../../constants/Colors";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { getUser } from "../../../graphqlCustom/queries";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { AuthDetails } from "../../../store/actions/auth-actions";
import ChatsRoomHeader from "../../../components/Personal/shared/ChatRoomHeader";
// import styles from "../../Authentication/Login/styles";

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [nextToken, setNextToken] = useState(null);
  const [pressed, setPressed] = useState(false);
  const [chatRooms, setChatRooms] = useState([]);
  const currentUser = useSelector((state) => state.currentUserInfo);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState("");
  const latestUpdateMessage = useRef(null);

  const route = useRoute();
  const HandleScroll = () => {
    if (nextToken !== null) {
      fetchMessages(nextToken);
    }
  };

  function compare_time(a, b) {
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
      userData.data.getUser.chatRoomUser.items.map((room) => {
        if (room.chatRoom.group === "False") {
          tempChatRoomArr.push(room);
        }
      });

      tempChatRoomArr.sort(compare_time);

      setChatRooms(tempChatRoomArr.map((i) => ({ ...i.chatRoom })));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMessages = async (nextToken) => {
    const loadmessages = await API.graphql(
      graphqlOperation(messagesByChatRoom, {
        chatRoomID: route.params.id,
        sortDirection: "DESC",
        limit: 15,
        nextToken,
      })
    );

    let messageArr = [...messages].concat(
      loadmessages.data.messagesByChatRoom.items
    );
    setMessages(messageArr);
    setNextToken(loadmessages.data.messagesByChatRoom.nextToken);
    // console.log("Next Token --->",
    //   messages.data.messagesByChatRoom.nextToken
    // );
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
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: async (data) => {
        const newMessage = data.value.data.onCreateMessage;
        setTemp("123");
        console.log("Line 123", route.params);
        if (newMessage.chatRoomID !== route.params.id) {
          console.log("Message is in another room");
          return;
        }

        setMessages([newMessage, ...messages]);
      },
    });

    return () => subscription.unsubscribe();
  }, [messages]);

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <ChatsRoomHeader Name={route.params.name} isGroup={route.params.group} />
      <FlatList
        data={messages}
        onEndReached={HandleScroll}
        refreshing={true}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <View style={styles.container}>
            {/* {pressed ? (
              <>
                <Entypo
                  name="circle"
                  size={24}
                  color="black"
                  style={styles.tick}
                />
              </>
            ) : (
              <Entypo
                name="circle"
                size={24}
                color="black"
                style={styles.tick}
              />
            )} */}

            <ChatMessage
              currentUserId={currentUser.userID}
              message={item}
              group={route.params.group}
              pressed={setPressed}
              chatRooms={chatRooms}
            />
          </View>
        )}
        inverted
      />

      <InputBox chatRoomID={route.params.id} />
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
    flexDirection: "row",
  },

  tick: {
    marginTop: 25,
    marginRight: 30,
  },

  midContainer: {
    justifyContent: "space-around",
  },

  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },

  status: {
    fontSize: 16,
    color: "grey",
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

export default ChatRoomScreen;
