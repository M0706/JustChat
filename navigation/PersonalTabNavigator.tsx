import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import PersonalCall from "../screens/Personal/PersonalCall";
import PersonalProfile from "../screens/Personal/PersonalProfile";
import PersonalStories from "../screens/Personal/PersonalStories";
import ChatsScreen from "../screens/Personal/ChatsScreen";
import ChatRoomScreen from "../screens/Personal/ChatRoomScreen";
import ContactsScreen from "../screens/Personal/ContactsScreen";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

// stack navigator for chat screen
const ChatsStack = createStackNavigator();

const ChatsNavigator = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ChatsStack.Screen name="ChatScreen" component={ChatsScreen} />
      <ChatsStack.Screen name="ChatRoom" component={ChatRoomScreen} />
      <ChatsStack.Screen name="Contacts" component={ContactsScreen} />
    </ChatsStack.Navigator>
  );
};

const PersonalTab = createMaterialTopTabNavigator();

const PersonalTabNavigator = () => {
  return (
    <PersonalTab.Navigator
      style={{ marginTop: 30 }}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        pressColor: Colors.primaryColor,
        activeTintColor: "rgba(0,150,250,1)",
        inactiveTintColor: "rgba(0,0,20,0.5)",
      }}
      activeColor={Colors.iconPrimaryColor}
    >
      <PersonalTab.Screen
        name="PersonalCall"
        component={PersonalCall}
        options={{
          title: "Call",
          tabBarIcon: ({ color }) => {
            return (
              <Icon name="call-outline" size={25} color={color} />
              // color="rgba(120,250,250,1)" />
            );
          },
          tabBarColor: Colors.iconPrimaryColor,
        }}
      />
      <PersonalTab.Screen
        name="PersonalChats"
        component={ChatsNavigator}
        options={{
          title: "Chats",

          tabBarIcon: ({ color }) => {
            return <Icon name="chatbubbles-outline" size={25} color={color} />;
          },
        }}
      />

      <PersonalTab.Screen
        name="PersonalStories"
        component={PersonalStories}
        options={{
          title: "Stories",
          tabBarIcon: ({ color }) => {
            return <Icon name="list-outline" size={25} color={color} />;
          },
        }}
      />
      <PersonalTab.Screen
        name="PersonalProfile"
        component={PersonalProfile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return <Icon name="person-outline" size={25} color={color} />;
          },
        }}
      />
    </PersonalTab.Navigator>
  );
};

export default PersonalTabNavigator;
