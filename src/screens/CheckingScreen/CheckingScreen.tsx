/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { ITransactionCard } from '@src/types';
import AmountText from '@components/AmountText/AmountText';
import SearchTransactions from '@components/SearchTransactions/SearchTransactions';
import TransactionCard from './TransactionCard/TransactionCard';
import styles from './CheckingScreen.style';

interface ICards {
	[key: string]: ITransactionCard[];
}

interface ITransaction extends ITransactionCard {
	date: string;
}

interface IProps {
	item: [key: string, value: ITransactionCard[]];
}

const CheckingScreen = (): JSX.Element => {
	const transactions: ITransaction[] = [
		{
			date: 'Jul 11',
			title: 'Target',
			subtitle: 'Closter NJ | Debit card',
			amount: 63.95,
			income: 'none',
		},
		{
			date: 'Jul 11',
			title: 'AplPay 7-Eleven',
			subtitle: 'Cresskill NJ | iPhone',
			amount: 17.75,
			income: 'none',
		},
		{
			date: 'Jul 11',
			title: 'Facebook inc',
			subtitle: 'Pay day! Yay!',
			amount: 1200.5,
			income: 'special',
		},
		{
			date: 'Jul 11',
			title: 'Lencrafters',
			subtitle: 'Paramus NJ | Debit card',
			amount: 320.73,
			income: 'none',
		},
		{
			date: 'Jul 10',
			title: 'Transfer from savings',
			subtitle: 'Buy house (..4044)',
			amount: 10000,
			income: 'regular',
		},
		{
			date: 'Jul 10',
			title: 'Starbucks',
			subtitle: 'Closter NJ | Debit card',
			amount: 12.02,
			income: 'none',
		},
		{
			date: 'Jul 10',
			title: 'Stop and Shop',
			subtitle: 'Closter NJ | Debit card',
			amount: 236.52,
			income: 'none',
		},
		{
			date: 'Jul 10',
			title: 'Starbucks',
			subtitle: 'Closter NJ | Debit card',
			amount: 12.02,
			income: 'none',
		},
		{
			date: 'Jul 10',
			title: 'Stop and Shop',
			subtitle: 'Closter NJ | Debit card',
			amount: 236.52,
			income: 'none',
		},
		{
			date: 'Jul 10',
			title: 'Starbucks',
			subtitle: 'Closter NJ | Debit card',
			amount: 12.02,
			income: 'none',
		},
		{
			date: 'Jul 10',
			title: 'Stop and Shop',
			subtitle: 'Closter NJ | Debit card',
			amount: 5000,
			income: 'none',
		},
	];

	const totalAmount = transactions.reduce((acc, b) => acc + b.amount * (b.income === 'none' ? -100 : 100), 0) / 100;

	const groupedTransactions = transactions.reduce<ICards>((acc, { date, ...rest }) => {
		acc[date] = acc[date] ? [...acc[date], rest] : [rest];
		return acc;
	}, {});

	const cards = Object.entries(groupedTransactions);

	const FlatListHeader = (
		<>
			<Text style={styles.amount}>
				<AmountText amount={totalAmount} mainFontSize={30} secondaryFontSize={20} />
			</Text>
			<Text style={styles.subtitle}>Total available cash</Text>
			<SearchTransactions disabled />
		</>
	);

	const renderItem = ({ item: [key, value] }: IProps) => <TransactionCard date={key} transactions={value} />;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={cards}
				renderItem={renderItem}
				keyExtractor={(item) => item[0]}
				ListHeaderComponent={FlatListHeader}
			/>
		</SafeAreaView>
	);
};

export default CheckingScreen;
