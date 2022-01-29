/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { Avatar, Divider, Text } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setToken } from '@src/redux/store/auth/authSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParamList } from '@src/types';
import useAppSelector from '@src/redux/hooks/useAppSelector';

type ProfileScreenProp = StackNavigationProp<NavigationParamList, 'Profile'>;

const AvatarMenu = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<ProfileScreenProp>();
	const { photo } = useAppSelector((state) => state.USER);
	const route = useRoute();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const isDisabled = route.name === 'Home' || route.name === 'Accounts';
	const opacity = isDisabled ? 1 : undefined;
	const photoSource = typeof photo === 'string' ? { uri: photo } : photo;

	const handleAvatarPress = () => {
		if (isDisabled) {
			return;
		}

		setIsModalVisible(true);
	};

	const hideModal = () => {
		setIsModalVisible(false);
	};

	const handleLogOut = () => {
		dispatch(setToken(null));
		setIsModalVisible(false);
	};

	const handleProfileClick = () => {
		setIsModalVisible(false);
		navigation.navigate('Profile');
	};

	return (
		<>
			<Avatar
				activeOpacity={opacity}
				rounded
				source={photoSource}
				onPress={handleAvatarPress}
				containerStyle={styles.avatarContainer}
			/>
			<Modal visible={isModalVisible} animationType="fade" transparent>
				<Pressable onPress={hideModal} style={styles.userMenuOverlay} />
				<View style={styles.modalContainer}>
					<Pressable onPress={handleProfileClick}>
						<Text>Profile</Text>
					</Pressable>
					<Divider inset={true} insetType="middle" />
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
		paddingHorizontal: 20,
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
		justifyContent: 'space-between',
	},
	Text: {
		color: 'white',
	},
	userMenuOverlay: StyleSheet.absoluteFillObject,
});

export default AvatarMenu;
