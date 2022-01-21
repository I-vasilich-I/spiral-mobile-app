import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
	},
	container: {
		paddingBottom: 30,
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
		paddingHorizontal: 20,
	},
	gainedAmount: {
		color: 'green',
	},
	graph: {
		width: '100%',
		height: 200,
		marginBottom: 10,
	},
});

export default styles;
