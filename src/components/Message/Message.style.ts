import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	message: {
		margin: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	messageText: {
		color: 'green',
		fontWeight: '500',
		fontSize: 16,
		paddingLeft: 5,
	},
});

export default styles;
