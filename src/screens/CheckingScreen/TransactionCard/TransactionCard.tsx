/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { ITransactionCard } from '@src/types';
import TransactionRow from '@components/TransactionRow/TransactionRow';
import styles from './TransactionCard.style';

interface IProps {
	date: string;
	transactions: ITransactionCard[];
}

const TransactionCard = ({ date, transactions }: IProps): JSX.Element => {
	return (
		<View>
			<Text style={styles.text}>{date}</Text>
			<Card containerStyle={styles.container}>
				{transactions.map(({ id, title, subtitle, amount, income }) => (
					<TransactionRow key={id} title={title} subtitle={subtitle} amount={amount} income={income} />
				))}
			</Card>
		</View>
	);
};

export default TransactionCard;
