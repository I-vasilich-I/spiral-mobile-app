import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store/store';
import theme from '@src/theme/Theme';
import StackNavigation from './navigation/StackNavigation';
import AppFlashMessage from '@components/AppFlashMessage/AppFlashMessage';

const App = () => {
	return (
		<SafeAreaProvider>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<NavigationContainer>
							<StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
							<StackNavigation />
							<AppFlashMessage />
						</NavigationContainer>
					</ThemeProvider>
				</PersistGate>
			</ReduxProvider>
		</SafeAreaProvider>
	);
};

export default App;
