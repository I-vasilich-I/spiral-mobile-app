import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	view: {
		alignItems: 'flex-start',
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		margin: 0,
		padding: 0,
		lineHeight: 20,
	},
	subtitle: {
		fontSize: 13,
		color: 'grey',
		margin: 0,
		padding: 0,
		lineHeight: 16,
	},
	avatar: {
		marginRight: 10,
	},
	button: {
		width: '80%',
		alignSelf: 'center',
		borderRadius: 50,
		marginBottom: 15,
	},
	buttonTitle: {
		fontSize: 12,
		paddingLeft: 5,
	},
});

export default styles;
