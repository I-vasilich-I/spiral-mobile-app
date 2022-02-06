/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-get-random-values';
import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { v4 as uuidv4 } from 'uuid';
import useAppSelector from '@src/redux/hooks/useAppSelector';
import { getGreeting } from '@src/helpers';
import IMAGES from '@src/assets/images';
import { ICard } from '@src/types';
import AccountCard from './AccountCard/AccountCard';
import GivingCard from './GivingCard/GivingCard';
import styles from './HomeScreen.style';

interface IProps {
	item: ICard;
	index: number;
}

interface IViewable {
	viewableItems: any;
}

const HomeScreen = (): JSX.Element => {
	const { fullName } = useAppSelector((state) => state.USER);
	const [currentVisibleIndex, setCurrentVisibleIndex] = useState<number>(-1);

	const cards = [
		{
			id: uuidv4(),
			title: 'Your Giving Impact',
			charityName: 'St. Jude',
			time: '4 hrs ago',
			description: `${fullName}, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!`,
			imageSource: IMAGES.RECTANGLE2,
			videoSource: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
		},
		{
			id: uuidv4(),
			title: 'Your Giving Impact',
			charityName: 'St. Jude',
			time: '4 hrs ago',
			description: `${fullName}, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!`,
			imageSource: IMAGES.RECTANGLE,
			videoSource: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
		},
		{
			id: uuidv4(),
			title: 'Your Giving Impact',
			charityName: 'St. Jude',
			time: '4 hrs ago',
			description: `${fullName}, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!`,
			imageSource: IMAGES.RECTANGLE2,
			videoSource: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
		},
		{
			id: uuidv4(),
			title: 'Your Giving Impact',
			charityName: 'St. Jude',
			time: '4 hrs ago',
			description: `${fullName}, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!`,
			imageSource: IMAGES.RECTANGLE,
			videoSource: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
		},
	];

	const renderItem = ({ item, index }: IProps) => (
		<GivingCard {...item} currentId={index} currentVisibleIndex={currentVisibleIndex} />
	);

	const viewabilityConfig = {
		minimumViewTime: 300,
		itemVisiblePercentThreshold: 100,
	};

	const onViewableItemsChanged = ({ viewableItems }: IViewable) => {
		if (viewableItems?.length > 0) {
			setCurrentVisibleIndex(viewableItems[0].index);
			return;
		}
		setCurrentVisibleIndex(-1);
	};

	const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>{getGreeting(fullName)}</Text>
			<FlatList
				style={styles.flatList}
				viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
				data={cards}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={AccountCard}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
