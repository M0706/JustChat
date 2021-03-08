import React, {useEffect, useState} from 'react';
import {View,Image} from "react-native";

export default function imagerep(props) {
    const key=props
    return(
        <View>
            <Image source={key} style={{ width: 100, height: 100 }}/>
        </View> 
    )
}