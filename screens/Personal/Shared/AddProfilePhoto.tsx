import React, { useEffect, useState } from 'react';
import { View, Text, Platform, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const AddProfile = () => {
  const [img, setImg] = useState("");

  const getPermission = async() => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      };
  };

  const pickMedia = async () => {
    getPermission();
    const mediaFile = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!mediaFile.cancelled) {
      return mediaFile
    }

  };

  return (
    <View>
      <Button onPress={pickMedia} title="Choose Photo"/>
    </View>
  ) 
}

export default AddProfile;