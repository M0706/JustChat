import React,{useState,useEffect} from "react";
import NewSpaceButton from "../../../components/Work/Spaces/NewSpaceButton";
import { Text, View, StyleSheet, FlatList } from "react-native";
import data from "../data";
import SpaceListItem from "../../../components/Work/Spaces/SpaceListItem";
import { listSpaceRooms } from "../../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphqlCustom/queries";
import { useSelector } from "react-redux";
import Space from "../../../types"
import { onCreateChannel, onUpdateSpaceRoom } from "../../../src/graphql/subscriptions";

const Spaces = () => {
  const currentUser = useSelector((state) => state.currentUserInfo);
  const [spaceRooms, setSpaceRooms] = useState([]);

  const fetchSpaceRooms = async () => {
    const currentUserID = currentUser.userID;
    let userData = await API.graphql(
      graphqlOperation(getUser, { id: currentUserID })
    );
    // console.log("channels--->", userData.data.getUser);
    const channelData = userData.data.getUser.channelUser.items;
    let tempSpaceRoomArr: any = [];

    channelData.map((channel) => {
      tempSpaceRoomArr.push(channel);
    })
    
    setSpaceRooms(tempSpaceRoomArr)
  }

  useEffect(() => {
    let unmounted = false;
   // console.log(currentUser.isAuth);
    if (!unmounted) {
      fetchSpaceRooms();
    }
    return () => { unmounted = true };
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateChannel)
    ).subscribe({
      next: (data) => {
        fetchSpaceRooms();
      },
    });
    return () => subscription.unsubscribe();
  }, [spaceRooms]);



  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ width: "100%" }}
          data={spaceRooms}
          renderItem={({ item }) =>{
            return <SpaceListItem space={item} />
          }}
          keyExtractor={(item: Space) => item.id}
        />
      </View>
      <NewSpaceButton />
    </View>
  );
};

export default Spaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
