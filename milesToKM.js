function milesToKM(miles) {
	const kilometer = miles * 1.609;
	return kilometer;
}

console.log(milesToKM(34));

const inputMiles = 567;
const outputKM = milesToKM(inputMiles);
console.log(outputKM);
