import { Auth } from 'aws-amplify';
import React,{useState} from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import {View, TextInput, TouchableOpacity, Text} from "react-native"
import styles from "../Login/styles";
import EnterOTP from "../../../components/Authentication/ForgotPassword/EnterOtp"

const userEnter = ()=>{
    const [forgotPassUser, setForgotPassUser] = useState("");
    const [otpSending, setOtpSending] = useState(false)
    const [enterOTP, setEnterOTP] = useState(false)

    const sendOtp = async() => {
        if(!forgotPassUser){
          Alert.alert("Error!", "No username entered!");
          return;
        }
        setOtpSending(true)
        try{
          await Auth.forgotPassword(forgotPassUser) //.then(data => console.log(data))
          setEnterOTP(true);
        
        }catch (err) {
          console.log(err);
          Alert.alert("Error!", err.message || "An error ocurred");
        }
        setOtpSending(false)
      }
      
    return(
        <>
        <View style={styles.container}>
    <Text style={styles.logo}>JustChat</Text>
        {enterOTP ? <EnterOTP username={forgotPassUser}/> :(
            <>
                <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="UserName"
                  placeholderTextColor="#003f5c"
                  onChangeText={(text) => setForgotPassUser(text)}
                />
              </View>
              <TouchableOpacity
               disabled={otpSending}
               style={styles.loginBtn}
               onPress={sendOtp}
             >
               {otpSending ? (
                 <ActivityIndicator />
               ) : (
                 <Text style={styles.loginText}>send OTP</Text>
               )}
             </TouchableOpacity>
             </>
        )}

   </View>
   </>
    )
}

export default userEnter;

