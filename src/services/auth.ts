const authService = {
	signIn(email = '', password = ''): Promise<string | null> {
		const regEx = /@itechart-group\.com$/i;
		const isValidEmail = regEx.test(email);
		const isValidPassword = password === 'admin';

		return new Promise((resolve, _) => {
			setTimeout(() => {
				if (isValidEmail && isValidPassword) {
					resolve('notReallyAJwtToken');
				}
				resolve(null);
			}, 3000);
		});
	},
};

export default authService;
