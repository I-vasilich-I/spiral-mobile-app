import React from 'react';
import { Button } from 'react-native-elements';
import styles from './ProfileControl.style';

interface IProps {
	isEditMode: boolean;
	handleCancelPress: () => void;
	handleApplyUpdates: () => void;
	handleEditPress: () => void;
}

const ProfileControl = ({
	isEditMode,
	handleCancelPress,
	handleApplyUpdates,
	handleEditPress,
}: IProps): JSX.Element => {
	return (
		<>
			{isEditMode ? (
				<>
					<Button title="CANCEL" onPress={handleCancelPress} containerStyle={styles.button} />
					<Button title="APPLY UPDATES" onPress={handleApplyUpdates} containerStyle={styles.button} />
				</>
			) : (
				<Button title="EDIT PROFILE" onPress={handleEditPress} containerStyle={styles.wideButton} />
			)}
		</>
	);
};

export default ProfileControl;
