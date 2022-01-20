import TextInput from '@components/TextInput/TextInput';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './SearchTransactions.style';

interface IProps {
	disabled?: boolean;
}

const SearchTransactions = ({ disabled = false }: IProps): JSX.Element => {
	const [filter, setFilter] = useState('');

	return (
		<View style={styles.mainContainer}>
			<TextInput
				value={filter}
				setValue={setFilter}
				label={''}
				placeholder={'Search transactions'}
				inputContainerStyle={styles.inputContainer}
				containerStyle={styles.iContainer}
				inputStyle={styles.inputText}
				disabled={disabled}
			/>
			<Button
				title="Filter by"
				type="outline"
				buttonStyle={styles.button}
				titleStyle={styles.title}
				containerStyle={styles.buttonContainer}
				disabled={disabled}
			/>
		</View>
	);
};

export default SearchTransactions;
