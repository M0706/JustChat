import React, { useEffect, useState, useRef } from "react";
import { Text, View, Pressable, Image, StyleSheet, Button } from "react-native";
import { updateUser } from "../graphql/mutations";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "./queries";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import imag from "../assets/images/favicon.png";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
// import { Button } from "native-base";
const AccountScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const exampleImageUri = Image.resolveAssetSource(imag).uri;
  const [img, setImg] = useState("");

  const datauser = async (name, img) => {
    const currentUser = await Auth.currentAuthenticatedUser();
    const userData = await API.graphql(
      graphqlOperation(getUser, { id: currentUser.attributes.sub })
    );
    setUserName(userData.data.getUser.name);
    await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: userData.data.getUser.id,
          name: name,
          imageUri: img,
        },
      })
    );
    console.log(userData);
  };

  useEffect(() => {
    datauser;
  }, []);

  const pressing = (name, img) => {
    setImg(img);
    datauser(name, img);
  };

  const onCameraPress = () => {
    //console.warn("Camera pressed")
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Image source={{ uri: img }} style={styles.avataropen} />
      </TouchableHighlight>
      <Text>Name:{username}</Text>
      {/* <Text>Image:{img}</Text> */}
      <TextInput onChangeText={setName} value={name} />
      <Button
        onPress={() => {
          pressing(name, exampleImageUri);
        }}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Fontisto
        name="camera"
        size={24}
        color="grey"
        style={styles.icon}
        onPress={onCameraPress}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: { marginLeft: 10, fontSize: 100 },
  avataropen: {
    width: 200,
    height: 200,
    marginLeft: 80,
    marginRight: 5,
    marginTop: 50,
    borderRadius: 100,
    borderColor: "red",
    borderWidth: 2,
  },
  icon: {
    marginTop: 20,
    marginHorizontal: 5,
  },
});
