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
import OTPInput from "@twotalltotems/react-native-otp-input";
import { Auth } from "aws-amplify";

export default function SignUpScreen() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [askingOTP, setAskingOTP] = useState(false);
  const [send, setSend] = useState(false)

  const navigation = useNavigation();

  const signup = async () => {
    setLoading(true);
    try {
      const res = await Auth.signUp({
        username: userName,
        password,
        attributes: {
          email,
          name,
        },
      });
      setAskingOTP(true);
    } catch (err) {
      console.log(err);
      Alert.alert("Error!", err.message || "An error ocurred");
    }
    setLoading(false);
  };

  const resendOTP = async() =>{
    setSend(true);
    try {
      const resend = await Auth.resendSignUp(userName);
      Alert.alert("Success!","Code send successfully");
      //setAskingOTP(true);
    } catch (err) {
      console.log(err);
      Alert.alert("Error!", err.message || "An error ocurred");
    }
    setSend(false);

  }

  const confirmCode = async () => {
    setConfirming(true);
    try {
      await Auth.confirmSignUp(userName, otp);
      navigation.navigate("LoginScreen");
      Alert.alert("Success!", "You can login now");
    } catch (err) {
      console.log(err);
      Alert.alert("Error!", err.message || "An error ocurred");
    }
    setConfirming(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>JustChat</Text>
      {askingOTP ? (
        <>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="OTP sent to your email"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setOTP(text)}
            />
          </View>
          <TouchableOpacity
            disabled={confirming}
            style={styles.loginBtn}
            onPress={confirmCode}
          >
            
            {confirming ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.loginText}>Confirm</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resendOTP}
          >
            {send ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.loginText}>Resend Code</Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Username/Handle"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setUserName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="name"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="email"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setEmail(text)}
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
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={loading}
            style={styles.loginBtn}
            onPress={signup}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.loginText}>SignUp</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={styles.navigate}>Already have an account?</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
