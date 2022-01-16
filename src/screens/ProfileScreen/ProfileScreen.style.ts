import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
		paddingTop: 20,
		alignItems: 'center',
	},
	imageContainer: {
		width: 150,
		height: 150,
		padding: 0,
		borderWidth: 5,
		borderRadius: 150,
		borderColor: '#DBDFE4',
	},
	imageFABContainer: {
		position: 'absolute',
		bottom: 0,
		width: 150,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export default styles;
