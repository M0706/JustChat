import React from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

//import ParallaxView from "react-native-parallax-view";

const Profile = (props) => (
  // <ParallaxView
  //   backgroundSource={{ uri: props.image }}
  //   windowHeight={400}
  //   header={
  //     <View>
  //       <TouchableOpacity
  //         style={styles.header}
  //         onPress={() => props.navigator.pop()}
  //       >
  //         <Icon
  //           name="arrow-back"
  //           color="#fff"
  //           size={23}
  //           style={{ paddingLeft: 10 }}
  //         />
  //       </TouchableOpacity>
  //       <Text style={styles.title}>{props.name}</Text>
  //     </View>
  //   }
  //   scrollableViewStyle={{ backgroundColor: "#ece5dd" }}
  // >
  <>
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.text}>Mute</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Custom notifications</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.green}>Status and Phone</Text>
        <Text style={styles.text}>{props.status}</Text>
        <Text style={styles.subText}>January 5</Text>
      </View>
      <View style={styles.number}>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={styles.text}>+00 9874563212</Text>
          <Text style={styles.subText}>Mobile</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="chat" color="#075e54" size={23} style={{ padding: 5 }} />
          <Icon name="call" color="#075e54" size={23} style={{ padding: 5 }} />
          <Icon
            name="videocam"
            color="#075e54"
            size={23}
            style={{ padding: 5 }}
          />
        </View>
      </View>
    </View>
    {/* </ParallaxView> */}
  </>
);

export default Profile;
