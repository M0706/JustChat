import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { View } from "react-native";
import { Octicons, Fontisto } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/Personal/ChatsScreen";
import Stories from "../screens/Personal/Stories";
import Login from '../screens/Authentication/Login/login'
import Camera from "../screens/Camera";
import {
  MainTabParamList,
  ChatScreenList,
  LoginScreenList,
  StoriesScreenList,
  CameraScreenList,
} from "../types";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Personal"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
      />

      <MainTab.Screen name="Personal" component={TabOneNavigator} />
      <MainTab.Screen name="Work" component={TabOneNavigator} />
      <MainTab.Screen name="Stories" component={TabTwoNavigator} />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabLoginStack = createStackNavigator<LoginScreenList>();

function LoginNavigator() {
  return (
    <TabLoginStack.Navigator>
      <TabLoginStack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "" }}
      />
    </TabLoginStack.Navigator>
  );
}

const TabChatsStack = createStackNavigator<ChatScreenList>();


function TabOneNavigator() {
  return (
    <TabChatsStack.Navigator>
      <TabChatsStack.Screen
        name="ChatScreen"
        component={ChatsScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabChatsStack.Navigator>
  );
}


const TabStoriesStack = createStackNavigator<StoriesScreenList>();

function TabTwoNavigator() {
  return (
    <TabStoriesStack.Navigator>
      <TabStoriesStack.Screen
        name="Stories"
        component={Stories}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabStoriesStack.Navigator>
  );
}

const CameraTabStack = createStackNavigator<CameraScreenList>();

function TabThreeNavigator() {
  return (
    <CameraTabStack.Navigator>
      <CameraTabStack.Screen name="Camera" 
      component={Camera} 
      options={{ headerTitle: "Tab Three title" }}/>
    </CameraTabStack.Navigator>
  );
}
