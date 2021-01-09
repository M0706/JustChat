import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Fontisto } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatsScreen';
import CameraScreen from '../screens/CameraScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 3
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: true
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={18} color={color} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={TabTwoNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={TabThreeNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={TabFourNavigator}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;

const TabOneStack = createStackNavigator<TabOneParamList>();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ChatsScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="StatusScreen"
        component={StatusScreen}
        options={{ headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{ headerShown: false }}
      />
    </TabFourStack.Navigator>
  );
}