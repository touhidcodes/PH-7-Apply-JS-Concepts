function sumNumbers(number) {
	let sum = 0;
	for (let i = 0; i < number; i++) {
		sum += i;
	}
	return sum;
}

const input = 10;
const sumTotal = sumNumbers(input);
console.log(sumTotal);
