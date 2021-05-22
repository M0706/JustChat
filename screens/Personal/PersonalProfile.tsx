import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { ActivityIndicator } from "react-native-paper";

export default function PersonalProfile() {
  const navigation = useNavigation();
  const [signingOut, setSigningOut] = useState(false);

  const logout = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      if (currentUser) {
        setSigningOut(true);
        try {
          await Auth.signOut();
          navigation.navigate("LoginScreen");
        } catch (err) {
          Alert.alert("Error!", "An error ocurred while signing out");
        }
        setSigningOut(false);
      } else {
        navigation.navigate("LoginScreen");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.screen}>
      {signingOut ? (
        <ActivityIndicator />
      ) : (
        <Text onPress={logout}>This is PersonalProfile Screen !!!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
