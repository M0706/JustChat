import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Camera from "../screens/Camera/index";
import PersonalTabNavigator from "./PersonalTabNavigator";
import WorkTabNavigator from "./WorkTabNavigator";

import Icon from "react-native-vector-icons/Ionicons";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";

const MainTab = createMaterialBottomTabNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainTab.Navigator barStyle={{ height: 55 }} shifting={true}>
        <MainTab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: () => {
              return (
                <Icon name="camera" size={25} color={Colors.iconPrimaryColor} />
              );
            },
            tabBarColor: Colors.accentColor,
          }}
        />
        <MainTab.Screen
          name="Personal"
          component={PersonalTabNavigator}
          options={{
            tabBarIcon: () => {
              return (
                <IconMat
                  name="account-group-outline"
                  size={26}
                  color={Colors.iconPrimaryColor}
                />
              );
            },
            tabBarColor: Colors.primaryColor,
          }}
        />
        <MainTab.Screen
          name="Work"
          component={WorkTabNavigator}
          options={{
            tabBarIcon: () => {
              return (
                <IconMat
                  name="account-tie-outline"
                  size={30}
                  color={Colors.iconPrimaryColor}
                />
              );
            },
            tabBarColor: Colors.accentColor,
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
