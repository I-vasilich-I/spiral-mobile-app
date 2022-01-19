import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import styles from './Message.style';

interface IMessage {
	message: string;
}

const Message = ({ message }: IMessage): JSX.Element => (
	<View style={styles.message}>
		<Icon name="warning" type="ionicon" tvParallaxProperties={undefined} size={16} color="green" />
		<Text style={styles.messageText}>{message}</Text>
	</View>
);

export default Message;
