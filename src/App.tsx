import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import theme from '@src/theme/Theme';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
					<StackNavigation />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default App;
