/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationParamList } from '@src/types';
import IMAGES from '@src/assets/images';
import { StackNavigationProp } from '@react-navigation/stack';

type SignInScreenProp = StackNavigationProp<NavigationParamList, 'SignIn'>;

const BurgerMenu = () => {
	const navigation = useNavigation<SignInScreenProp>();

	const handlePress = () => {
		console.log('burger press');
		// navigation.navigate('SignIn')
	};

	return (
		<TouchableOpacity onPress={handlePress}>
			<Image source={IMAGES.BURGER_MENU_ICON} style={styles.image} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	image: {
		margin: 10,
	},
});

export default BurgerMenu;
