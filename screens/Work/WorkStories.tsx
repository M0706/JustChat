import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfessionalStories = () => {
  return (
    <View style={styles.screen}>
      <Text>This is ProfessionalStories Screen !!!</Text>
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

export default ProfessionalStories;
