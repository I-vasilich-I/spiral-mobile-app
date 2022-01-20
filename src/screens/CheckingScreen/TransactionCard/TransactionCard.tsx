/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { v4 as uuidv4 } from 'uuid';
import { ITransactionCard } from '@src/types';
import TransactionRow from '../TransactionRow/TransactionRow';
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
				{transactions.map(({ title, subtitle, amount, income }) => (
					<TransactionRow key={uuidv4()} title={title} subtitle={subtitle} amount={amount} income={income} />
				))}
			</Card>
		</View>
	);
};

export default TransactionCard;
