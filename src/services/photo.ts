/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageSourcePropType } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const photoService = {
	async pickPhoto() {
		const res = await launchImageLibrary({ mediaType: 'photo' });
		if (!res.assets?.length) {
			return null;
		}

		const { uri } = res.assets[0];
		return uri as ImageSourcePropType;
	},
	async takePhoto() {
		const res = await launchCamera({ mediaType: 'photo', cameraType: 'front' });
		if (!res.assets?.length) {
			return null;
		}

		const { uri } = res.assets[0];
		return uri as ImageSourcePropType;
	},
};

export default photoService;
