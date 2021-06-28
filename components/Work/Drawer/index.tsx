import { SpaceList } from '../Spaces/SpaceList'
import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";


const SpaceListDrawer = (props) => {
  return (
    <SafeAreaView>
      <SpaceList />
    </SafeAreaView>
  );
};

export default SpaceListDrawer;