import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function imageDisplay(props: { uri: any; }) {
  const { uri } = props;
  const { forwardScreenProps } = props;
 
  const navigation = useNavigation();

  const imageView = () => {
    navigation.navigate("ImageViewer", {uri: uri, forwardScreenProps: forwardScreenProps});
  }
	  
    return (
      <View>
         <TouchableOpacity onPress={imageView}>

        <View style={styles.imageView} >
            <Image source={{ uri: uri }} style={styles.image} />
          </View>
          </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({

  image:{
    width: "100%", 
    height: 200,
    resizeMode: 'contain',
  },
  imageView: {
  }
 
});
