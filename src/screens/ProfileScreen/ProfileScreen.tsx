import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import useAppSelector from '@src/redux/hooks/useAppSelector';
import { setUser } from '@src/redux/store/user/userSlice';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileControl from './ProfileControl/ProfileControl';
import styles from './ProfileScreen.style';

const ProfileScreen = (): JSX.Element => {
	const dispatch = useDispatch();
	const { fullName, birthDay, photo } = useAppSelector((state) => state.USER);
	const [isEditMode, setIsEditMode] = useState(false);
	const [userName, setUserName] = useState(fullName);
	const [date, setDate] = useState(new Date(birthDay));
	const [userPhoto, setUserPhoto] = useState(photo);

	const handleEditPress = () => {
		setIsEditMode(true);
	};

	const handleCancelPress = () => {
		setIsEditMode(false);
		setUserPhoto(photo);
	};

	const handleApplyUpdates = () => {
		dispatch(
			setUser({
				fullName: userName,
				birthDay: date.toString(),
				photo: userPhoto,
			}),
		);
		setIsEditMode(false);
	};

	return (
		<SafeAreaView style={styles.mainContainer}>
			<View style={styles.container}>
				<ProfilePhoto isEditMode={isEditMode} photo={userPhoto} setPhoto={setUserPhoto} />
				<ProfileInfo
					isEditMode={isEditMode}
					userName={userName}
					setUserName={setUserName}
					date={date}
					setDate={setDate}
				/>
			</View>
			<View style={styles.controlContainer}>
				<ProfileControl
					isEditMode={isEditMode}
					handleCancelPress={handleCancelPress}
					handleApplyUpdates={handleApplyUpdates}
					handleEditPress={handleEditPress}
				/>
			</View>
		</SafeAreaView>
	);
};

export default ProfileScreen;
