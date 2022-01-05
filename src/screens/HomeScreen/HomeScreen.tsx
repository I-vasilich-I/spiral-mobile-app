/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationParamList } from '@src/types';

type HomeScreenProp = StackNavigationProp<NavigationParamList, 'Home'>;

const HomeScreen = (): JSX.Element => {
	const navigation = useNavigation<HomeScreenProp>();

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>This is Home screen</Text>
				<Button
					title="Go to Checking"
					onPress={() => navigation.navigate('Checking', { subtitle: 'checking subtitle' })}
				/>
				<Button
					title="Go to Savings"
					onPress={() => navigation.navigate('Savings', { subtitle: 'savings subtitle' })}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: { display: 'flex', alignItems: 'center' },
});

export default HomeScreen;
