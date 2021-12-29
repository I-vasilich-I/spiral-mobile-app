import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountsScreen from '@screens/AccountsScreen';
import CardsScreen from '@screens/CardsScreen';
import GivingsScreen from '@screens/GivingsScreen';
import HomeScreen from '@screens/HomeScreen';
import PaymentsScreen from '@screens/PaymentsScreen';
import LogoTitle from '@components/logoTitle/logoTitle';
import AvatarMenu from '@components/avatarMenu/avatarMenu';
import BurgerMenu from '@components/burgerMenu/burgerMenu';

const BottomTabNavigation = (): JSX.Element => {
	const BottomTab = createBottomTabNavigator();
	const { theme } = useTheme();

	return (
		<BottomTab.Navigator
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
			<BottomTab.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <LogoTitle /> }} />
			<BottomTab.Screen name="Accounts" component={AccountsScreen} />
			<BottomTab.Screen name="Giving" component={GivingsScreen} />
			<BottomTab.Screen name="Payments" component={PaymentsScreen} />
			<BottomTab.Screen name="Cards" component={CardsScreen} />
		</BottomTab.Navigator>
	);
};

export default BottomTabNavigation;
