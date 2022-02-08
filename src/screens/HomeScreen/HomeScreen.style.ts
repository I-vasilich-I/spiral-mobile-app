import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		paddingBottom: 30,
	},
	greeting: {
		alignSelf: 'flex-start',
		padding: 10,
		paddingHorizontal: 15,
		paddingBottom: 0,
		fontWeight: '700',
		letterSpacing: -0.5,
		color: '#62686F',
	},
	scrollView: {
		width: '100%',
	},
	flatList: {
		width: '100%',
	},
});

export default styles;
