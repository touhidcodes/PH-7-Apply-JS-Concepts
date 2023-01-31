function factorial(number) {
	let result = 1;
	for (let i = number; i > 0; i--) {
		result *= i;
	}
	return result;
}

const input = 7;
const Total = factorial(input);
console.log(Total);
