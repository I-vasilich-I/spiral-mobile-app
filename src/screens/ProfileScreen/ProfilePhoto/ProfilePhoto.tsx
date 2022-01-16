import React from 'react';
import { View } from 'react-native';
import { FAB, Image, useTheme } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useAppSelector from '@src/redux/hooks/useAppSelector';
import SAGA_ACTIONS from '@src/redux/sagas/sagaActions/sagaActions';
import styles from './ProfilePhoto.style';

const ProfilePhoto = (): JSX.Element => {
	const dispatch = useDispatch();
	const { photo } = useAppSelector((state) => state.USER);
	const { theme } = useTheme();

	const handleImagePick = () => {
		dispatch({ type: SAGA_ACTIONS.PICK_PHOTO });
	};

	const handleCamera = () => {
		dispatch({ type: SAGA_ACTIONS.TAKE_PHOTO });
	};

	return (
		<View>
			<Image source={{ uri: photo }} containerStyle={styles.imageContainer} />
			<View style={styles.imageFABContainer}>
				<FAB
					visible={true}
					icon={<MaterialIcons name="add-a-photo" size={20} color="white" />}
					color={theme.colors?.primary}
					size="small"
					onPress={handleCamera}
				/>
				<FAB
					visible={true}
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
