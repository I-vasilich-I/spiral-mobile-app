import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bootsplash: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D73374',
	},
	logo: {
		height: 120,
		width: 100,
	},
	fullScreen: {
		flex: 1,
	},
	centeredFullScreen: {
		backgroundColor: 'transparent',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	maskImageStyle: {
		height: 120,
		width: 100,
	},
	fullScreenWhiteLayer: {
		backgroundColor: 'white',
	},
	fullScreenBackgroundLayer: {
		backgroundColor: '#D73374',
	},
});

export default styles;
