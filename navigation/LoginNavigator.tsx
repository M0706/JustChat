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

const CustomMenu = ({ visible, toggleOverlay }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={{
        position: "absolute",
        top: 10,
        right: 10,
      }}
      animationType="fade"
    >
      <Text style={{ padding: 10 }} >
        Copy
      </Text>
      <Text style={{ padding: 10 }} >
        Forward
      </Text>

      <Text style={{ padding: 10 }}>Delete</Text>
    </Overlay>
  );
};


const chatsHeader = (route, navigation) => {
  return {
    title: route.params.name,
    headerShown: true,

    headerRight: () => (
      <>
        <View
          style={{
            flexDirection: "row",
            width: 100,
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <FontAwesome5 name="video" size={22} color={"black"} />
          <MaterialIcons
            name="call"
            size={22}
            color={"black"}
            onPress={() => {
              navigation.navigate("OtherUserInfo");
            }}
          />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            color={"black"}
          />
        </View>
      </>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={22} color={"black"} />
      </TouchableOpacity>
    ),
  };
};

const LoginStack = createStackNavigator();
export default function LoginNavigator() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
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
    </MainStack.Navigator>
  );
}
