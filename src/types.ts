// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ImageSourcePropType } from 'react-native';

export type NavigationParamList = {
	Home: undefined;
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Cards: undefined;
	Checking: { subtitle: string };
	Savings: { subtitle: string };
	SignIn: undefined;
	BottomTab: undefined;
	Profile: undefined;
};

export type Income = 'none' | 'regular' | 'special';

export interface ICard {
	id: string;
	title: string;
	charityName: string;
	time: string;
	description: string;
	imageSource: ImageSourcePropType;
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
