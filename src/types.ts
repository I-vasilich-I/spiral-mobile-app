// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ImageSourcePropType } from 'react-native';

export type NavigationParamList = {
	Home: { time: number };
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Cards: undefined;
	Checking: { subtitle: string };
	Savings: { subtitle: string };
	SignIn: undefined;
	BottomTab: undefined;
	Profile: undefined;
	Video: { time: number; volume: number; source: string };
};

export type Income = 'none' | 'regular' | 'special';

export interface ICard {
	id: string;
	title: string;
	charityName: string;
	time: string;
	description: string;
	imageSource: ImageSourcePropType;
	videoSource: string;
	currentId?: number;
	currentVisibleIndex?: number;
}

export interface IMoneyActionButton {
	title: string;
	image: ImageSourcePropType;
	onPress: () => void;
}

export interface ITransactionCard {
	id: string;
	title: string;
	subtitle: string;
	amount: number;
	income: Income;
}

export interface ITransaction extends ITransactionCard {
	date: string;
}

export interface IFormatted {
	int: string;
	frac: string;
	formattedNumber: string;
}

export type TPhoto = ImageSourcePropType | string;

export type TInput = 'password' | 'email';
