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
import {
  createChatRoom,
  createChatRoomUser,
  createSpace,
} from "../../../src/graphql/mutations";
import { useSelector } from "react-redux";

const GroupInfo = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [spaceName, setSpaceName] = useState("");
  const currentUser = useSelector((state) => state.currentUserInfo);

  const makeSpace = async () => {
    if (spaceName == "") {
      Alert.alert("Error!", "Name of Group not specified");
      return;
    }
    try {
      console.log("hi");
      let newSpaceRoomData = await API.graphql(
        graphqlOperation(createSpaceRoom, {
          input: {
            name: spaceName,
            imageUri: "",
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Space name here"
          placeholderTextColor="black"
          onChangeText={(text) => setSpaceName(text)}
        />
      </View>
      <TouchableOpacity
        disabled={loading}
        style={styles.loginBtn}
        onPress={makeSpace}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.loginText}>Create Space</Text>
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
