import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import CheckingScreen from '@screens/CheckingScreen/CheckingScreen';
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen';
import SavingScreen from '@screens/SavingScreen/SavingScreen';
import SignInScreen from '@screens/SignInScreen/SignInScreen';
import VideoScreen from '@screens/VideoScreen/VideoScreen';
import AvatarMenu from '@components/AvatarMenu/AvatarMenu';
import CustomTitle from '@components/CustomTitle/CustomTitle';
import BottomTabStack from '@src/navigation/BottomTabStack';
import useAppSelector from '@src/redux/hooks/useAppSelector';

const Stack = createStackNavigator();

const StackNavigation = () => {
	const { token } = useAppSelector((state) => state.AUTH);
	const { theme } = useTheme();
	let BottomTab = BottomTabStack;

	const checkingOptions = ({ route }) => ({
		headerTitle: <CustomTitle title="Checking" subtitle={route.params?.subtitle} />,
	});

	const savingsOptions = ({ route }) => ({
		headerTitle: <CustomTitle title="Savings" subtitle={route.params?.subtitle} />,
	});

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
			initialRouteName="BottomTab"
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
			{!token ? (
				<Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
			) : (
				<>
					<Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
					<Stack.Screen name="Checking" component={CheckingScreen} options={checkingOptions} />
					<Stack.Screen name="Savings" component={SavingScreen} options={savingsOptions} />
					<Stack.Screen name="Profile" component={ProfileScreen} />
					<Stack.Screen name="Video" component={VideoScreen} options={{ headerShown: false }} />
				</>
			)}
		</Stack.Navigator>
	);
};

export default StackNavigation;
