//This is Group ChatScreen

import * as React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import NewGroupsButton from "../../../components/Personal/GroupChats/NewGroupsButton";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <Text>Ongoing Group Chats</Text>
      <NewGroupsButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
