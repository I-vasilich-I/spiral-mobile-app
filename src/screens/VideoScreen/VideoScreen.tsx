import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import { setSeekTime } from '@src/redux/store/player/playerSlice';

interface IProgres {
	currentTime: number;
}

interface IProps {
	navigation: any;
	route: any;
}

const VideoScreen = ({ route, navigation }: IProps): JSX.Element => {
	const dispatch = useDispatch();
	const { source, volume, time } = route.params;
	const videoPlayerRef = useRef();

	const handleProgress = ({ currentTime }: IProgres) => {
		dispatch(setSeekTime(currentTime));
	};

	const handleLoad = () => {
		if (videoPlayerRef.current) {
			videoPlayerRef.current.seekTo(time);
		}
	};

	useEffect(() => {
		StatusBar.setHidden(true);
		navigation.setOptions({ headerShown: false, tabBarStyle: { display: 'none' } });
	});

	return (
		<VideoPlayer
			toggleResizeModeOnFullscreen={false}
			ref={videoPlayerRef}
			source={{ uri: source }}
			style={styles.video}
			volume={volume}
			navigator={navigation}
			disableFullscreen
			onProgress={handleProgress}
			progressUpdateInterval={1000}
			onLoad={handleLoad}
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
