import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import PersonalNavigator from "./PersonalNavigator";
import WorkNavigator from "./WorkNavigator";
import Camera from "../screens/CameraScreen";

import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
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
                <MaterialIcons
                  name="people"
                  size={26}
                  color={Colors.iconPrimaryColor}
                />
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
                <Entypo
                  name="camera"
                  size={25}
                  color={Colors.iconPrimaryColor}
                />
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
                <MaterialCommunityIcons
                  name="professional-hexagon"
                  size={30}
                  color={Colors.iconPrimaryColor}
                />
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
