import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PersonalChats = () => {
  return (
    <View style={styles.screen}>
      <Text>This is PersonalChats Screen !!!</Text>
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

export default PersonalChats;
