import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import LoginScreen from "../screens/Authentication/Login/login";
import SignUpScreen from "../screens/Authentication/SignUp/signup";
import Navigation from "../navigation";

const LoginStack = createStackNavigator();
export default function LoginNavigator() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
        <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <LoginStack.Screen name="MainScreen" component={Navigation} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
