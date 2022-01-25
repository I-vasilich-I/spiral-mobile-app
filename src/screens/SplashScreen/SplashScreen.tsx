import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import * as BootSplash from 'react-native-bootsplash';
import MaskedView from '@react-native-community/masked-view';
import IMAGES from '@src/assets/images';
import styles from './SplashScreen.style';

const bootSplashLogo = IMAGES.LOGO_SPLASH_SCREEN;

const SplashScreen: React.FC = ({ children }) => {
	const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
	const loadingProgress = useRef(new Animated.Value(0)).current;

	const opacityClearToVisible = {
		opacity: loadingProgress.interpolate({
			inputRange: [0, 15, 30],
			outputRange: [0, 0, 1],
			extrapolate: 'clamp',
			// clamp means when the input is 30-100, output should stay at 1
		}),
	};

	const imageScale = {
		transform: [
			{
				scale: loadingProgress.interpolate({
					inputRange: [0, 10, 100],
					outputRange: [1, 0.8, 70],
				}),
			},
		],
	};

	const appScale = {
		transform: [
			{
				scale: loadingProgress.interpolate({
					inputRange: [0, 100],
					outputRange: [1.1, 1],
				}),
			},
		],
	};

	const fullScreenBackgroundLayer = bootSplashLogoIsLoaded ? (
		<View style={[StyleSheet.absoluteFill, styles.fullScreenBackgroundLayer]} />
	) : null;

	const fullScreenWhiteLayer = bootSplashLogoIsLoaded ? (
		<View style={[StyleSheet.absoluteFill, styles.fullScreenWhiteLayer]} />
	) : null;

	const handleImageLoad = () => {
		setBootSplashLogoIsLoaded(true);
	};

	useEffect(() => {
		if (!bootSplashLogoIsLoaded) {
			return;
		}

		const init = async () => {
			try {
				await BootSplash.hide();

				Animated.timing(loadingProgress, {
					toValue: 100,
					duration: 1000,
					useNativeDriver: true,
				}).start();
			} catch (error) {
				console.error(error);
			}
		};

		init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bootSplashLogoIsLoaded]);

	return (
		<View style={styles.fullScreen}>
			{fullScreenBackgroundLayer}
			<MaskedView
				style={styles.fullScreen}
				maskElement={
					<View style={styles.centeredFullScreen}>
						<Animated.Image
							style={[styles.maskImageStyle, imageScale]}
							source={bootSplashLogo}
							onLoadEnd={handleImageLoad}
						/>
					</View>
				}>
				{fullScreenWhiteLayer}
				<Animated.View style={[opacityClearToVisible, appScale, styles.fullScreen]}>{children}</Animated.View>
			</MaskedView>
		</View>
	);
};

export default SplashScreen;
