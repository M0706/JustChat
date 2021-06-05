import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { ActivityIndicator } from "react-native-paper";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createChatRoom, createChatRoomUser } from "../../../graphql/mutations";
import { useSelector } from "react-redux";

const GroupInfo = (props) => {
  const navigation = useNavigation();
  const groupUsers = props.route.params.GroupUsers;
  const [loading, setLoading] = useState(false);
  const [groupName, setGroupName] = useState("");
  const currentUser = useSelector((state) => state.currentUserInfo);


  const makeGroup = async () => {
    if (groupName == "") {
      Alert.alert("Error!", "Name of Group not specified");
      return;
    }
    const groupInfo = [...groupUsers, { groupName: groupName }];
    try {
      let newChatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, {
          input: {
            lastMessageID: "",
            group: "True",
            name: groupName,
          },
        })
      );
      if (!newChatRoomData.data) {
        console.log("Failed to create chat room");
        return;
      }
      groupUsers.forEach(async (user) => {
        await API.graphql(
          graphqlOperation(createChatRoomUser, {
            input: {
              userID: user.id,
              chatRoomID: newChatRoomData.data.createChatRoom.id,
            },
          })
        );
      });

      await API.graphql(
        graphqlOperation(createChatRoomUser, {
          input: {
            userID: currentUser.userID,
            chatRoomID: newChatRoomData.data.createChatRoom.id,
          },
        })
      );
      navigation.navigate("ChatRoom", {
        id: newChatRoomData?.data.createChatRoom.id || "",
        name: groupName,
        group:"True",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your group name here"
          placeholderTextColor="black"
          onChangeText={(text) => setGroupName(text)}
        />
      </View>
      <TouchableOpacity
        disabled={loading}
        style={styles.loginBtn}
        onPress={makeGroup}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.loginText}>Create Group</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  // next: {
  //   backgroundColor: Colors.light.tint,
  //   width: 50,
  //   borderRadius: 25,
  //   left: 340,
  //   bottom: 40,
  // },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    borderColor: "black",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  navigate: {
    color: "white",
    textDecorationLine: "underline",
  },
});
export default GroupInfo;
