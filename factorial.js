function factorial(number) {
	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i;
	}
	return result;
}

const input = 7;
const Total = factorial(input);
console.log(Total);
