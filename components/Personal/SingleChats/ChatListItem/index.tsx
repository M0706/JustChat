import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChatRoom } from "../../../../types";
import styles from "./style";
import { Auth } from "aws-amplify";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";


export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const currentUser = useSelector((state) => state.currentUserInfo);

  //console.log("Mera hai last message-->",chatRoom.lastMessage.user.id===currentUser.userID);
 
  const [otherUser, setOtherUser] = useState(null);
  const [read,setRead] = useState(false);
  const navigation = useNavigation();
  
  useEffect(() => {
    const getOtherUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      //console.log(chatRoom);
      if (chatRoom.group === "True") {
        setOtherUser({
          name: chatRoom.name,
          imageUri: "",
        });
      }
      else {
        // console.log("chatRooms====>",chatRoom)
        const user = chatRoom.chatRoomUsers.items.find(
          (i) => i.user.id !== userInfo.attributes.sub
        ).user;
        setOtherUser(user);
      }
    };

    getOtherUser();
  }, []);
  
 
 

  const onClick = async () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: otherUser.name,
      group: props.group,
      lastSeen: otherUser.lastSeen,
    });
  };

  const displayDetails = () => {
    if(chatRoom.lastMessage){
      if(chatRoom.lastMessage.content!=""){
        if(props.group=="True"){
          return`${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`
        }
        else{
          return`${chatRoom.lastMessage.content}`
        }
      }else{
        return (
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="insert-photo" size={18} color="black" />
            <Text>  Media</Text>
          </View>
        )
      }
    }
  }

  if (!otherUser) return null;

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: otherUser.imageUri }} />

        <View style={styles.rightContainer}>
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{otherUser.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {displayDetails()}

            </Text>
           
          </View>

          <View style={styles.time}>
          <Text >
            {chatRoom.lastMessage &&
              moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
          {props.chatRoom.lastMessage?.user?.id!==currentUser.userID && props.chatRoom.lastMessage?.read===false?
              <Octicons name="primitive-dot" size={29} color="blue" style={styles.newMessage} />
               :<>{null}</>} 
          </View>
          
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;




// import React, { useEffect, useState } from "react";
// import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
// import moment from "moment";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { ChatRoom } from "../../../../types";
// import styles from "./style";
// import { Auth } from "aws-amplify";
// import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
// import { useSelector } from "react-redux";

// export type ChatListItemProps = {
//   chatRoom: ChatRoom;
// };

// const ChatListItem = (props: ChatListItemProps) => {
//   const { chatRoom } = props;
//   const [otherUser, setOtherUser] = useState(null);
//   const navigation = useNavigation();
//   let userInfo = "";


//   useEffect(() => {
//     const getOtherUser = async () => {
//       userInfo = await Auth.currentAuthenticatedUser();
//       console.log(chatRoom.lastMessage.user.id === userInfo.attributes.sub);
//       if (chatRoom.group === "True") {
//         setOtherUser({
//           name: chatRoom.name,
//           imageUri: "",
//         });
//       }
//       else {
//         const user = chatRoom.chatRoomUsers.items.find(
//           (i) => i.user.id !== userInfo.attributes.sub
//         ).user;
//         setOtherUser(user);
//       }
      
//     };

//     getOtherUser();
//   }, []);

//   const onClick = () => {
//     navigation.navigate("ChatRoom", {
//       id: chatRoom.id,
//       name: otherUser.name,
//       group: props.group,
//     });
//   };

//   if (!otherUser) return null;

//   return (
//     <TouchableWithoutFeedback onPress={onClick}>
//       <View style={styles.container}>
//         <Image style={styles.avatar} source={{ uri: otherUser.imageUri }} />

//         <View style={styles.rightContainer}>
//           <View style={styles.midContainer}>
//             <Text style={styles.userName}>{otherUser.name}</Text>
//             <Text numberOfLines={1} style={styles.lastMessage}>
//               {/* {props.id === chatRoom.lastMessage.user.id ?
//               `${chatRoom.lastMessage.content}`
//               : */}
//               <>{chatRoom.lastMessage.content != ""
//                 ?
//                 // chatRoom.lastMessage.user.id !== userInfo.attributes.sub ?
//                 `${chatRoom.lastMessage.user.name} : ${chatRoom.lastMessage.content}`
//                 // : ""})
//                 :
//                 (
//                   <View style={{ flexDirection: 'row' }}>
//                     <MaterialIcons name="insert-photo" size={18} color="black" />
//                     <Text>  Media</Text>
//                   </View>
//                 )
//               }</>
//               {/* // } */}
              
//             </Text>
//           </View>

//           <Text style={styles.time}>
//             {chatRoom.lastMessage &&
//               moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
//           </Text>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default ChatListItem;
