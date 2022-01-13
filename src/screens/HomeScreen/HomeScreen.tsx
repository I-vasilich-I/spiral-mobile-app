import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getGreeting } from '@src/helpers';
import AccountCard from './AccountCard/AccountCard';
import styles from './HomeScreen.style';

const HomeScreen = (): JSX.Element => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.greeting}>{getGreeting('Mike')}</Text>
				<ScrollView style={styles.scrollView}>
					<AccountCard />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
