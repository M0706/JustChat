import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  SectionList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { getUser } from "../../../graphqlCustom/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useRecoilState } from 'recoil';
import { AntDesign } from '@expo/vector-icons'; 
import ChannelListItem from "./ChannelListItem"
import { useNavigation } from '@react-navigation/native';

const ChannelList = ({ changeChannel,channelActions,spaceRoomID}) => {
  const currentUser = useSelector((state) => state.currentUserInfo);
  const { channels, setChannels } = channelActions;
  const navigation = useNavigation();

  const addChannelHandler = ()=>{
    const newChannel = channels[0];
    //console.warn(spaceRoomID)
    navigation.navigate("CreateChannel",{spaceRoomID,channels})
    //setChannels([...channels,newChannel]);
  }

   const renderChannelListItem = (channel) => {
    return <ChannelListItem changeChannel = {changeChannel} channel={channel} key={channel.id} />
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            style={styles.inputSearchBox}
            placeholderTextColor="grey"
            placeholder="Jump to"
          />
        </View>

        <SectionList
          style={styles.sectionList}
          /** sections data is currently empty. We will populate it with respective channels of group */
          sections={[
            {
              title: 'Unread',
              data: [],
            },
            {
              title: 'Channels',
              data: channels||[],
            },
            {
              title: 'Direct Messages',
              data: [],
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, section }) => {
          //  console.log("item===>",item);
            return renderChannelListItem(item);
          }}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.groupTitleContainer}>
              <Text style={styles.groupTitle}>{title}</Text>
              {title!=="Unread" && <AntDesign name="plus" size={20} color="black" onPress={addChannelHandler}/>}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    marginTop:30,
  },
  headerContainer: {
    padding: 10,
    marginRight: 10,
  },
  inputSearchBox: {
    backgroundColor: '#2e0a2f',
    padding: 10,
  },
  sectionList: {
    flexGrow: 1,
    flexShrink: 1,
  },
  groupTitleContainer: {
    padding: 10,
    borderBottomColor: '#995d9a',
    borderBottomWidth: 0.3,
    marginBottom: 7,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  groupTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ChannelList;