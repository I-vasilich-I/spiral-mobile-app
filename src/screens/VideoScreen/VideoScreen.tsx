import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

interface IProgres {
	currentTime: number;
}

interface IProps {
	navigation: any;
	route: any;
}

const VideoScreen = ({ route, navigation }: IProps): JSX.Element => {
	const { source, volume } = route.params;
	const videoPlayerRef = useRef();
	const [timePassed, setTimePassed] = useState(0);

	const handleBack = () => {
		navigation.navigate({
			name: 'Home',
			params: { time: timePassed },
			merge: true,
		});
		// navigation.navigate('Home', { time: 50 });
		// navigation.navigate('Home', { time: timePassed });
		// navigation.setParams('Home', { time: timePassed });
		// navigation.goBack();
	};

	const handleProgress = ({ currentTime }: IProgres) => {
		const roundedTime = Math.round(currentTime);
		setTimePassed(roundedTime);
	};

	useEffect(() => {
		StatusBar.setHidden(true);
		navigation.setOptions({ headerShown: false, tabBarStyle: { display: 'none' } });
	});

	return (
		<VideoPlayer
			toggleResizeModeOnFullscreen={false}
			ref={(ref: any) => (videoPlayerRef.current = ref)}
			source={{ uri: source }}
			style={styles.video}
			volume={volume}
			navigator={navigation}
			disableFullscreen
			onBack={handleBack}
			onProgress={handleProgress}
			progressUpdateInterval={2000}
		/>
	);
};

export default VideoScreen;

const styles = StyleSheet.create({
	video: {
		position: 'absolute',
		top: 0,
		left: 0,
		minHeight: Dimensions.get('window').height,
		minWidth: Dimensions.get('window').width,
		backgroundColor: 'black',
	},
});
