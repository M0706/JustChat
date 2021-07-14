// // import React, { useState, useEffect } from "react";

// // import {
// //   SafeAreaView,
// //   Text,
// //   View,
// //   StyleSheet,
// //   TouchableOpacity,
// // } from "react-native";
// // import * as FaceDetector from "expo-face-detector";

// // // import { Camera as CameraView } from "expo-camera";
// // import { Ionicons as Icon } from "@expo/vector-icons";

// // import CameraButton from "../../components/CameraScreen/CameraButton";
// // import DoubleTapHandler from "../../components/CameraScreen/DoubleTapHandler";


// // const Camera = (props) => {
// //   // const [hasPermission, setHasPermission] = useState(null);

// //   // const [type, setType] = useState(CameraView.Constants.Type.front);
// //   // const [flashMode, setFlashMode] = useState(
// //   // 	CameraView.Constants.FlashMode.auto
// //   // );
// //   // //const [autoFocusMode, setAutoFocusMode]=useState(CameraView.Constants.AutoFocus)
// //   // var camera: CameraView;

// //   // useEffect(() => {
// //   // 	(async () => {
// //   // 		const { status } = await CameraView.requestPermissionsAsync();
// //   //         setHasPermission(status === "granted");
// //   // 	})();
// //   // }, []);

// //   // if (hasPermission === null) {
// //   // 	return <View />;
// //   // }
// //   // if (hasPermission === false) {
// //   // 	return <Text>No access to camera</Text>;
// //   // }

// //   // const rotateCamera = () => {
// //   // 	setType(
// //   // 		type === CameraView.Constants.Type.back
// //   // 			? CameraView.Constants.Type.front
// //   // 			: CameraView.Constants.Type.back
// //   // 	);
// //   // };

// //   // const toggleFlash = () => {
// //   // 	setFlashMode(
// //   // 		flashMode === CameraView.Constants.FlashMode.off
// //   // 			? CameraView.Constants.FlashMode.torch
// //   // 			: CameraView.Constants.FlashMode.off
// //   // 	);
// //   // };

// //   // const startRecording = async () => {
// //   // 	try {
// //   // 		const video = await camera.recordAsync();
// //   // 	} catch (error) {
// //   // 		console.log(error);
// //   // 	}
// //   // };

// //   // const stopRecording = () => {
// //   // 	camera.stopRecording();
// //   // };

// //   // const takePicture = async () => {
// //   //     const picture = await camera.takePictureAsync();
// //   // 	//console.log(picture);
// //   // 	navigation.navigate('ContentDisplay',{photo:picture})

// //   // };

// //   // const CameraControls = () => {
// //   // 	return (
// //   // 		<SafeAreaView style={styles.CameraControlsContainer}>
// //   // 			<TouchableOpacity onPress={rotateCamera}>
// //   // 				<Icon
// //   // 					style={{ padding: 5 }}
// //   // 					name="ios-reverse-camera"
// //   // 					color="white"
// //   // 					size={33}
// //   // 				/>
// //   // 			</TouchableOpacity>
// //   // 			<TouchableOpacity onPress={toggleFlash}>
// //   // 				<Icon
// //   // 					style={{ padding: 5 }}
// //   // 					name={
// //   // 						flashMode === CameraView.Constants.FlashMode.off
// //   // 							? "ios-flash"
// //   // 							: "ios-flash-off"
// //   // 					}
// //   // 					color="white"
// //   // 					size={33}
// //   // 				/>
// //   // 			</TouchableOpacity>
// //   // 		</SafeAreaView>
// //   // 	);
// //   // };

// //   // const CameraFooter = () => {
// //   // 	return (
// //   // 		<SafeAreaView style={styles.CameraFooterContainer}>
// //   // 			<CameraButton
// //   // 				onPicture={takePicture}
// //   // 				onStartRecording={startRecording}
// //   // 				onStopRecording={stopRecording}
// //   // 			/>
// //   // 		</SafeAreaView>
// //   // 	);
// //   // };

