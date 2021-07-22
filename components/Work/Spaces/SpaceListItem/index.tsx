import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Space } from "../../../../../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type SpaceListItemProps = {
  space: Space;
};

const SpaceListItem = (props: SpaceListItemProps) => {
  const { space } = props;
  
  const spaceRoom = space.channel.spaceRoom;

  const navigation = useNavigation();

  //   const user = space[1];

  const onClick = () => {
    console.log("space---->",space.channel.spaceRoom.channels.items);
    navigation.navigate('Drawer', {
      channels :space.channel.spaceRoom.channels.items,
      spaceRoomID: space.channel.spaceRoom.id,
    })
  }

  return (
    <TouchableWithoutFeedback onPress={onClick} >
      <View style={styles.container}>
        <Image source={{ uri: spaceRoom.imageUri }} style={styles.avatar} />
        <View style={styles.rightContainer}>
          <View style={styles.midContainer}>
            <Text style={styles.username}>{spaceRoom.name}</Text>
          </View>
        </View>

        {/* <Text style={styles.time}>
          {moment(space.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SpaceListItem;