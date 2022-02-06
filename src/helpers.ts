/* eslint-disable @typescript-eslint/no-unused-vars */
import dateFormat from 'dateformat';
import { IFormatted } from './types';

const getGreeting = (user: string): string => {
	const today = new Date();
	const hours = today.getHours();
	const isMorning = hours >= 4 && hours < 12;
	const isAfternoon = hours >= 12 && hours < 17;
	const isEvening = hours >= 17 && hours < 24;
	const date = dateFormat(today, 'mmm dS, yyyy');
	if (isMorning) {
		return `Good Morning ${user} | ${date}`;
	}
	if (isAfternoon) {
		return `Good Afternoon ${user} | ${date}`;
	}
	if (isEvening) {
		return `Good Evening ${user} | ${date}`;
	}
	return `Good Night ${user} | ${date}`;
};

const getSeparatedNumber = (number: number, separator = ','): string => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

const getFormattedNumber = (number: number): IFormatted => {
	const wholeNumber = Math.trunc(number);
	const fractionalNumber = Math.trunc((number * 100) % wholeNumber);
	const formattedWholeNumber = getSeparatedNumber(wholeNumber);
	const formattedFractionalNumber = `${fractionalNumber < 10 ? '0' : ''}${fractionalNumber}`;
	const formattedNumber = `${formattedWholeNumber}.${formattedFractionalNumber}`;

	return {
		int: formattedWholeNumber,
		frac: formattedFractionalNumber,
		formattedNumber,
	};
};

export { getGreeting, getSeparatedNumber, getFormattedNumber };
