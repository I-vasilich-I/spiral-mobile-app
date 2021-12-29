import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckingScreen from '@screens/CheckingScreen';
import SavingScreen from '@screens/SavingScreen';
import { useTheme } from 'react-native-elements';
import AvatarMenu from '@components/avatarMenu/avatarMenu';
import SignInScreen from '@screens/SignInScreen';
import useBlurredBottomTab from '@src/hooks/useBlurredBottomTab';

const Stack = createStackNavigator();

const StackNavigation = () => {
	const { theme } = useTheme();
	const BottomTab = useBlurredBottomTab();

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
