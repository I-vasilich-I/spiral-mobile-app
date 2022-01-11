import React from 'react';
import FlashMessage from 'react-native-flash-message';
import styles from './AppFlashMessage.style';

const AppFlashMessage = () => {
	return <FlashMessage position="bottom" duration={5000} style={styles.container} titleStyle={styles.title} />;
};

export default AppFlashMessage;
