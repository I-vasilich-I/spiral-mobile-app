import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountsScreen from '@screens/AccountsScreen/AccountsScreen';
import CardsScreen from '@screens/CardsScreen/CardsScreen';
import GivingsScreen from '@screens/GivingsScreen/GivingsScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import PaymentsScreen from '@screens/PaymentsScreen/PaymentsScreen';
import LogoTitle from '@components/LogoTitle/LogoTitle';
import AvatarMenu from '@components/AvatarMenu/AvatarMenu';
import BurgerMenu from '@components/BurgerMenu/BurgerMenu';

const BottomTabNavigator = createBottomTabNavigator();

const BottomTabStack = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<BottomTabNavigator.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ size, color }) => {
					let icon;

					if (route.name === 'Home') {
						icon = <Ionicons name={'home'} size={size} color={color} />;
					}

					if (route.name === 'Accounts') {
						icon = <Ionicons name={'wallet'} size={size} color={color} />;
					}

					if (route.name === 'Giving') {
						icon = <MaterialCommunityIcon name={'hand-heart'} size={size} color={color} />;
					}

					if (route.name === 'Payments') {
						icon = <MaterialIcon name={'monetization-on'} size={size} color={color} />;
					}

					if (route.name === 'Cards') {
						icon = <MaterialCommunityIcon name={'credit-card-multiple'} size={size} color={color} />;
					}

					return icon;
				},
				tabBarActiveTintColor: theme.colors?.primary,
				tabBarInactiveTintColor: 'gray',
				headerStyle: {
					backgroundColor: theme.colors?.primary,
				},
				headerTintColor: 'white',
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerRight: () => <AvatarMenu />,
				headerLeft: () => <BurgerMenu />,
			})}>
			<BottomTabNavigator.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <LogoTitle /> }} />
			<BottomTabNavigator.Screen name="Accounts" component={AccountsScreen} />
			<BottomTabNavigator.Screen name="Giving" component={GivingsScreen} />
			<BottomTabNavigator.Screen name="Payments" component={PaymentsScreen} />
			<BottomTabNavigator.Screen name="Cards" component={CardsScreen} />
		</BottomTabNavigator.Navigator>
	);
};

export default BottomTabStack;
