import React, { useState, useEffect } from "react";

import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from "react-native";

import { Camera as CameraView } from "expo-camera";
import { Ionicons as Icon } from "@expo/vector-icons";

import CameraButton from "../../components/CameraScreen/CameraButton";
import DoubleTapHandler from "../../components/CameraScreen/DoubleTapHandler";

const Camera = props => {
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
			<CameraView
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
			</CameraView>
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






