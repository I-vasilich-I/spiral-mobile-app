import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import * as BootSplash from 'react-native-bootsplash';
import IMAGES from '@src/assets/images';
import styles from './SplashScreen.style';

const bootSplashLogo = IMAGES.LOGO_SPLASH_SCREEN;

const SplashScreen = (): JSX.Element => {
	const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
	const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
	const opacity = useRef(new Animated.Value(1)).current;
	const translateY = useRef(new Animated.Value(0)).current;

	const init = async () => {
		try {
			await BootSplash.hide();

			Animated.stagger(250, [
				Animated.spring(translateY, {
					useNativeDriver: true,
					toValue: -50,
				}),
				Animated.spring(translateY, {
					useNativeDriver: true,
					toValue: Dimensions.get('window').height,
				}),
			]).start();

			Animated.timing(opacity, {
				useNativeDriver: true,
				toValue: 0,
				duration: 150,
				delay: 350,
			}).start(() => {
				setBootSplashIsVisible(false);
			});
		} catch (error) {
			setBootSplashIsVisible(false);
		}
	};

	useEffect(() => {
		bootSplashLogoIsLoaded && init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bootSplashLogoIsLoaded]);

	return (
		<>
			{bootSplashIsVisible && (
				<Animated.View style={[StyleSheet.absoluteFill, styles.bootsplash, { opacity }]}>
					<Animated.Image
						source={bootSplashLogo}
						fadeDuration={0}
						resizeMode="contain"
						onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
						style={[styles.logo, { transform: [{ translateY }] }]}
					/>
				</Animated.View>
			)}
		</>
	);
};

export default SplashScreen;
