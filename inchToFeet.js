// Normal Process
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 200;
const dadaFeet = dadaInches / 12;
console.log(dadaFeet);

// Function Method
function inchToFeet(inches) {
	const feet = inches / 12;
	return feet;
}

const output = inchToFeet(344);
console.log(output);

console.log(inchToFeet(234));

const dadaInches2 = 400;
const dadaFeet2 = inchToFeet(dadaInches2);
console.log("Dada Feet", dadaFeet2);
