/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import Video from 'react-native-video';
import Octicons from 'react-native-vector-icons/Octicons';
import { NavigationParamList } from '@src/types';
import styles from './VideoWithControls.style';

interface IProps {
	source: string;
	isPaused: boolean;
	poster: ImageSourcePropType;
}

interface IProgress {
	currentTime: number;
}

type VideoScreenProp = StackNavigationProp<NavigationParamList, 'Video'>;

const VideoWithControls = ({ source, isPaused, poster }: IProps): JSX.Element => {
	const { theme } = useTheme();
	const route = useRoute();
	const navigation = useNavigation<VideoScreenProp>();
	const [muted, setMuted] = useState(true);
	const [videoReady, setVideoReady] = useState(false);
	const videoPlayerRef = useRef<Video | null>();
	const [time, setTime] = useState(0);

	const muteIcon = muted ? (
		<Octicons name="mute" size={30} color={theme.colors?.primary} />
	) : (
		<Octicons name="unmute" size={30} color={theme.colors?.primary} />
	);

	const handleMute = () => {
		setMuted((prev) => !prev);
	};

	const handleVideoPress = () => {
		const fullScreenParams = {
			source,
			volume: muted ? 0.0 : 1.0,
			time,
		};

		navigation.navigate('Video', fullScreenParams);
	};

	const handleProgress = ({ currentTime }: IProgress) => {
		setTime(currentTime);
	};

	const handleReady = () => {
		setVideoReady(true);
		if (videoPlayerRef.current && route.params?.time) {
			videoPlayerRef.current.seek(route.params.time);
		}
	};

	return (
		<View>
			<Pressable onPress={handleVideoPress}>
				<Video
					source={{ uri: source }}
					ref={(ref) => (videoPlayerRef.current = ref)}
					style={styles.image}
					paused={isPaused}
					poster={Image.resolveAssetSource(poster).uri}
					muted={muted}
					resizeMode="contain"
					onReadyForDisplay={handleReady}
					onProgress={handleProgress}
				/>
			</Pressable>
			{videoReady ? (
				<Pressable style={styles.mute} onPress={handleMute}>
					{muteIcon}
				</Pressable>
			) : null}
		</View>
	);
};

export default VideoWithControls;
