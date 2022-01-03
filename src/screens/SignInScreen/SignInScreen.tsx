import React from 'react';
import { StatusBar, View } from 'react-native';
import { Text } from 'react-native-elements';

const SignInScreen = (): JSX.Element => (
	<>
		<StatusBar barStyle="dark-content" backgroundColor="white" />
		<View>
			<Text>This is Sign in screen</Text>
		</View>
	</>
);

export default SignInScreen;
