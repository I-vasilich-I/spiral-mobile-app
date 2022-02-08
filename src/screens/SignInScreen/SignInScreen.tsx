import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, Button } from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { showMessage } from 'react-native-flash-message';
import useAppSelector from '@src/redux/hooks/useAppSelector';
import SAGA_ACTIONS from '@src/redux/sagas/sagaActions/sagaActions';
import { setError } from '@src/redux/store/auth/authSlice';
import { VALIDATION_MESSAGES } from '@src/constants';
import { validateValue } from '@src/helpers';
import TextInput from '@components/TextInput/TextInput';
import styles from './SignInScreen.style';

const { passwordMessage, emailMessage } = VALIDATION_MESSAGES;

const SignInScreen = (): JSX.Element => {
	const dispatch = useDispatch();
	const { isLoading, authError } = useAppSelector((state) => state.AUTH);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const errorDuration = 3000;
	const isEmailValid = validateValue(email, 'email');
	const isPasswordValid = validateValue(password, 'password');
	const emailValidation = isEmailValid || email === '' ? '' : emailMessage;
	const passwordValidation = isPasswordValid || password === '' ? '' : passwordMessage;
	const isLoginButtonDisabled = isLoading || !(isEmailValid && isPasswordValid);

	const handleLogin = () => {
		dispatch({ type: SAGA_ACTIONS.AUTH_USER, payload: { email, password } });
	};

	useEffect(() => {
		if (!authError) {
			return undefined;
		}

		showMessage({
			message: authError,
			type: 'danger',
		});

		const timer = setTimeout(() => {
			dispatch(setError(''));
		}, errorDuration);

		return () => clearTimeout(timer);
	}, [authError, dispatch]);

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<ScrollView contentContainerStyle={styles.formContainer}>
				<View style={styles.formBody}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Login</Text>
					</View>
					<View>
						<TextInput
							value={email}
							setValue={setEmail}
							label="Email"
							placeholder="Your email address"
							autoComplete
							keyboard="email-address"
							errorMessage={emailValidation}
						/>
						<TextInput
							value={password}
							setValue={setPassword}
							label="Password"
							placeholder="Password"
							autoComplete
							secure
							errorMessage={passwordValidation}
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
					<Button
						title="Login"
						onPress={handleLogin}
						containerStyle={styles.LoginButton}
						disabledStyle={styles.disabledStyle}
						loading={isLoading}
						disabled={isLoginButtonDisabled}
					/>
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
