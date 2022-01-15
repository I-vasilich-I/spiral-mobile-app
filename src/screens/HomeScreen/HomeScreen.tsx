/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-get-random-values';
import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { v4 as uuidv4 } from 'uuid';
import { getGreeting } from '@src/helpers';
import IMAGES from '@src/assets/images';
import { ICard } from '@src/types';
import AccountCard from './AccountCard/AccountCard';
import GivingCard from './GivingCard/GivingCard';
import styles from './HomeScreen.style';

interface IProps {
	item: ICard;
}

const HomeScreen = (): JSX.Element => {
	const cards = [
		{
			id: uuidv4(),
			title: 'Your Giving Impact',
			charityName: 'St. Jude',
			time: '4 hrs ago',
			description:
				'Denny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
			imageSource: IMAGES.RECTANGLE2,
		},
		{
			id: uuidv4(),
			title: 'Your Giving Impact',
			charityName: 'St. Jude',
			time: '4 hrs ago',
			description:
				'Denny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
			imageSource: IMAGES.RECTANGLE,
		},
	];

	const renderItem = ({ item }: IProps) => <GivingCard {...item} />;

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.greeting}>{getGreeting('Mike')}</Text>
			<FlatList
				data={cards}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={AccountCard}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
