import { StyleSheet } from 'react-native';
import theme from '@src/theme/Theme';

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 40,
		paddingBottom: 20,
	},
	formBody: {
		width: '80%',
	},
	formControl: {
		width: '80%',
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0,
		margin: 0,
	},
	titleContainer: {
		alignSelf: 'flex-start',
		paddingBottom: 5,
		marginBottom: 25,
		marginLeft: 10,
		borderBottomColor: theme.colors.primary,
		borderBottomWidth: 3,
		borderStyle: 'solid',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	LoginButton: {
		width: '100%',
		borderRadius: 25,
		marginBottom: 45,
	},
	extraContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	extraTitle: {
		fontSize: 12,
	},
	buttonsContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	idButtonContainer: {
		width: '45%',
		borderRadius: 25,
		borderWidth: 1,
		borderColor: 'grey',
	},
	idButtonTitle: {
		fontSize: 12,
		color: 'grey',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	idButtonIcon: {
		marginRight: 10,
	},
	passwordButton: {
		padding: 0,
		margin: 0,
		alignSelf: 'flex-end',
		borderRadius: 25,
		borderWidth: 0,
	},
	passwordButtonTitle: {
		letterSpacing: -1,
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: 'bold',
	},
	disabledStyle: {
		backgroundColor: 'grey',
	},
});

export default styles;
