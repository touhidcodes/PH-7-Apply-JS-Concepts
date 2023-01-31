function isLeapYear(year) {
	const reminder = year % 4;
	if (reminder === 4) {
		// console.log("This year is leap year", year);
		return true;
	} else {
		// console.log("This year is  not a leap year", year);
		return false;
	}
}
