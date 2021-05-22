import React from "react";
import { Text } from 'react-native'; 
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import WorkCall from "../screens/Work/WorkCall";
import WorkProfile from "../screens/Work/WorkProfile";
import WorkStories from "../screens/Work/WorkStories";
import WorkChats from "../screens/Work/WorkChats";

// import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

const WorkTab = createMaterialTopTabNavigator();

const WorkTabNavigator = () => {
  return (
    <WorkTab.Navigator
      // style={{ marginTop: 30 }}
      // tabBarOptions={{ showIcon: true, showLabel: false }}
      style={{ marginTop: 30 }}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        pressColor: Colors.primaryColor,
        activeTintColor: "rgba(0,150,250,1)",
        inactiveTintColor: "rgba(0,0,20,0.5)",
      }}
      activeColor={Colors.iconPrimaryColor}
    >
      <WorkTab.Screen
        name="WorkCall"
        component={WorkCall}
        options={{
          title: "Calls",
        }}
      />
      <WorkTab.Screen
        name="WorkChats"
        component={WorkChats}
        options={{
          title: "Chats",
        }}
      />
      <WorkTab.Screen
        name="WorkStories"
        component={WorkStories}
        options={{
          title: "Stories",
        }}
      />
      <WorkTab.Screen
        name="WorkProfile"
        component={WorkProfile}
        options={{
          title: "Profile",
        }}
      />
    </WorkTab.Navigator>
  );
};

export default WorkTabNavigator;
