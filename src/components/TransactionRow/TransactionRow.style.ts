import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		margin: 0,
		marginTop: 2,
		paddingTop: 13,
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
		fontWeight: '600',
	},
	margin: {
		marginRight: 10,
	},
	subtitle: {
		fontSize: 12,
		color: 'grey',
	},
	image: {
		width: 30,
		height: 30,
	},
});

export default styles;
