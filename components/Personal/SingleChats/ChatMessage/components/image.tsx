import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function imageDisplay(props: { uri: any; }) {
  const {uri} = props;

	  
    return (
      <View>
         <View style={styles.imageView}>
            <Image source={{ uri: uri }} style={styles.image} />
          </View>
         
      </View>
    );
}

const styles = StyleSheet.create({

  image:{
    width: "100%", 
    height: 200,
    resizeMode: 'repeat',
  },
  imageView: {
  }
 
});