// //   return (
// //     // <DoubleTapHandler useDelta={300} onDoubleTap={rotateCamera}>
// //     // 	<CameraView
// //     // 		ref={ref => {
// //     // 			camera = ref;
// //     // 		}}
// //     // 		style={{ flex: 1 }}
// //     // 		type={type}
// //     //         flashMode={flashMode}
// //     //         autoFocus={CameraView.Constants.AutoFocus.on}
// //     //         whiteBalance={CameraView.Constants.WhiteBalance.auto}
// //     //         >
// //     // 		<View
// //     // 			style={{
// //     // 				...styles.Overlay,
// //     // 				backgroundColor:
// //     // 					type === CameraView.Constants.Type.front &&
// //     // 					flashMode === CameraView.Constants.FlashMode.torch
// //     // 						? "'rgba(255, 255, 255, 0.7)'"
// //     // 						: "transparent"
// //     // 			}}
// //     // 		>
// //     // 			<CameraControls />
// //     // 			<CameraFooter />
// //     // 		</View>
// //     // 	</CameraView>
// //     // </DoubleTapHandler>
// //     <Text>Camera</Text>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   Overlay: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   CameraControlsContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     backgroundColor: "transparent",
// //   },
// //   CameraFooterContainer: {
// //     flex: 1,
// //     justifyContent: "flex-end",
// //     backgroundColor: "transparent",
// //   },
// // });

// // export default Camera;

// ////////////////

// // import React, {useRef, useState} from 'react';
// // import {View, Text, TouchableOpacity} from 'react-native';
// // import {RNCamera} from 'react-native-camera';

// // import styles from './styles';
// // import {useNavigation} from '@react-navigation/native';

// // const Camera = () => {
// //   const [isRecording, setIsRecording] = useState(false);
// //   const camera = useRef();

// //   const navigation = useNavigation();

// //   const onRecord = async () => {
// //     if (isRecording) {
// //       camera.current.stopRecording();
// //     } else {
// //       const data = await camera.current.recordAsync();
// //      // navigation.navigate('CreatePost', {videoUri: data.uri});
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <RNCamera
// //         ref={camera}
// //         onRecordingStart={() => setIsRecording(true)}
// //         onRecordingEnd={() => setIsRecording(false)}
// //         style={styles.preview}
// //       />
// //       <TouchableOpacity
// //         onPress={onRecord}
// //         style={
// //           isRecording ? styles.buttonStop : styles.buttonRecord
// //         }
// //       />
// //     </View>
// //   );
// // };

// // export default Camera;


// 'use strict';
// import React, { useRef, useState } from 'react';
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // import { RNCamera } from 'react-native-camera';
// // import styles from './styles';
// import { useNavigation,useRoute } from "@react-navigation/native";


// const Camera = () => {
//   // let cameraRef = useRef(null);
//   // const navigation = useNavigation();
//   // const route = useRoute();
//   // //console.log("Route ====>",route.params)

//   // const [camType,setcamType] = useState(RNCamera.Constants.Type.back);
//   // const [flashMode,setFlashMode]= useState(RNCamera.Constants.FlashMode.off)
//   // const [isRecording, setIsRecording] = useState(false);
  
//   // const takePicture = async (params: Readonly<object | undefined>) => {
//   //   if (cameraRef) {
//   //     const options = { quality: 0.5, base64: true };
//   //     const data = await cameraRef.current.takePictureAsync(options);
//   //     console.log(data.uri);
//   //     navigation.navigate('ContentDisplay',{photo:data, Screen:params})
//   //   }
//   // };


//   // const onRecord = async () => {
//   //   if (isRecording) {
//   //     cameraRef.current.stopRecording();
//   //   } else {
//   //     const data = await cameraRef.current.recordAsync();
//   //     console.log(data)
//   //   }
//   // };


//   // const rotateCamera = () => {
//   //     	setcamType(
//   //     		camType === RNCamera.Constants.Type.back
//   //     			? RNCamera.Constants.Type.front
//   //     			: RNCamera.Constants.Type.back
//   //     	);
//   //     };

//   // const toggleFlash = () => {
//   // 	setFlashMode(
//   // 		flashMode === RNCamera.Constants.FlashMode.off
//   // 			? RNCamera.Constants.FlashMode.torch
//   // 			: RNCamera.Constants.FlashMode.off
//   // 	);
//   // };
    


