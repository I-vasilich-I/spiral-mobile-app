import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		padding: 0,
		borderRadius: 5,
		marginHorizontal: 20,
	},
	titleContainer: {
		paddingHorizontal: 17,
		paddingVertical: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		color: '#62686F',
		fontWeight: '700',
		fontSize: 14,
		letterSpacing: -0.5,
	},
});

export default styles;
