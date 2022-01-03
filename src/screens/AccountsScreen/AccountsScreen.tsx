/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text } from 'react-native-elements';
import { NavigationParamList } from '@src/types';

type AccountsScreenProp = StackNavigationProp<NavigationParamList, 'Accounts'>;

const AccountsScreen = (): JSX.Element => {
	const navigation = useNavigation<AccountsScreenProp>();

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>This is Accounts screen</Text>
				<Button title="Go to Checking" onPress={() => navigation.navigate('Checking')} />
				<Button title="Go to Savings" onPress={() => navigation.navigate('Savings')} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: { display: 'flex', alignItems: 'center' },
});

export default AccountsScreen;
