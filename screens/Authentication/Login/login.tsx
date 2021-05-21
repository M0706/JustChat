import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("Root")
  }

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>JustChat</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Button style={styles.loginText} title = "Login" onPress={onLoginPress}></Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
}