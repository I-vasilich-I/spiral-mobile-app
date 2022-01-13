import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: '700',
		textAlign: 'center',
	},
	amount: {
		fontWeight: '500',
		textAlign: 'center',
		height: 40,
	},
	subtitle: {
		fontSize: 16,
		fontWeight: '100',
		textAlign: 'center',
		color: 'grey',
	},
	imageContainer: {
		height: 12,
		width: 12,
	},
	image: {
		resizeMode: 'contain',
	},
});

export default styles;
