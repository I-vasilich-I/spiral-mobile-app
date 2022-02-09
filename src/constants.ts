import validator from 'validator';

const VALIDATE = {
	password: (passW: string): boolean => validator.isAlphanumeric(passW),
	email: validator.isEmail,
};

const VALIDATION_MESSAGES = {
	passwordMessage: '*use letters/numbers',
	emailMessage: '*use an email address',
};

export { VALIDATE, VALIDATION_MESSAGES };
