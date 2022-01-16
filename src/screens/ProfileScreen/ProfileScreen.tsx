import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ProfileScreen.style';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

const ProfileScreen = (): JSX.Element => {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<ProfilePhoto />
		</SafeAreaView>
	);
};

export default ProfileScreen;
