import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import ImageHeader from '../../../components/Personal/shared/ImageHeader';
import ImageZoom from 'react-native-image-pan-zoom';



const ImageViewer = (props) => {
  const imageURI = props.route.params.uri;
  const forwardScreenProps = props.route.params.forwardScreenProps

  return (
    <View style={styles.container} >
      <ImageHeader forwardScreenProps={forwardScreenProps}/>
          <Image source={{ uri: imageURI }}  style={styles.image} />


      </View>
    );
}

export default ImageViewer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    resizeMode: 'contain',
    flex: 0.7,
    justifyContent: 'center',
    marginTop: 150,
    marginLeft: 0.5,
    marginRight: 0.5,
    alignItems: 'center',
  },
  imageView: {
  }
 
});