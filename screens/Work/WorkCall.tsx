import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfessionalCall = () => {
  return (
    <View style={styles.screen}>
      <Text>This is ProfessionalCall Screen !!!</Text>
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

export default ProfessionalCall;
