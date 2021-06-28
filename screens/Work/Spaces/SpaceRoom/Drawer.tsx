import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import {SafeAreaView, Text, StyleSheet, View,Button} from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
// import ChannelList from "../../../../components/Work/Spaces/ChannelDrawer";
import ChannelListDrawer from "./ChannelListDrawer";
import ChannelScreen from "./ChannelScreen"

const Drawer = createDrawerNavigator();

const ChannelDrawer = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
        <Drawer.Navigator
          drawerContent = {ChannelListDrawer}
          drawerStyle={styles.drawerNavigator}>
          <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
        </Drawer.Navigator>
      </View>
  );
};

const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: '#3F0E40',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default ChannelDrawer;
