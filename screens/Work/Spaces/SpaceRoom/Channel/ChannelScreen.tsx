import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View,Text,Button, SafeAreaView } from 'react-native';
import Drawer from "./Drawer";
import SpaceRoomHeader from '../../../../../components/Work/Spaces/SpaceHeader';
import InputBox from "../../../../../components/Work/Spaces/InputBox"

const ChannelScreen = () => {
  const navigation = useNavigation();
  
  useEffect(()=>{
    navigation.dispatch(DrawerActions.openDrawer());
  },[])
  return (
    <SafeAreaView> 
      <SpaceRoomHeader />
      <InputBox />
    </SafeAreaView>
  );
};
export default ChannelScreen;