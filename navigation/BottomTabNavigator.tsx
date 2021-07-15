import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import PersonalNavigator from "./PersonalNavigator";
import WorkNavigator from "./WorkNavigator";
import Camera from "../screens/CameraScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Colors from "../constants/Colors";

const MainTab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <>
      <MainTab.Navigator barStyle={{ height: 55 }} shifting={true}>
        <MainTab.Screen
          name="Personal"
          component={PersonalNavigator}
          options={{
            tabBarIcon: () => {
              return (
             
                <Ionicons name="people" size={30} color="#900" />

              );
            },
            tabBarColor: Colors.primaryColor,
          }}
        />
        <MainTab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons name="camera-outline" size={30} color="#900" />

              );
            },
            tabBarColor: Colors.accentColor,
          }}
        />
        <MainTab.Screen
          name="Work"
          component={WorkNavigator}
          options={{
            tabBarIcon: () => {
              return (
        
                <MaterialIcons name="work" size={30} color="#900" />

              );
            },
            tabBarColor: Colors.accentColor,
          }}
        />
      </MainTab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
