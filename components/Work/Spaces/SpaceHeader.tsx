import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';


export const SpaceHeader = ({navigation, channel, client}) => {
  let channelTitle = '#channel_name';
  const dimension = useWindowDimensions();

  // For normal group channel/conversation, its channel name as display title.
  if (channel && channel.data && channel.data.name) {
    channelTitle = '# ' + channel.data.name.toLowerCase().replace(' ', '_');
  }

  const memberIds =
    channel && channel.state ? Object.keys(channel.state.members) : [];

  // Check if its oneOneOneConversation.
  if (channel && memberIds.length === 2) {
    // If yes, then use name of other user in conversation as channel display title.
    const otherUserId =
      memberIds[0] === client.user.id ? memberIds[1] : memberIds[0];

    channelTitle = channel.state.members[otherUserId].user.name;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.channelTitle}>Channel</Text>
      </View>
      {/* Message search and menu popup are not functional here. We will cover them in some future tutorial. */}
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.searchIconContainer}>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIconContainer}>
        <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SpaceHeader;

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  leftContent: {
    flexDirection: 'row',
  },
  channelTitle: {
    color: 'black',
    marginLeft: 60,
    fontWeight: '900',
    fontSize: 17,
    marginTop:15
    
  },
  rightContent: {
    flexDirection: 'row',
    marginRight: 10,
  },
  searchIconContainer: {
    marginRight: 15,
    alignSelf: 'center',
    marginTop: 15
  },
  searchIcon: {
    height: 18,
    width: 18,
  },
  menuIcon: {
    height: 18,
    width: 18,
  },
  menuIconContainer: {
    alignSelf: 'center',
    marginTop: 15
  },
});




// import React, { useState, useEffect } from "react";
// import {
//   Entypo,
//   FontAwesome5,
//   MaterialCommunityIcons,
//   Fontisto,
//   MaterialIcons,
//   AntDesign,
// } from "@expo/vector-icons";
// import { View, Text,Button, KeyboardAvoidingView, TextInput, Platform, Alert, Image, StyleSheet } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";
// import moment from "moment";

// const SpaceRoomHeader = (props) => {
//   const navigation = useNavigation();
//   let lastSeen;

  
//   const backButtonHandler = () => {
//       return (
//         <AntDesign name="back" size={24} color="black" style={styles.backButton} onPress={()=> navigation.navigate("GroupChatScreen")}/>
//        )
//   }


//   return (
//     <View style={styles.container}>
//       {backButtonHandler()}
//       <View style={styles.rightContainer}> 
//         <View style={styles.midContainer}>
//           <Text style={styles.headerText} >Space1</Text>
//           <Text style={styles.lastSeen}>{lastSeen}</Text>
//         </View>
//       </View>
     
//       <View
//           style={styles.right}
//         >
//         <FontAwesome5 name="video" size={22} color={"black"}/>
//           <MaterialIcons
//             name="call"
//             size={22}
//             color={"black"}
//           />
//           <MaterialCommunityIcons
//             name="dots-vertical"
//             size={22}
//             color={"black"}
//           />
//         </View>

//       </View>

//   )
  
// }

// export default SpaceRoomHeader;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//     padding:20,
//     paddingBottom:10,
//   },
//   midContainer:{
//     width:'65%',
//   },
//   rightContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop : 6,
//   },
//   headerText: {
//     fontWeight: "bold",
//     fontSize: 20,
//     color: '#333',
//   },
//   right: {
//     width: 90,
//     flexDirection: "row",
//     alignItems: 'stretch',
//     justifyContent: 'space-between',
//     paddingTop: 15,
//   },
//   backButton: {
//     paddingTop: 15,
//   },
//   lastSeen: {
//     fontSize: 16,
//     color: 'grey',
//   }
// })
