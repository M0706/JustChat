import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ChannelList from '../../../../components/Work/Spaces/ChannelList';


const ChannelListDrawer = (props) => {
    return (
      <SafeAreaView>
        {/* <Text style={{color:"white",alignItems:"center",}}>Drawer</Text> */}
        <ChannelList />
      </SafeAreaView>
    );
  };

  export default ChannelListDrawer;