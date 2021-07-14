import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';


const AddMembers = (props) => {
  console.log(props.route.params)
  return (
    <View style={styles.container}>
      <Text>AddMembers</Text>
    </View>
  );
};

export default AddMembers;

const styles = StyleSheet.create({
  container: {}
});
