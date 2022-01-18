/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Image, Text } from 'react-native-elements';
import { IMoneyActionButton, NavigationParamList } from '@src/types';
import IMAGES from '@src/assets/images';
import AmountText from '@components/AmountText/AmountText';
import CardRow from '@components/CardRow/CardRow';
import Message from '@components/Message/Message';
import MoneyActionButton from '@components/MoneyActionButton/MoneyActionButton';
import styles from './AccountsScreen.style';

type AccountsScreenProp = StackNavigationProp<NavigationParamList, 'Accounts'>;

const AccountsScreen = (): JSX.Element => {
	const navigation = useNavigation<AccountsScreenProp>();
	const icon = <Image source={IMAGES.HEART} containerStyle={styles.imageContainer} style={styles.image} />;

	const rows = [
		{
			title: 'Checking',
			subtitle: 'Main account (..0353)',
			amount: 1500.2,
			icon: null,
			bottomDivider: false,
			onPress: () => navigation.navigate('Checking', { subtitle: 'checking subtitle' }),
			message: '',
		},
		{
			title: 'Savings',
			subtitle: 'Buy a house (..4044)',
			amount: 5000.2,
			icon: null,
			bottomDivider: false,
			onPress: () => navigation.navigate('Savings', { subtitle: 'savings subtitle' }),
			message: 'Savings is up 3% from last month',
		},
		{
			title: 'Goodness',
			subtitle: 'Cash rewards',
			amount: 500.4,
			icon,
			bottomDivider: false,
			onPress: undefined,
			message: '',
		},
	];

	const totalAmount = rows.reduce((acc, b) => acc + b.amount * 100, 0) / 100;

	const actionButtons: IMoneyActionButton[] = [
		{
			title: 'Send',
			image: IMAGES.CIRCLE_BUTTON_SEND,
			onPress: () => console.log('Send clicked'),
		},
		{
			title: 'Pay',
			image: IMAGES.CIRCLE_BUTTON_PAY,
			onPress: () => console.log('Pay clicked'),
		},
		{
			title: 'Transfer',
			image: IMAGES.CIRCLE_BUTTON_CHECKING,
			onPress: () => console.log('Transfer clicked'),
		},
	];

	return (
		<SafeAreaView>
			<Text style={styles.amount}>
				<AmountText amount={totalAmount} mainFontSize={30} secondaryFontSize={20} />
			</Text>
			<Text style={styles.subtitle}>Total available cash</Text>
			<View style={styles.buttonsContainer}>
				{actionButtons.map((elem) => (
					<MoneyActionButton key={elem.title} {...elem} />
				))}
			</View>
			{rows.map((elem) => (
				<Card key={elem.title}>
					<CardRow {...elem} />
					{elem.message ? <Message message={elem.message} /> : null}
				</Card>
			))}
		</SafeAreaView>
	);
};

export default AccountsScreen;
