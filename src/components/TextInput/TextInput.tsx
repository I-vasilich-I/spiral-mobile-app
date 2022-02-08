/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { KeyboardTypeOptions, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './TextInput.style';

interface IProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	label: string;
	placeholder: string;
	renderError?: boolean;
	keyboard?: KeyboardTypeOptions | undefined;
	secure?: boolean;
	autoComplete?: boolean;
	errorMessage?: string;
	disabled?: boolean;
	inputStyle?: StyleProp<TextStyle> | null;
	inputContainerStyle?: StyleProp<ViewStyle> | null;
	containerStyle?: StyleProp<ViewStyle> | null;
}

const TextInput = ({
	value,
	setValue,
	label,
	placeholder,
	renderError = true,
	secure = false,
	autoComplete = true,
	keyboard = undefined,
	errorMessage = '',
	disabled = false,
	inputStyle = null,
	inputContainerStyle = null,
	containerStyle = null,
}: IProps) => {
	const handleValueChange = (text: string) => {
		setValue(text);
	};

	return (
		<Input
			inputContainerStyle={inputContainerStyle}
			value={value}
			onChangeText={handleValueChange}
			placeholder={placeholder}
			label={label}
			labelStyle={styles.labelStyle}
			secureTextEntry={secure}
			autoCompleteType={autoComplete}
			keyboardType={keyboard}
			errorMessage={errorMessage}
			inputStyle={inputStyle || styles.inputStyle}
			errorStyle={styles.errorStyle}
			disabled={disabled}
			containerStyle={containerStyle}
			renderErrorMessage={renderError}
		/>
	);
};

export default TextInput;
