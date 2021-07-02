import * as React from "react";
import NewSpaceButton from "../../../components/Work/Spaces/NewSpaceButton";
import { Text, View, StyleSheet, FlatList } from "react-native";
import data from "../data";
import SpaceListItem from "../../../components/Work/Spaces/SpaceListItem";

const Spaces = () => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ width: "100%" }}
          data={data}
          renderItem={({ item }) => <SpaceListItem space={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <NewSpaceButton />
    </View>
  );
};

export default Spaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
