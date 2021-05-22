import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfessionalChats = () => {
  return (
    <View style={styles.screen}>
      <Text>This is ProfessionalChats Screen !!!</Text>
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

export default ProfessionalChats;
