import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function ImageViewer(props) {
    const navigation = useNavigation();
    const imageURI = props.route.params.uri;
    return(
      <View style={styles.container} >
            <Image source={{ uri: imageURI }} style={styles.image} />
            <View style={styles.send} >
                <MaterialIcons name="send" size={28} color="white" onPress={()=>{console.warn("Hi")}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        resizeMode: 'contain',
        flex: 0.7,
        justifyContent: 'center',
        marginTop: 150,
        marginLeft: 0.5,
        marginRight: 0.5,
        alignItems: 'center',
    },
    send:{
        backgroundColor: Colors.light.tint,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    imageView: {
    }

});
