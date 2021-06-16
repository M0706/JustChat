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
import { Auth } from "aws-amplify";

export default function LoginScreen() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [forgotPassUser, setForgotPassUser] = useState("");
  const [otpSending, setOtpSending] = useState(false)
  const [enterOTP, setEnterOTP] = useState(false)
  const navigation = useNavigation();

  const login = async () => {
    setLoading(true);
    try {
      const res = await Auth.signIn(userName, password);
      // console.log("res-->",res);
      navigation.navigate("MainScreen");
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