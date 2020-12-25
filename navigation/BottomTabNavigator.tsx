import * as React from 'react';



import { View,Text, StyleSheet } from 'react-native';




export default function BottomTabNavigator() {

  return (
  <View>
      <Text style={styles.Basic}> Under Development</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    Basic:{
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 400,
        height:700,
        textAlignVertical: "center"

        
    }
})
