/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';
import TransactionRow from '@components/TransactionRow/TransactionRow';
import { getFormattedNumber } from '@src/helpers';
import { ITransaction } from '@src/types';
import styles from './SavingCard.style';

interface IProps {
	transactions: ITransaction[];
	totalAmount: number;
}

const SavingCard = ({ transactions, totalAmount }: IProps): JSX.Element => {
	const { int: amount } = getFormattedNumber(totalAmount);

	return (
		<Card containerStyle={styles.cardContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.text}>End day balance - Jul 11</Text>
				<Text style={styles.text}>${amount}</Text>
			</View>
			<Divider />
			{transactions.map((elem) => (
				<TransactionRow key={elem.id} {...elem} />
			))}
		</Card>
	);
};

export default SavingCard;
