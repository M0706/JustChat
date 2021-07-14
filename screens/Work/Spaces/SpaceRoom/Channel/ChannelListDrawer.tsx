import React, { useState } from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import ChannelList from '../../../../../components/Work/Spaces/ChannelList';


const ChannelListDrawer = (props) => {
    //console.log("Route in ChannelListDrawer--->",props.route.params.spaceRoomID);
  const [channels, setChannels] = useState(props.channels);
  console.log("props--->",props.channels)

    return (
      <SafeAreaView>
        {/* <Text style={{color:"white",alignItems:"center",}}>Drawer</Text> */}
        <ChannelList changeChannel={channelId=>{
          props.navigation.jumpTo('ChannelScreen',{
            channelId
          })
        }} 
        channelActions = {{channels,setChannels}}
        spaceRoomID = {props.spaceRoomID}
        />
      </SafeAreaView>
    );
  };

  export default ChannelListDrawer;