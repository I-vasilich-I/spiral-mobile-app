import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import IMAGES from '@src/assets/images';

const BurgerMenu = () => {
	const route = useRoute();
	const isDisabled = route.name === 'Home' || route.name === 'Accounts';

	const handlePress = () => {
		console.log('burger press');
	};

	return (
		<TouchableOpacity onPress={handlePress} disabled={isDisabled}>
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
