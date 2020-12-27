import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, View,Text} from 'react-native';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/chatRoomScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import UnderDevelopment from './UnderDevelopment';

import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ContactsScreen from "../screens/ContactsScreen";
import FleetScreen from "../screens/FleetScreen";
import NewFleetScreen from "../screens/NewFleetScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContentDisplay from '../screens/ContentDisplayScreen'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const Tab = createBottomTabNavigator();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;

            if (route.name === 'Chats') {
              iconName = "chat-outline";
            } 
            else if (route.name === 'feed') {
              iconName = 'seed';
            }
            else if (route.name === 'Calls') {
              iconName = 'phone';
            }
            else if (route.name === 'account') {
              iconName = 'account-box';
            } 

            // You can return any component that you like here!
            return <MaterialCommunityIcons 
            name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#347deb',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Chats" component={RootNavigator} />
        <Tab.Screen name="feed" component={UnderDevelopment}/>
        <Tab.Screen name="Calls" component={UnderDevelopment}/>
        <Tab.Screen name="account" component={UnderDevelopment}/>

        </Tab.Navigator>
    
        
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "JustChat",
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        }}
      />
      
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
      />

    <Stack.Screen
        name="Fleet"
        component={FleetScreen} />

    <Stack.Screen
        name="NewFleet"
        component={NewFleetScreen} />
        
    <Stack.Screen
      name="ContentDisplay"
      component={ContentDisplay}
      />


      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
