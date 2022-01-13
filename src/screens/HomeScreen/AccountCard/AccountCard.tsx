/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AmountText from '@components/AmountText/AmountText';
import CardRow from '@components/CardRow/CardRow';
import { NavigationParamList } from '@src/types';
import IMAGES from '@src/assets/images';
import styles from './AccountCard.style';

type HomeScreenProp = StackNavigationProp<NavigationParamList, 'Home'>;

const AccountCard = (): JSX.Element => {
	const navigation = useNavigation<HomeScreenProp>();
	const icon = <Image source={IMAGES.HEART} containerStyle={styles.imageContainer} style={styles.image} />;

	const rows = [
		{
			title: 'Checking',
			subtitle: 'Main account (..0353)',
			amount: 1500.2,
			icon: null,
			bottomDivider: true,
			onPress: () => navigation.navigate('Checking', { subtitle: 'checking subtitle' }),
		},
		{
			title: 'Savings',
			subtitle: 'Buy a house (..4044)',
			amount: 5000.2,
			icon: null,
			bottomDivider: true,
			onPress: () => navigation.navigate('Savings', { subtitle: 'savings subtitle' }),
		},
		{
			title: 'Goodness',
			subtitle: 'Cash rewards',
			amount: 500.4,
			icon,
			bottomDivider: false,
			onPress: undefined,
		},
	];

	const totalAmount = rows.reduce((acc, b) => acc + b.amount * 100, 0) / 100;

	return (
		<View>
			<Card>
				<Card.Title>
					<View>
						<Text style={styles.title}>Accounts Overview</Text>
						<Text style={styles.amount}>
							<AmountText amount={totalAmount} mainFontSize={30} secondaryFontSize={20} />
						</Text>
						<Text style={styles.subtitle}>Total available cash</Text>
					</View>
				</Card.Title>
				{rows.map((elem) => (
					<CardRow key={elem.title} {...elem} />
				))}
			</Card>
		</View>
	);
};

export default AccountCard;
