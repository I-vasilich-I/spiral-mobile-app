import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Avatar, Text } from 'react-native-elements';
import IMAGES from '@src/assets/images';

const AvatarMenu = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleAvatarPress = () => {
		setIsModalVisible(true);
	};

	const hideModal = () => {
		setIsModalVisible(false);
	};

	const handleLogOut = () => {
		console.log('log out');
		setIsModalVisible(false);
	};

	return (
		<>
			<Avatar rounded source={IMAGES.OVAL} onPress={handleAvatarPress} containerStyle={styles.avatarContainer} />
			<Modal visible={isModalVisible} animationType="fade" transparent>
				<TouchableWithoutFeedback onPress={hideModal}>
					<View style={styles.userMenuOverlay} />
				</TouchableWithoutFeedback>
				<View style={styles.modalContainer}>
					<Pressable onPress={handleLogOut}>
						<Text>Log out</Text>
					</Pressable>
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	avatarContainer: {
		margin: 10,
	},
	modalContainer: {
		width: 100,
		height: 30,
		position: 'absolute',
		right: 5,
		top: 50,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 110, height: 40 },
		shadowRadius: 20,
		shadowOpacity: 10,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Text: {
		color: 'white',
	},
	userMenuOverlay: StyleSheet.absoluteFillObject,
});

export default AvatarMenu;
