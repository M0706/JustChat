import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View,Text,Button, SafeAreaView } from 'react-native';
import Drawer from "./Drawer"

const ChannelScreen = () => {
  const navigation = useNavigation();
  
  useEffect(()=>{
    navigation.dispatch(DrawerActions.openDrawer());
  },[])
  return (
    <SafeAreaView> 
      <Text>Work Screen</Text>
      <Button title="Open Drawer" onPress={()=>{
        navigation.dispatch(DrawerActions.openDrawer());
      }}/>
    </SafeAreaView>
  );
};
export default ChannelScreen;