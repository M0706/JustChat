import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PersonalCall = () => {
  return (
    <View style={styles.screen}>
      <Text>This is PersonalCall Screen !!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PersonalCall;
