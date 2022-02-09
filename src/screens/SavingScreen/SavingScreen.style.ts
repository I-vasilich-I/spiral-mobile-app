import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	view: {
		backgroundColor: 'white',
		margin: 0,
		padding: 10,
		marginBottom: 10,
	},
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
	gainedContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 30,
	},
	gainedText: {
		color: '#62686F',
		fontWeight: '700',
	},
	gainedAmount: {
		color: 'green',
		fontWeight: '600',
		fontSize: 18,
	},
	graph: {
		width: '100%',
		height: 200,
		marginBottom: 10,
	},
	search: {
		marginHorizontal: 10,
	},
});

export default styles;
