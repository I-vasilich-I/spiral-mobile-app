/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text } from 'react-native-elements';
import { NavigationParamList } from '@src/types';

type CheckingScreenProp = StackNavigationProp<NavigationParamList, 'Checking'>;

const CheckingScreen = (): JSX.Element => {
	const navigation = useNavigation<CheckingScreenProp>();
	return (
		<View>
			<Text>This is Checking screen</Text>
			<Button title="Go Home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default CheckingScreen;
