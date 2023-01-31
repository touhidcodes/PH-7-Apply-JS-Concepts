const arrayNumbers = [12, 34, 45, 56, 67, 78, 89, 12, 45, 34, 33, 99, 66, 67];

function getOddNumbers(numbers) {
	const odd = [];
	for (let i = 0; i < numbers.length; i++) {
		const element = numbers[i];
		// console.log(i, element);
		if (element % 2 !== 0) {
			// console.log("odd");
			odd.push(element);
		}
	}
	return odd;
}

const oddNumbers = getOddNumbers(arrayNumbers);
console.log(oddNumbers);

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

const output = getSumOfArray(oddNumbers);
console.log(output);
