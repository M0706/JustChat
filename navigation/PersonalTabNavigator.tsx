import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Overlay } from "react-native-elements";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import PersonalCall from "../screens/Personal/CallsScreen/PersonalCall";
import GroupChatScreen from "../screens/Personal/GroupChats/ChatScreen";
import AddContactsScreen from "../screens/Personal/GroupChats/AddContactsScreen";
import PersonalStories from "../screens/Personal/StoryScreen/PersonalStories";
import ChatsScreen from "../screens/Personal/SingleChats/ChatsScreen";
import ChatRoomScreen from "../screens/Personal/SingleChats/ChatRoomScreen";
import ContactsScreen from "../screens/Personal/SingleChats/ContactsScreen";
import AddGroupInfo from "../screens/Personal/GroupChats/AddGroupInfo";
import WorkProfile from "../screens/Work/WorkProfile";

import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
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
      <ChatsStack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: true,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <FontAwesome5 name="video" size={22} color={"white"} />
              <MaterialIcons name="call" size={22} color={"white"} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={"white"}
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={22}
                color={"white"}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <ChatsStack.Screen name="Contacts" component={ContactsScreen} />
    </ChatsStack.Navigator>
  );
};

const GroupsStack = createStackNavigator();

const GroupsChatsNavigator = () => {
  return (
    <GroupsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <GroupsStack.Screen
        name="ChatScreen"
        component={GroupChatScreen}
        options={{ title: "JustChat" }}
      />
      <GroupsStack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: true,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <FontAwesome5 name="video" size={22} color={"white"} />
              <MaterialIcons name="call" size={22} color={"white"} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={"white"}
              />
            </View>
          ),
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate("Root")}>
          //     <MaterialCommunityIcons
          //       name="arrow-left"
          //       size={22}
          //       color={"white"}
          //     />
          //   </TouchableOpacity>
          // ),
        })}
      />
      <GroupsStack.Screen name="Contacts" component={AddContactsScreen} />
      <GroupsStack.Screen name="AddGroupInfo" component={AddGroupInfo} />
    </GroupsStack.Navigator>
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
        name="GroupChats"
        component={GroupsChatsNavigator}
        options={{
          title: "Groups",
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
          // tabBarColor: Colors.iconPrimaryColor,
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
