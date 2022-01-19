/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ColorValue } from 'react-native';
import { Text } from 'react-native-elements';

interface IProps {
	amount: number;
	mainFontSize?: number;
	secondaryFontSize?: number;
	color?: ColorValue | undefined;
}

const AmountText = ({ amount, mainFontSize = 20, secondaryFontSize = 15, color = undefined }: IProps): JSX.Element => {
	const wholeNumber = Math.trunc(amount);
	const fractionalNumber = Math.trunc((amount * 100) % wholeNumber);
	const formattedWholeNumber = wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const formattedFractionalNumber = fractionalNumber < 10 ? `0${fractionalNumber}` : fractionalNumber;

	return (
		<Text style={{ fontSize: mainFontSize, color }}>
			${formattedWholeNumber}
			<Text style={{ fontSize: secondaryFontSize, color }}>.{formattedFractionalNumber}</Text>
		</Text>
	);
};

export default AmountText;
