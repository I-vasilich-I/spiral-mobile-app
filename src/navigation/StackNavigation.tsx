import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckingScreen from '@screens/CheckingScreen';
import SavingScreen from '@screens/SavingScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="BottomTab" component={BottomTabNavigation} options={{ headerShown: false }} />
			<Stack.Screen name="Checking" component={CheckingScreen} />
			<Stack.Screen name="Savings" component={SavingScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigation;
