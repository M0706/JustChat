import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  createChatRoomUser,
  createChatRoom,
} from "../../../../src/graphql/mutations";
import { authActions } from '../../../../store/slices/Auth-slice'
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../../types";
import styles from "./style";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();
  const currentUserID = useSelector((state) => state.currentUserInfo.userID);
  const dispatch = useDispatch();
  
  const onClick = async () => {
    try {
      let newChatRoomData;
      if (!user.previousChatID) {
        newChatRoomData = await API.graphql(
          graphqlOperation(createChatRoom, {
            input: { lastMessageID: "", group: "False" },
          })
        );

        if (!newChatRoomData.data) {
          console.log("Failed to create chat room");
          return;
        }

        //dispatched action to tell store that state has been changed
        dispatch(authActions.userInfoChanged());

        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: user.id,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );

        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: currentUserID,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );
        
      }

      navigation.navigate("ChatRoom", {
        id: user.previousChatID
          ? user.previousChatID
          : newChatRoomData?.data.createChatRoom.id || "",
        name: user.name,
        group:"False",
      });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: user.imageUri }} />

          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
