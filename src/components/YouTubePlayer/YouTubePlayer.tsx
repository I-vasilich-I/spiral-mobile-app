import React, { useCallback, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

interface IProps {
	videoId: string;
}

const YouTubePlayer = ({ videoId }: IProps): JSX.Element => {
	const [playing, setPlaying] = useState(true);

	const onStateChange = useCallback((state) => {
		if (state === 'ended') {
			setPlaying(false);
		}
	}, []);

	const initialPlayerParams = {
		modestbranding: true,
	};

	return (
		<YoutubePlayer
			height={300}
			play={playing}
			videoId={videoId}
			onChangeState={onStateChange}
			initialPlayerParams={initialPlayerParams}
			mute
		/>
	);
};

export default YouTubePlayer;
