import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	amount: {
		marginTop: 20,
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
	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
});

export default styles;
