/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-get-random-values';
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { v4 as uuidv4 } from 'uuid';
import { getGreeting } from '@src/helpers';
import AccountCard from './AccountCard/AccountCard';
import styles from './HomeScreen.style';
import GivingCard from './GivingCard/GivingCard';
import IMAGES from '@src/assets/images';
import { ICard } from '@src/types';

interface IProps {
	item: ICard;
}
//TODO: fix ScrollView/FlatList;
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
			<ScrollView style={styles.scrollView}>
				<AccountCard />
				<FlatList data={cards} renderItem={renderItem} keyExtractor={(item) => item.id} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
