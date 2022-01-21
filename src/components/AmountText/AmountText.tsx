/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ColorValue } from 'react-native';
import { Text } from 'react-native-elements';
import { getFormattedNumber } from '@src/helpers';

interface IProps {
	amount: number;
	mainFontSize?: number;
	secondaryFontSize?: number;
	color?: ColorValue | undefined;
}

const AmountText = ({ amount, mainFontSize = 20, secondaryFontSize = 15, color = undefined }: IProps): JSX.Element => {
	const { int, frac } = getFormattedNumber(amount);

	return (
		<Text style={{ fontSize: mainFontSize, color }}>
			${int}
			<Text style={{ fontSize: secondaryFontSize, color }}>.{frac}</Text>
		</Text>
	);
};

export default AmountText;
