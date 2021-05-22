import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import WorkCall from "../screens/Work/WorkCall";
import WorkProfile from "../screens/Work/WorkProfile";
import WorkStories from "../screens/Work/WorkStories";
import WorkChats from "../screens/Work/WorkChats";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

const WorkTab = createMaterialTopTabNavigator();

const WorkTabNavigator = () => {
  return (
    <WorkTab.Navigator
      style={{ marginTop: 30 }}
      tabBarOptions={{ showIcon: true, showLabel: false }}
    >
      <WorkTab.Screen
        name="WorkCall"
        component={WorkCall}
        options={{
          tabBarIcon: () => {
            return <Icon name="call-outline" size={25} />;
          },
        }}
      />
      <WorkTab.Screen
        name="WorkChats"
        component={WorkChats}
        options={{
          tabBarIcon: () => {
            return <Icon name="chatbubbles-outline" size={25} />;
          },
        }}
      />
      <WorkTab.Screen
        name="WorkStories"
        component={WorkStories}
        options={{
          tabBarIcon: () => {
            return <Icon name="list-outline" size={25} />;
          },
        }}
      />
      <WorkTab.Screen
        name="WorkProfile"
        component={WorkProfile}
        options={{
          tabBarIcon: () => {
            return <Icon name="person-outline" size={25} />;
          },
        }}
      />
    </WorkTab.Navigator>
  );
};

export default WorkTabNavigator;
