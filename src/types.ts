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
