import React from 'react';
import { ListItem, Text, useTheme } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AmountText from '@components/AmountText/AmountText';
import styles from './CardRow.style';

interface IProps {
	title: string;
	subtitle: string;
	amount: number;
	icon?: JSX.Element | null;
	bottomDivider?: boolean;
	onPress?: () => void;
}

const CardRow = ({ title, subtitle, amount, icon = null, onPress = undefined, bottomDivider = true }: IProps) => {
	const { theme } = useTheme();
	const containerStyle = bottomDivider ? { ...styles.container, paddingBottom: 10 } : styles.container;

	return (
		<TouchableOpacity onPress={onPress} style={styles.view}>
			<ListItem
				bottomDivider={bottomDivider}
				hasTVPreferredFocus={undefined}
				tvParallaxProperties={undefined}
				containerStyle={containerStyle}>
				<ListItem.Content>
					<ListItem.Content style={styles.titleContainer}>
						<ListItem.Title style={styles.margin}>
							<Text style={styles.title}>{title}</Text>
						</ListItem.Title>
						{icon}
					</ListItem.Content>
					<ListItem.Subtitle>
						<Text style={styles.subtitle}>{subtitle}</Text>
					</ListItem.Subtitle>
				</ListItem.Content>
				<ListItem.Content style={styles.right}>
					<ListItem.Title>
						<AmountText amount={amount} />
					</ListItem.Title>
					<ListItem.Chevron tvParallaxProperties={undefined} color={theme.colors?.primary} size={24} />
				</ListItem.Content>
			</ListItem>
		</TouchableOpacity>
	);
};

export default CardRow;
