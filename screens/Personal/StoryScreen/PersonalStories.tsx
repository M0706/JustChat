import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PersonalStories = () => {
  return (
    <View style={styles.screen}>
      <Text>This is PersonalStories Screen !!!</Text>
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

export default PersonalStories;
