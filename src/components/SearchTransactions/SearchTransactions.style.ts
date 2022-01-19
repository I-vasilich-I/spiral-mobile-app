import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100%',
		marginTop: 10,
	},
	inputContainer: {
		borderWidth: 1,
		borderRadius: 50,
		paddingHorizontal: 20,
		backgroundColor: 'white',
	},
	inputText: {
		fontSize: 15,
		paddingVertical: 0,
	},
	iContainer: {
		width: '70%',
	},
	button: {
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 50,
	},
	title: {
		color: 'grey',
		fontSize: 15,
	},
	buttonContainer: {
		width: 100,
		paddingVertical: 0,
	},
});

export default styles;
