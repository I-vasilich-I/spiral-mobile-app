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
	},
	subtitle: {
		color: 'white',
		fontWeight: '500',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
	},
});

export default CustomTitle;
