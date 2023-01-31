function isLeapYear(year) {
	const reminder = year % 4;
	if (reminder === 0) {
		// console.log("This year is leap year", year);
		return true;
	} else {
		// console.log("This year is  not a leap year", year);
		return false;
	}
}

const givenYear = 2000;
const output = isLeapYear(givenYear);
console.log(output);
