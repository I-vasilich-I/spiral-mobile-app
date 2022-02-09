import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store/store';
import { LogBox, StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import SplashScreen from '@screens/SplashScreen/SplashScreen_';
import AppFlashMessage from '@components/AppFlashMessage/AppFlashMessage';
import theme from '@src/theme/Theme';

LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
	return (
		<SafeAreaProvider>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<NavigationContainer>
							<StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
							<StackNavigation />
							<SplashScreen />
							<AppFlashMessage />
						</NavigationContainer>
					</ThemeProvider>
				</PersistGate>
			</ReduxProvider>
		</SafeAreaProvider>
	);
};

export default App;
