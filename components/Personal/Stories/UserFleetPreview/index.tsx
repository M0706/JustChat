import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { User } from "../../types";
import ProfilePicture from "../ProfilePicture";

export type UserFleetPreviewProps= {
    user: User;
}

const UserFleetPreview = (props: UserFleetPreviewProps) =>{
    const {user: {id, name, imageUri}} = props

    const navigation = useNavigation();

    const onPress = () =>{
        //console.warn("Hey you pressed to see my story")
        navigation.navigate('Fleet',{userId: id});
    }

    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style = {styles.container}>
            <View style={styles.image}>
            <ProfilePicture image= {imageUri} size={70} /> 
            <Text style={styles.username}> {name } </Text>
            </View>
        </View>

        </TouchableWithoutFeedback>
   
    )
}
export default UserFleetPreview;