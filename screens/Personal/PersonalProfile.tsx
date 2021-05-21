import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PersonalProfile = () => {
  return (
    <View style={styles.screen}>
      <Text>This is PersonalProfile Screen !!!</Text>
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

export default PersonalProfile;
