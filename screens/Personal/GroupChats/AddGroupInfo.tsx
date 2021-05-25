import React from "react";
import { TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupInfo = (props) => {
  const navigation = useNavigation();
  const groupUsers = props.route.params.GroupUsers;
  // const users = props.route

  return <Text>Hi, this is groupInfo</Text>;
};

export default GroupInfo;
