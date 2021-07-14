import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import SpaceListDrawer  from "../components/Work/Spaces/ChannelDrawer";
// import Icon from "react-native-vector-icons/Ionicons";
import Tasks from '../screens/Work/Tasks';
import Spaces from '../screens/Work/Spaces/SpaceScreen';
import Notes from '../screens/Work/Notes';
import DM from '../screens/Work/DM';
// import WorkProfile from "../screens/Work/Workprofile";

import { Overlay } from "react-native-elements";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Colors from "../constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";

const WorkTab = createMaterialTopTabNavigator();

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

const WorkTabNavigator = () => {
  return (
    <WorkTab.Navigator
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
      <WorkTab.Screen
        name="Spaces"
        component={Spaces}
        options={{
          title: "Spaces",
        }}
      />

      <WorkTab.Screen
        name="DMs"
        component={DM}
        options={{
          title: "DM's",
        }}
      />

      <WorkTab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          title: "Tasks",
        }}
      />
      <WorkTab.Screen
        name="Notes"
        component={Notes}
        options={{
          title: "Notes",
        }}
      />
    </WorkTab.Navigator>
  );
};

const WorkStack = createStackNavigator();

const WorkStackNavigator = () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <WorkStack.Navigator>
      <WorkStack.Screen
        name="JustChat"
        component={WorkTabNavigator}
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
      {/* <WorkStack.Screen name="Profile" component={WorkProfile} /> */}
    </WorkStack.Navigator>
  );
};
export default WorkStackNavigator;







// // const Drawer = createDrawerNavigator();

// const WorkScreen = ({navigation,route}) => {
//   return (
//     <SafeAreaView> 
//       <Text>Work Screen</Text>
//     </SafeAreaView>
//   );
// };

// // const WorkTabNavigator = ({navigation,route}) => {
// //   return (
// //     <View style={styles.container}>
// //         <Drawer.Navigator
// //           drawerContent={SpaceListDrawer}
// //           drawerStyle={styles.drawerNavigator}>
// //           <Drawer.Screen name="WorkScreen" component={WorkScreen} />
// //         </Drawer.Navigator>
// //       </View>
// //   );
// // };

// const styles = StyleSheet.create({
//   channelScreenSaveAreaView: {
//     backgroundColor: 'white',
//   },
//   channelScreenContainer: {flexDirection: 'column', height: '100%'},
//   container: {
//     flex: 1,
//   },
//   drawerNavigator: {
//     backgroundColor: '#3F0E40',
//     width: 350,
//   },
//   chatContainer: {
//     backgroundColor: 'white',
//     flexGrow: 1,
//     flexShrink: 1,
//   },
// });

// export default WorkTabNavigator;
