import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableWithoutFeedback,Text } from "react-native";
import { Video } from "expo-av";
import { AVPlaybackStatus } from "expo-av/build/AV";

const MediaView =(props: { media: string; message: object; extension: string; navigation: { goBack: () => void; }; })=>{

    const media = props.media;
    const message = props.message;
    const extension = props.extension;

    const returnToMessages = () => {
		props.navigation.goBack();
    };

    const onStatusChange = (video: AVPlaybackStatus) => {
		if (video.isLoaded) {
			if (video.didJustFinish) {
				returnToMessages();
			}
		}
	};
    
    const fileTypeExt = () =>{

        //console.log(extension)
        if(extension ===""){
            return (<Text>{message.content}</Text>)
           }
        else if(extension==="jpg" || extension==="png"){
          console.log(extension)
          return (<Image source={{uri: message.media}} style={{ width: 100, height: 100 }} />) 
        } 
        else if(extension ==="mp4"){
          return (<Video source={{uri: message.media}} style={{ width: 500, height: 500 }}
           onError={(e: any) => console.log(e)}
           rate={1.0}
           isLooping
           shouldPlay
           onPlaybackStatusUpdate={onStatusChange}
           resizeMode="cover"
         />)
        }
        else{
          console.warn("File type not supported!")
        }

    return(
        <TouchableWithoutFeedback onPress={returnToMessages}>
			{fileTypeExt()}
		</TouchableWithoutFeedback>
    )
   };
}

const styles = StyleSheet.create({
	media: {
		flex: 1
	}
})

export default MediaView; 