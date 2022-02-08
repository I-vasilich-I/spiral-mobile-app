import theme from '@src/theme/Theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	inputStyle: {
		padding: 0,
		fontSize: 16,
	},
	errorStyle: {
		padding: 0,
		marginHorizontal: 0,
		fontSize: 14,
		color: theme.colors.primary,
	},
	labelStyle: {
		color: 'rgba(0, 0, 0, 0.7)',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default styles;
