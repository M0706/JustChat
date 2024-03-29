import moment from "moment";
import { Row } from "native-base";
import React from "react";

import { 
    Text, View, Image,TouchableOpacity
 } from "react-native";

import {User,FleetType} from '../../types'
import ProfilePicture from "../ProfilePicture";
import styles from './styles';

export type FleetViewProps={
    user: User;
    fleet: FleetType;
    goToNextFleet: Function;
    goToPrevFleet: Function;
}

const FleetView = (props: FleetViewProps) =>{
    const {user,fleet,goToNextFleet,goToPrevFleet} = props
    return( 
      <View style={styles.container}>

          {fleet.image && <Image source={{uri:fleet.image}} style={styles.image} /> }
          <Text style={styles.text}>{fleet.text}</Text>

          <View style = {styles.userHeaderContainer}>
            <ProfilePicture image={user.imageUri}/>
            <View style={styles.userNames}>
                <Text style={styles.name}>{user.name}</Text>
                <View style={{flexDirection: 'row'}}> 
                <Text style= {styles.username}> @{user.name} </Text>
                <Text style={styles.time}>
                    {moment(fleet.createdAt).fromNow() }
                    </Text> 
                </View>
             </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{flex: 1}} onPress={() => goToPrevFleet()} />
        <TouchableOpacity style={{flex: 1}} onPress={() => goToNextFleet()} />
      </View>

          </View>


      </View>
        

    )
}

export default FleetView;