import dateFormat from 'dateformat';

const getGreeting = (user: string) => {
	const today = new Date();
	const hours = today.getHours();
	const isMorning = hours >= 4 && hours < 12;
	const isAfternoon = hours >= 12 && hours < 17;
	const isEvening = hours >= 17 && hours < 24;
	const date = dateFormat(today, 'mmm dS, yyyy');
	if (isMorning) {
		return `Good Morning ${user} | ${date}`;
	}
	if (isAfternoon) {
		return `Good Afternoon ${user} | ${date}`;
	}
	if (isEvening) {
		return `Good Evening ${user} | ${date}`;
	}
	return `Good Night ${user} | ${date}`;
};

export { getGreeting };
