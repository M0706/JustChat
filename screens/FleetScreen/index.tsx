import React from "react";

import { 
    Text
 } from "react-native";

import userWithFleets from "../../data/userWithFleets";
import FleetView from "../../components/FleetView";

const FleetScreen = () =>{
    return( 
       <FleetView user={userWithFleets[0]} fleet={userWithFleets[0].fleets.items[0]}/>
    )
}

export default FleetScreen;