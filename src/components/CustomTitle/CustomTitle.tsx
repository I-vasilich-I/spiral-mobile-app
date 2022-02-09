import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

interface IProps {
	title: string;
	subtitle: string;
}

const CustomTitle = ({ title, subtitle = '' }: IProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
	subtitle: {
		color: 'white',
		fontWeight: '400',
		fontSize: 12,
		lineHeight: 14,
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});

export default CustomTitle;
