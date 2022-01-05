module.exports = {
	project: {
		ios: {},
		android: {}, // grouped into "project"
	},
	assets: ['./src/assets/fonts/'], // stays the same
	dependencies: {
		'@react-native-community/blur': {
			platforms: {
				android: null,
			},
		},
	},
};
