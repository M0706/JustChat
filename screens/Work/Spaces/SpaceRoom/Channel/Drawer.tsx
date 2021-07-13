import { createDrawerNavigator } from "@react-navigation/drawer";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {StyleSheet, View,useWindowDimensions} from 'react-native'
import { listChannels } from "../../../../../src/graphql/queries";
import { onCreateChannel, onCreateChannelUser } from "../../../../../src/graphql/subscriptions";
// import ChannelList from "../../../../components/Work/Spaces/ChannelDrawer";
import ChannelListDrawer from "./ChannelListDrawer";
import ChannelScreen from "./ChannelScreen"

const Drawer = createDrawerNavigator();

const ChannelDrawer = ({ navigation, route }) => {

  const dimensions = useWindowDimensions();
  const [channels, setChannels] = useState([])
  console.log("Channels--->", channels);
  //console.log("routes--->",route.params);

  const fetchChannels = async () => {
    let filter = { spaceRoomID: { eq: route.params.spaceRoomID } }
    const loadChannels = await API.graphql(graphqlOperation(listChannels, {
          filter:filter
      }
    ))
    setChannels(loadChannels.data.listChannels.items)
  }
  useEffect(() => {
    let unmounted = false;
   // console.log(currentUser.isAuth);
    if (!unmounted) {
      fetchChannels();
    }
    return () => { unmounted = true };
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateChannelUser)
    ).subscribe({
      next: (data: any) => {
        fetchChannels();
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        edgeWidth={dimensions.width}
        drawerContent={() => <ChannelListDrawer
          channels={route.params.channels}
          spaceRoomID={route.params.spaceRoomID} />
        }
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
    // backgroundColor: '#3F0E40',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default ChannelDrawer;
