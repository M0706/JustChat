import * as React from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";
import data from "../data";
import SpaceListItem from "../../../components/Work/SpaceListItem";

const Spaces = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={data}
        renderItem={({ item }) => <SpaceListItem space={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Spaces;

const styles = StyleSheet.create({
  container: {},
});
