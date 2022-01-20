/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, ListItem, Text } from 'react-native-elements';
import AmountText from '@components/AmountText/AmountText';
import IMAGES from '@src/assets/images';
import { ITransactionCard } from '@src/types';
import styles from './TransactionRow.style';

const TransactionRow = ({ title, subtitle, amount, income }: ITransactionCard): JSX.Element => {
	const isSpecial = income === 'special';
	const isRegular = income === 'regular';
	const isTitleGreen = isRegular || isSpecial;
	const isSubtitleGreen = isSpecial;
	const isAmountGreen = isRegular || isSpecial;

	const titleStyle = isTitleGreen ? { ...styles.title, color: 'green' } : styles.title;
	const subtitleStyle = isSubtitleGreen ? { ...styles.subtitle, color: 'green' } : styles.subtitle;
	const amountColor = isAmountGreen ? 'green' : undefined;

	return (
		<ListItem
			hasTVPreferredFocus={undefined}
			tvParallaxProperties={undefined}
			containerStyle={styles.container}
			bottomDivider>
			{isSpecial ? <Image source={IMAGES.CONFETTI2} style={styles.image} /> : null}
			<ListItem.Content>
				<ListItem.Content style={styles.titleContainer}>
					<ListItem.Title style={styles.margin}>
						<Text style={titleStyle}>{title}</Text>
					</ListItem.Title>
				</ListItem.Content>
				<ListItem.Subtitle>
					<Text style={subtitleStyle}>{subtitle}</Text>
				</ListItem.Subtitle>
			</ListItem.Content>
			<ListItem.Content style={styles.right}>
				<ListItem.Title>
					<AmountText amount={amount} color={amountColor} />
				</ListItem.Title>
			</ListItem.Content>
		</ListItem>
	);
};

export default TransactionRow;
