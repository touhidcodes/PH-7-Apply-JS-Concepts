function celsiusToFahrenheit(celsius) {
	const fahrenheit = celsius * 1.8 + 32;
	return fahrenheit;
}

console.log(celsiusToFahrenheit(100));

const temp = 23;
const outputFahrenheit = celsiusToFahrenheit(temp);
console.log(outputFahrenheit);
