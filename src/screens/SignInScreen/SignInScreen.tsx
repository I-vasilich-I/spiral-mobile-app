import React, { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SignInScreen.style';

const SignInScreen = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (text: string) => {
		setEmail(text);
	};

	const handlePasswordChange = (text: string) => {
		setPassword(text);
	};

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<ScrollView contentContainerStyle={styles.formContainer}>
				<View style={styles.formBody}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Login</Text>
					</View>
					<View>
						<Input
							value={email}
							onChangeText={handleEmailChange}
							placeholder="Your email address"
							label="Email"
							autoCompleteType
							keyboardType="email-address"
							inputStyle={styles.inputStyle}
							errorStyle={styles.errorStyle}
						/>
						<Input
							value={password}
							onChangeText={handlePasswordChange}
							placeholder="Password"
							label="Password"
							secureTextEntry
							autoCompleteType
							inputStyle={styles.inputStyle}
							errorStyle={styles.errorStyle}
						/>
						<Button
							title="Forgot password"
							onPress={() => console.log('forgot password')}
							type="clear"
							containerStyle={styles.passwordButton}
							titleStyle={styles.passwordButtonTitle}
						/>
					</View>
				</View>
				<View style={styles.formControl}>
					<Button title="Login" onPress={() => console.log('login')} containerStyle={styles.LoginButton} />
					<View style={styles.extraContainer}>
						<Text style={styles.extraTitle}>Let's test 2 ways to log in</Text>
						<View style={styles.buttonsContainer}>
							<Button
								title="Touch ID"
								onPress={() => console.log('touch id')}
								icon={<MaterialCommunityIcon name={'fingerprint'} size={18} style={styles.idButtonIcon} />}
								type="clear"
								containerStyle={styles.idButtonContainer}
								titleStyle={styles.idButtonTitle}
							/>
							<Button
								title="Face ID"
								onPress={() => console.log('face id')}
								icon={<MaterialCommunityIcon name={'face'} size={18} style={styles.idButtonIcon} />}
								type="clear"
								containerStyle={styles.idButtonContainer}
								titleStyle={styles.idButtonTitle}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

export default SignInScreen;
