import React from 'react';
import { Image, ScrollView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider, Text } from 'react-native-elements';
import IMAGES from './assets/images';
import theme from './theme/Theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
					<Image source={IMAGES.CONFETTI2} />
					<Text>React Native Lab</Text>
				</ScrollView>
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default App;
