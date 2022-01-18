import React from 'react';
import { Text } from 'react-native-elements';

interface IProps {
	amount: number;
	mainFontSize?: number;
	secondaryFontSize?: number;
}

const AmountText = ({ amount, mainFontSize = 20, secondaryFontSize = 15 }: IProps): JSX.Element => {
	const wholeNumber = Math.trunc(amount);
	const fractionalNumber = (amount * 100) % wholeNumber;
	const formattedWholeNumber = wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const formattedFractionalNumber = fractionalNumber < 10 ? `0${fractionalNumber}` : fractionalNumber;

	return (
		<Text style={{ fontSize: mainFontSize }}>
			${formattedWholeNumber}
			<Text style={{ fontSize: secondaryFontSize }}>.{formattedFractionalNumber}</Text>
		</Text>
	);
};

export default AmountText;
