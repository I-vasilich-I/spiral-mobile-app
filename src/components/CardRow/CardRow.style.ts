import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	view: {
		paddingBottom: 10,
		margin: 0,
		marginTop: 5,
	},
	container: {
		padding: 0,
		margin: 0,
	},
	right: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		lineHeight: 16,
	},
	margin: {
		marginRight: 10,
	},
	subtitle: {
		fontSize: 12,
		color: 'grey',
	},
});

export default styles;
