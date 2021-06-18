import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphqlCustom/queries";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/slices/Auth-slice";
import { createUser } from "../../../src/graphql/mutations";

export default function LoginScreen() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [forgotPassUser, setForgotPassUser] = useState("");
  const [otpSending, setOtpSending] = useState(false)
  const [enterOTP, setEnterOTP] = useState(false)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const login = async () => {
    setLoading(true);
    try {
      const userInfo = await Auth.signIn(userName, password);
      let userData = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );

      if (userData.data.getUser) {
        console.log("User registered");
      }
      else {
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri:"",
          status: "Hey, Im a tree",
        };
  
        userData = await API.graphql(graphqlOperation(createUser, { input: newUser }));
      }
   
      
      dispatch(authActions.updateAuthInfo({
        userData,
        userID: userInfo.attributes.sub,
        isAuth: true,
        changed:false
      }))

      //console.log(userData.data.getUser);
      
      if (userData.data?.getUser?.imageUri===""){
        navigation.navigate("AddProfilePhoto",{userID: userInfo.attributes.sub});
      } else {
        console.log("navigate to mainscreen");
        navigation.navigate("MainScreen");
      }

    } catch (err) {
      console.log(err);
      Alert.alert("Error!", err.message || "An error ocurred");
    }
    setLoading(false);
  };


  return (
  
    <View style={styles.container}>
    <Text style={styles.logo}>JustChat</Text>
    
 
   <View style={styles.inputView}>
     <TextInput
       style={styles.inputText}
       placeholder="UserName"
       placeholderTextColor="#003f5c"
       onChangeText={(text) => setUserName(text)}
     />
   </View>
   <View style={styles.inputView}>
     <TextInput
       secureTextEntry
       style={styles.inputText}
       placeholder="Password"
       placeholderTextColor="#003f5c"
       onChangeText={(text) => setPassword(text)}
     />
   </View>
   <TouchableOpacity onPress={()=>{
     navigation.navigate("ForgotPassword");
   }}>
     <Text style={styles.forgot}>Forgot Password?</Text>
   </TouchableOpacity>
   <TouchableOpacity
     disabled={loading}
     style={styles.loginBtn}
     onPress={login}
   >
     {loading ? (
       <ActivityIndicator />
     ) : (
       <Text style={styles.loginText}>Sigin</Text>
     )}
   </TouchableOpacity>
   <TouchableOpacity
     onPress={() => {
       navigation.navigate("SignUpScreen");
     }}
   >
     <Text style={styles.navigate}>Don't Have an acount?</Text>
   </TouchableOpacity>
  </View>


  );


}


    // <View style={styles.container}>
    //   <Text style={styles.logo}>JustChat</Text>
    //   <View style={styles.inputView}>
    //     <TextInput
    //       style={styles.inputText}
    //       placeholder="UserName"
    //       placeholderTextColor="#003f5c"
    //       onChangeText={(text) => setUserName(text)}
    //     />
    //   </View>
    //   <View style={styles.inputView}>
    //     <TextInput
    //       secureTextEntry
    //       style={styles.inputText}
    //       placeholder="Password"
    //       placeholderTextColor="#003f5c"
    //       onChangeText={(text) => setPassword(text)}
    //     />
    //   </View>
    //   <TouchableOpacity onPress={()=>{
    //     setForgotPass(true);
    //   }}>
    //     <Text style={styles.forgot}>Forgot Password?</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     disabled={loading}
    //     style={styles.loginBtn}
    //     onPress={login}
    //   >
    //     {loading ? (
    //       <ActivityIndicator />
    //     ) : (
    //       <Text style={styles.loginText}>Sigin</Text>
    //     )}
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     onPress={() => {
    //       navigation.navigate("SignUpScreen");
    //     }}
    //   >
    //     <Text style={styles.navigate}>Don't Have an acount?</Text>
    //   </TouchableOpacity>
    // </View>