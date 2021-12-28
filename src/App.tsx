import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import theme from '@src/theme/Theme';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
					<StackNavigation />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default App;
