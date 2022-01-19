/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Pressable } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { IMoneyActionButton } from '@src/types';
import styles from './MoneyActionButton.style';

const MoneyActionButton = ({ title, image, onPress }: IMoneyActionButton) => {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

export default MoneyActionButton;
