/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import YouTube from 'react-native-youtube';

interface IProps {
	videoId: string;
	isPlaying: boolean;
}
// TODO: CHANGE & HIDE KEY SOMEWHERE;
const YOUTUBE_API_KEY = 'AIzaSyAWfsfMeoCGSsQD1PQqMh_yBlZgMs-1bT8';

const VideoPlayer = ({ videoId, isPlaying = false }: IProps): JSX.Element => {
	const style: StyleProp<ViewStyle> = isPlaying
		? styles.backgroundVideo
		: { ...styles.backgroundVideo, position: 'absolute' };

	return (
		<YouTube
			style={style}
			apiKey={YOUTUBE_API_KEY}
			videoId={videoId} // The YouTube video ID
			play={isPlaying}
		/>
	);
};

export default VideoPlayer;

const styles = StyleSheet.create({
	backgroundVideo: {
		position: 'relative',
		height: '100%',
		alignSelf: 'stretch',
	},
});
