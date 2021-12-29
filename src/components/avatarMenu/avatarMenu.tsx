import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import IMAGES from '@src/assets/images';

const AvatarMenu = () => (
	<TouchableOpacity onPress={() => console.log('hi')}>
		<Image source={IMAGES.OVAL} style={styles.image} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	image: {
		margin: 10,
	},
});

export default AvatarMenu;
