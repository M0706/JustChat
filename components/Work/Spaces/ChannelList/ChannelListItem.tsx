import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const ChannelListItem = ({channel,changeChannel}) => {

  let ChannelPrefix = null;
  let ChannelTitle = null;

//   let otherUserId;

    ChannelPrefix = <Text style={styles.channelTitlePrefix}>#</Text>;

    ChannelTitle = (
      <Text style={{color:"black"}}>
        {channel.name && channel.name.toLowerCase().replace(' ', '_','#')}
      </Text>
    );

  return (
    <TouchableOpacity
      key={channel.id}
    //   onPress={() => {
    //     setActiveChannelId(channel.id);
    //     changeChannel(channel.id);
    //   }}
      style={{
        ...styles.channelRow,
        // backgroundColor: activeChannelId === channel.id ? '#0676db' : undefined,
      }}>
      <View style={styles.channelTitleContainer}>
        {ChannelPrefix}
        {ChannelTitle}
      </View>
      {/* {countUnreadMentions > 0 && (
        <View style={styles.unreadMentionsContainer}>
          <Text style={styles.unreadMentionsText}>{countUnreadMentions}</Text>
        </View>
      )} */}
    </TouchableOpacity>
  )
}

const textStyles = {
    color: 'black',
    fontSize: 18,
  };

// export default ChannelListItem;
const styles = StyleSheet.create({
    onlineCircle: {
      width: 10,
      height: 10,
      borderRadius: 100 / 2,
      backgroundColor: 'green',
    },
    offlineCircle: {
      width: 10,
      height: 10,
      borderRadius: 100 / 2,
      borderColor: 'white',
      borderWidth: 0.3,
      backgroundColor: 'transparent',
    },
    channelRow: {
      padding: 3,
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 6,
      marginRight: 5,
    },
    channelTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    unreadChannelTitle: {
      marginLeft: 3,
      fontWeight: 'bold',
      padding: 5,
      ...textStyles,
    },
    channelTitle: {
      padding: 5,
      fontWeight: '300',
      paddingLeft: 10,
      ...textStyles,
    },
    channelTitlePrefix: {
      fontWeight: '300',
      ...textStyles,
    },
    unreadMentionsContainer: {
      backgroundColor: 'red',
      borderRadius: 20,
      alignSelf: 'center',
      marginRight: 20,
    },
    unreadMentionsText: {
      color: 'white',
      padding: 3,
      paddingRight: 6,
      paddingLeft: 6,
      fontSize: 15,
      fontWeight: '900',
      fontFamily: 'Lato-Regular',
    },
  });

  export default ChannelListItem;
