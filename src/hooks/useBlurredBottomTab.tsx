import React from 'react';
import { Platform } from 'react-native';
import BottomTabNavigation from '@src/navigation/BottomTabNavigation';

const useBlurredBottomTab = (): React.FC | any => {
	let BlurPackage;

	if (Platform.OS === 'ios') {
		BlurPackage = require('@react-native-community/blur');
	}

	if (BlurPackage) {
		const { BlurView } = BlurPackage;
		return (
			<BlurView>
				<BottomTabNavigation />
			</BlurView>
		);
	}

	return BottomTabNavigation;
};

export default useBlurredBottomTab;
