function isEven(number) {
	const reminder = number % 2;
	// console.log(reminder);
	if (reminder == 0) {
		// console.log("Number is even");
		return true;
	} else {
		// console.log("Number is odd")
		return false;
	}
}

const myNumber = 235;
const output = isEven(myNumber);
console.log(output);
