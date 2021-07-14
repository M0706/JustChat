import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { Video } from 'expo-av';
import React, { useState } from 'react';
import { View,Text, Dimensions, StyleSheet } from 'react-native';

export default function VideoPlay(props: { uri: any; }) {
  const {uri} = props;
  const [mute, setMute] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  const handlePlayAndPause = () => {
    setShouldPlay(!shouldPlay);
  }

  
  const handleVolume = () => {
    setMute(!mute);
  }
	  
    return (
      <View>
          
          {/* <Video
            source={{ uri: uri }}
            shouldPlay={shouldPlay}
            resizeMode="contain"
          style={styles.video}
          isMuted={mute}
          isLooping

          />
          <View style={styles.controlBar}>
            <MaterialIcons 
              name={mute ? "volume-mute" : "volume-up"}
              size={45} 
              color="white" 
              onPress={handleVolume} 
            />
            <MaterialIcons 
              name={shouldPlay ? "pause" : "play-arrow"} 
              size={45} 
              color="white" 
              onPress={handlePlayAndPause} 
            />
          </View> */}
        </View>
    );
}

const styles = StyleSheet.create({

  video:{
    width: "100%", 
    height: 200,
    resizeMode: 'repeat',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});
