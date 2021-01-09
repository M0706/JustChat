import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { ColorSchemeName } from 'react-native';
import { View } from 'react-native';

import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: 'WhatsApp',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between',
                marginRight: 10
              }}
            >
              <Octicons name="search" size={22} color={Colors.light.background} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route?.params?.name || 'Chat',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-between',
                marginRight: 10
              }}
            >
              <FontAwesome5 name="video" size={20} color={Colors.light.background} />
              <MaterialIcons name="call" size={20} color={Colors.light.background} />
              <MaterialCommunityIcons name="dots-vertical" size={20} color={Colors.light.background} />
            </View>
          )
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}