import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import dateFormat from 'dateformat';
import TextInput from '@components/TextInput/TextInput';
import styles from './ProfileInfo.style';

interface IProps {
	isEditMode: boolean;
	userName: string;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
	date: Date;
	setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ProfileInfo = ({ isEditMode, userName, setUserName, date, setDate }: IProps): JSX.Element => {
	return (
		<View style={styles.container}>
			<TextInput
				value={userName}
				setValue={setUserName}
				label="Full name"
				placeholder="Enter your full name"
				disabled={!isEditMode}
			/>
			{isEditMode ? (
				<>
					<Text style={styles.text}>Date Of Birth</Text>
					<DatePicker date={date} onDateChange={setDate} mode="date" />
				</>
			) : (
				<TextInput
					value={dateFormat(date, 'mmmm dd, yyyy')}
					setValue={setUserName}
					label="Date Of Birth"
					placeholder=""
					disabled
				/>
			)}
		</View>
	);
};

export default ProfileInfo;