//     return (
//       <View /*style={styles.container}*/>
//         {/* <RNCamera
//           ref={cameraRef}
//           onRecordingStart={() => setIsRecording(true)}
//           onRecordingEnd={() => setIsRecording(false)}
//           style={styles.preview}
//           type={camType}
//           flashMode={flashMode}
//           autoFocus={RNCamera.Constants.AutoFocus.on}
//           useNativeZoom={true}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//         >
//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//           <TouchableOpacity onPress={()=>toggleFlash()} style={styles.capture}>
//             <Text style={{ fontSize: 7 }}> FLASH </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>onRecord()} style={
//             isRecording ? styles.buttonStop : styles.buttonRecord}>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>takePicture(route.params)} style={styles.capture}>
//             <Text style={{ fontSize: 7 }}> SNAP </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>rotateCamera()} 
//           style={styles.capture}>
//             <Text style={{ fontSize: 7 }}> Type </Text>
//           </TouchableOpacity>
//         </View>
//         </RNCamera> */}
//         <Text> This is Camera Screen</Text>
//       </View>
//     );
//   }


// export default Camera;

import React, { useState, useEffect } from "react";

import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from "react-native";

// import { Camera as CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/Ionicons";

import CameraButton from "../../components/Personal/shared/CameraButton";
import DoubleTapHandler from "./components/DoubleTapHandler";
import { useNavigation } from "@react-navigation/native";

const Camera = props => {
  const navigation = useNavigation();
	const [hasPermission, setHasPermission] = useState(null);

	const [type, setType] = useState(CameraView.Constants.Type.front);
	const [flashMode, setFlashMode] = useState(
		CameraView.Constants.FlashMode.auto
    );
    const [autoFocusMode, setAutoFocusMode]=useState(CameraView.Constants.AutoFocus)

	var camera: CameraView;

	useEffect(() => {
		(async () => {
			const { status } = await CameraView.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const rotateCamera = () => {
		setType(
			type === CameraView.Constants.Type.back
				? CameraView.Constants.Type.front
				: CameraView.Constants.Type.back
		);
	};

	const toggleFlash = () => {
		setFlashMode(
			flashMode === CameraView.Constants.FlashMode.off
				? CameraView.Constants.FlashMode.torch
				: CameraView.Constants.FlashMode.off
		);
    };

    const startRecording = async () => {
		try {
			const video = await camera.recordAsync();
		} catch (error) {
			console.log(error);
		}
	};

	const stopRecording = () => {
		camera.stopRecording();
	};

	const takePicture = async () => {
    const picture = await camera.takePictureAsync();
    //console.log(picture.uri);
    navigation.navigate("ClickImage",{uri: picture.uri})
    
	};

    const CameraControls = () => {
		return (
			<SafeAreaView style={styles.CameraControlsContainer}>
				<TouchableOpacity onPress={rotateCamera}>
					<Icon
						style={{ padding: 5 }}
						name="ios-reverse-camera"
						color="white"
						size={33}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={toggleFlash}>
					<Icon
						style={{ padding: 5 }}
						name={
							flashMode === CameraView.Constants.FlashMode.off
								? "ios-flash"
								: "ios-flash-off"
						}
						color="white"
						size={33}
					/>
				</TouchableOpacity>
			</SafeAreaView>
		);
    };

    const CameraFooter = () => {
		return (
			<SafeAreaView style={styles.CameraFooterContainer}>
				<CameraButton
					onPicture={takePicture}
					onStartRecording={startRecording}
					onStopRecording={stopRecording}
				/>
			</SafeAreaView>
		);
    };

    return (
		<DoubleTapHandler useDelta={300} onDoubleTap={rotateCamera}>
			{/* <CameraView
				ref={ref => {
					camera = ref;
				}}
				style={{ flex: 1 }}
				type={type}
                flashMode={flashMode}
			>
				<View
					style={{
						...styles.Overlay,
						backgroundColor:
							type === CameraView.Constants.Type.front &&
							flashMode === CameraView.Constants.FlashMode.torch
								? "'rgba(255, 255, 255, 0.7)'"
								: "transparent"
					}}
				>
					<CameraControls />
					<CameraFooter />
				</View>
			</CameraView> */}
		</DoubleTapHandler>
	);
};

const styles = StyleSheet.create({
	Overlay: {
		flex: 1,
		padding: 20
	},
	CameraControlsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "transparent"
	},
	CameraFooterContainer: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "transparent"
	}
});



export default Camera;
