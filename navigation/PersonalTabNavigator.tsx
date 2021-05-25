import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Overlay } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

import PersonalCall from "../screens/Personal/CallsScreen/PersonalCall";
import GroupChatScreen from "../screens/Personal/GroupChats/ChatScreen";
import PersonalStories from "../screens/Personal/StoryScreen/PersonalStories";
import ChatsScreen from "../screens/Personal/SingleChats/ChatsScreen";
import ChatRoomScreen from "../screens/Personal/SingleChats/ChatRoomScreen";
import ContactsScreen from "../screens/Personal/SingleChats/ContactsScreen";
import WorkProfile from "../screens/Work/WorkProfile";

import Colors from "../constants/Colors";

// stack navigator for chat screen

const CustomMenu = ({ visible, toggleOverlay, navigation }) => {
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
      <Text style={{ padding: 10 }}>Hello from Overlay!</Text>
      <Text style={{ padding: 10 }}>Hello from Overlay!</Text>
      <TouchableOpacity
        onPress={() => {
          toggleOverlay();
          navigation.navigate("Profile");
        }}
      >
        <Text style={{ padding: 10 }}>Profile</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>Hello from Overlay!</Text>
      <Text style={{ padding: 10 }}>Hello from Overlay!</Text>
    </Overlay>
  );
};
const ChatsStack = createStackNavigator();

const ChatsNavigator = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: Colors.light.tint,
        //   shadowOpacity: 0,
        //   elevation: 0,
        // },
        // headerTintColor: Colors.light.background,
        // headerTitleAlign: "left",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
        headerShown: false,
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
  // console.log(route);
  return (
    <PersonalTab.Navigator
      style={{ elevation: 1 }}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        pressColor: Colors.primaryColor,
        activeTintColor: "rgba(0,150,250,1)",
        inactiveTintColor: "rgba(0,0,20,0.5)",
      }}
      activeColor={Colors.iconPrimaryColor}
    >
      <PersonalTab.Screen
        name="PersonalChats"
        component={ChatsNavigator}
        options={{
          title: "Chats",

          // tabBarIcon: ({ color }) => {
          //   return <Text>Chats</Text>;
          // },
        }}
      />

      <PersonalTab.Screen
        name="GroupChatScreen"
        component={GroupChatScreen}
        options={{
          title: "Groups",
          // tabBarIcon: ({ color }) => {
          //   return <Text>Profile</Text>;
          // },
        }}
      />

      <PersonalTab.Screen
        name="PersonalStories"
        component={PersonalStories}
        options={{
          title: "Stories",
          // tabBarIcon: ({ color }) => {
          //   return <Text>Stories</Text>;
          // },
        }}
      />

      <PersonalTab.Screen
        name="PersonalCall"
        component={PersonalCall}
        options={{
          title: "Calls",
          tabBarColor: Colors.iconPrimaryColor,
        }}
      />
    </PersonalTab.Navigator>
  );
};

const PersonalStack = createStackNavigator();

const PersonalStackNavigator = () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <PersonalStack.Navigator>
      <PersonalStack.Screen
        name="JustChat"
        component={PersonalTabNavigator}
        options={({ navigation, route }) => ({
          headerRight: () => {
            return (
              <View
                style={{
                  marginRight: 20,
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  padding: 1,
                }}
              >
                <View style={{ marginHorizontal: 10 }}>
                  <FontAwesome5
                    name="search"
                    size={24}
                    color="black"
                    onPress={() => {
                      console.log("Search");
                    }}
                  />
                </View>

                <View>
                  <FontAwesome5
                    name="ellipsis-v"
                    size={24}
                    color="black"
                    onPress={toggleOverlay}
                  />

                  <CustomMenu
                    visible={visible}
                    toggleOverlay={toggleOverlay}
                    navigation={navigation}
                  />
                </View>
              </View>
            );
          },
        })}
      />
      <PersonalStack.Screen name="Profile" component={WorkProfile} />
    </PersonalStack.Navigator>
  );
};
export default PersonalStackNavigator;
