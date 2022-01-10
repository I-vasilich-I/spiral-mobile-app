/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './TextInput.style';

interface IProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	label: string;
	placeholder: string;
	keyboard?: KeyboardTypeOptions | undefined;
	secure?: boolean;
	autoComplete?: boolean;
	errorMessage?: string;
}

const TextInput = ({
	value,
	setValue,
	label,
	placeholder,
	secure = false,
	autoComplete = true,
	keyboard = undefined,
	errorMessage = '',
}: IProps) => {
	const handleValueChange = (text: string) => {
		setValue(text);
	};

	return (
		<Input
			value={value}
			onChangeText={handleValueChange}
			placeholder={placeholder}
			label={label}
			secureTextEntry={secure}
			autoCompleteType={autoComplete}
			keyboardType={keyboard}
			errorMessage={errorMessage}
			inputStyle={styles.inputStyle}
			errorStyle={styles.errorStyle}
		/>
	);
};

export default TextInput;
