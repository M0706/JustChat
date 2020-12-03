
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import UserFleetsList from "../components/UserFleetsList";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <UserFleetsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});