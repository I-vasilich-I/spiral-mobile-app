import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckingScreen from '@screens/CheckingScreen/CheckingScreen';
import SavingScreen from '@screens/SavingScreen/SavingScreen';
import { useTheme } from 'react-native-elements';
import AvatarMenu from '@components/AvatarMenu/AvatarMenu';
import SignInScreen from '@screens/SignInScreen/SignInScreen';
import BottomTabStack from '@src/navigation/BottomTabStack';

const Stack = createStackNavigator();

const StackNavigation = () => {
	const { theme } = useTheme();
	let BottomTab = BottomTabStack;

	if (Platform.OS === 'ios') {
		const BlurPackage = require('@react-native-community/blur');
		const { BlurView } = BlurPackage;

		BottomTab = () => (
			<BlurView>
				<BottomTabStack />
			</BlurView>
		);
	}

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.colors?.primary,
				},
				headerTintColor: 'white',
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerRight: () => <AvatarMenu />,
			}}>
			<Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
			<Stack.Screen name="Checking" component={CheckingScreen} />
			<Stack.Screen name="Savings" component={SavingScreen} />
			<Stack.Screen name="SignIn" component={SignInScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigation;
