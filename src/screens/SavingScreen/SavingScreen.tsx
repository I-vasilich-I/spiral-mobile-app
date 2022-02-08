/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { v4 as uuidv4 } from 'uuid';
import SearchTransactions from '@components/SearchTransactions/SearchTransactions';
import AmountText from '@components/AmountText/AmountText';
import SavingCard from './SavingCard/SavingCard';
import { getFormattedNumber, getSeparatedNumber } from '@src/helpers';
import { ITransaction } from '@src/types';
import IMAGES from '@src/assets/images';
import styles from './SavingScreen.style';

const SavingScreen = (): JSX.Element => {
	const { formattedNumber: totalGainedInterest } = getFormattedNumber(50);
	const totalGainedGoodness = getSeparatedNumber(600);

	const transactions: ITransaction[] = [
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 2000,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 2000,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Wire transfer',
			subtitle: 'Jul 11',
			amount: 200.5,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 800.65,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 63.95,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 2000,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 200.5,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 800.65,
			income: 'regular',
		},
		{
			id: uuidv4(),
			date: 'Jul 11',
			title: 'Deposit',
			subtitle: 'Jul 11',
			amount: 63.95,
			income: 'regular',
		},
	];

	const totalAmount = transactions.reduce((acc, b) => acc + b.amount * 100, 0) / 100;

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.view}>
					<Text style={styles.amount}>
						<AmountText amount={totalAmount} mainFontSize={30} secondaryFontSize={20} />
					</Text>
					<Text style={styles.subtitle}>Total available cash</Text>
					<Image source={IMAGES.SAVINGS_GRAPH_V2} style={styles.graph} />
				</View>
				<View style={styles.gainedContainer}>
					<Text style={styles.gainedText}>Total interest gained</Text>
					<Text style={styles.gainedAmount}>+${totalGainedInterest}</Text>
				</View>
				<View style={styles.gainedContainer}>
					<Text style={styles.gainedText}>Goodness points gained</Text>
					<Text style={styles.gainedAmount}>+{totalGainedGoodness}</Text>
				</View>
				<View style={styles.search}>
					<SearchTransactions disabled />
				</View>
				<SavingCard transactions={transactions} totalAmount={totalAmount} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default SavingScreen;
