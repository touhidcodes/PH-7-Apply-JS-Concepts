const arrayNumbers = [12, 34, 45, 56, 67, 78, 89];

function getSumOfArray(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		const element = numbers[i];
		sum += element;
		// sum = sum = element;
		// console.log(sum);
	}
	return sum;
}

const output = getSumOfArray(arrayNumbers);
console.log(output);
