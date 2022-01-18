import React from 'react';
import { View } from 'react-native';
import { FAB, Image, useTheme } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import photoService from '@src/services/photo';
import styles from './ProfilePhoto.style';

interface IProps {
	isEditMode: boolean;
	photo: string;
	setPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const ProfilePhoto = ({ isEditMode, photo, setPhoto }: IProps): JSX.Element => {
	const { theme } = useTheme();

	const handleImagePick = async () => {
		try {
			const res = await photoService.pickPhoto();
			if (!res) {
				return;
			}
			setPhoto(res);
		} catch (error) {
			console.error(error);
		}
	};

	const handleCamera = async () => {
		try {
			const res = await photoService.takePhoto();
			if (!res) {
				return;
			}
			setPhoto(res);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<Image source={{ uri: photo }} containerStyle={styles.imageContainer} />
			<View style={styles.imageFABContainer}>
				<FAB
					visible={isEditMode}
					icon={<MaterialIcons name="add-a-photo" size={20} color="white" />}
					color={theme.colors?.primary}
					size="small"
					onPress={handleCamera}
				/>
				<FAB
					visible={isEditMode}
					icon={<MaterialIcons name="add-photo-alternate" size={20} color="white" />}
					color={theme.colors?.primary}
					size="small"
					onPress={handleImagePick}
				/>
			</View>
		</View>
	);
};

export default ProfilePhoto;
