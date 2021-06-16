import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

import LoginScreen from "../screens/Authentication/Login/login";
import SignUpScreen from "../screens/Authentication/SignUp/signup";
import BottomTabNavigator from "./BottomTabNavigator";
import ContactsScreen from "../screens/Personal/SingleChats/ContactsScreen";
import ChatRoomScreen from "../screens/Personal/SingleChats/ChatRoomScreen";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import ForwardScreen from "../screens/Personal/ForwardScreen";
import ChatsRoomHeader from "../components/Personal/shared/ChatRoomHeader";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AddContactsScreen from "../screens/Personal/GroupChats/AddContactsScreen";
import { Overlay } from "react-native-elements";
import OtherUserInfo from "../screens/Personal/OtherUserInfo";
import ImageViewer from "../screens/Personal/Shared/ImageViewer";
import ClickImage from "../screens/CameraScreen/ImageViewer"
import AddProfilePhoto from "../screens/Personal/Shared/AddProfilePhoto";


const LoginStack = createStackNavigator();
export default function LoginNavigator() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginStack.Screen name="MainScreen" component={BottomTabNavigator} />
    </LoginStack.Navigator>
  );
}

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="MainScreen" component={BottomTabNavigator} />
      <MainStack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ headerShown: true }}
      />
      <MainStack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        //options={({ route, navigation }) => chatsHeader(route, navigation)}
        //options={{ headerTitle:({route})=> <ChatsRoomHeader /> , headerShown: true}}
      />
      <MainStack.Screen name="LoginScreen" component={LoginNavigator} />
      <MainStack.Screen
        name="AddContacts"
        component={AddContactsScreen}
        options={{ headerShown: true, title: "Select Contacts" }}
      />
      <MainStack.Screen
        name="ForwardScreen"
        component={ForwardScreen}
        options={{ headerShown: true, title: "Select Contacts" }}
      />
      <MainStack.Screen name="OtherUserInfo" component={OtherUserInfo} />
      <MainStack.Screen name="ImageViewer" component={ImageViewer} />
      <MainStack.Screen name="ClickImage" component={ClickImage} />
      <MainStack.Screen name="AddProfilePhoto" component={AddProfilePhoto} />

    </MainStack.Navigator>
  );
}
