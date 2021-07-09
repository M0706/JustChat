import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';


const CreateChannel = (props) => {

  const [channelName, setChannelName] = useState("");
  const navigation = useNavigation();
  const spaceRoomID = props.route.params.spaceRoomID;
  console.log(props.route.params);

  const createChannel = () => {
    let channel = props.route.params.channels.find((channel)=>channel.name.toLocaleLowerCase()==channelName.toLocaleLowerCase())
    if(channel){
        Alert.alert("This name is already taken by another channel!!");
        return;
    }
    navigation.navigate("AddMembers",{spaceRoomID,channelName});
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Channel name"
          placeholderTextColor="black"
          onChangeText={(text) => setChannelName(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={createChannel}
      >
          <Text style={styles.channelText} >Create Channel</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#003f5c",
      alignItems: "center",
      justifyContent: "center",
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
    channelText: {
      color: "white",
    },
  });

export default CreateChannel;
