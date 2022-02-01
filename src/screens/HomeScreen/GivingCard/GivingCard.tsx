/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text, useTheme } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import VideoPlayer from '@components/VideoPlayer/VideoPlayer';
import IMAGES from '@src/assets/images';
import { ICard } from '@src/types';
import styles from './GivingCard.style';

const GivingCard = ({
	title,
	charityName,
	time,
	description,
	imageSource,
	videoId,
	currentId,
	currentVisibleIndex,
}: ICard): JSX.Element => {
	const { theme } = useTheme();
	const icon = <MaterialCommunityIcons name="share" size={16} color="white" />;
	const dot = <Entypo name="dot-single" size={16} color={theme.colors?.primary} />;
	const isVideoShown = currentId === currentVisibleIndex;

	return (
		<Card>
			<View style={styles.view}>
				<Card.Title>
					<View style={styles.titleContainer}>
						<Avatar source={IMAGES.AVATAR} containerStyle={styles.avatar} rounded size={40} />
						<View>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.subtitle}>
								{charityName}
								{dot}
								{time}
							</Text>
						</View>
					</View>
				</Card.Title>
			</View>
			<Card.Image source={imageSource}>
				{isVideoShown ? <VideoPlayer videoId={videoId} isPlaying={isVideoShown} /> : null}
			</Card.Image>
			<Text>{description}</Text>
			<Button
				title="Share to spread the word"
				containerStyle={styles.button}
				icon={icon}
				titleStyle={styles.buttonTitle}
			/>
		</Card>
	);
};

export default GivingCard;
