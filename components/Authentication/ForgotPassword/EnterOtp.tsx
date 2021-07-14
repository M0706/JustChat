import { Auth } from 'aws-amplify';
import React,{useState} from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import {View, TextInput, TouchableOpacity, Text} from "react-native"
import styles from "../../../screens/Authentication/Login/styles";
import {useNavigation} from "@react-navigation/native";


const enterOTP = (props)=>{
    const [OTP, setOTP] = useState("")
    const [password,setPassword] = useState("");
    const [submitOTP, setSubmitOTP ] = useState(false)
    const navigation = useNavigation()

    const confirmOTP = async() => {
      setSubmitOTP(true);
      try {
        await Auth.forgotPasswordSubmit(props.username, OTP, password)
        Alert.alert("Success!", "You can login now");
        navigation.navigate("LoginScreen");
      } catch (err) {
        Alert.alert("Error!", err.message || "An error ocurred");
      }
      setSubmitOTP(false);
    }
      
    return(
        <>
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Verification Code"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setOTP(text)}
      />
    </View>
    <View style={styles.inputView}>
     <TextInput
       secureTextEntry
       style={styles.inputText}
       placeholder="New Password"
       placeholderTextColor="#003f5c"
       onChangeText={(text) => setPassword(text)}
     />
   </View>
    <TouchableOpacity
     disabled={submitOTP}
     style={styles.loginBtn}
     onPress={confirmOTP}
   >
     {submitOTP ? (
       <ActivityIndicator />
     ) : (
       <Text style={styles.loginText}> Confirm </Text>
     )}
   </TouchableOpacity>
   </>
    )
}

export default enterOTP;

