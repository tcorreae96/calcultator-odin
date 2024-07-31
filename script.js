function add(arr) {
	const newArr = splitArr(arr);
	return newArr[0] + newArr [2];
}

function subtract(arr) {
	const newArr = splitArr(arr);
	return newArr[0] - newArr [2];
}

function multiply(arr) {
	const newArr = splitArr(arr);
	return newArr[0] * newArr [2];
}

function divide(arr) {
	const newArr = splitArr(arr);
	return newArr[0] / newArr [2];
}

function splitArr(arr) {
	return arr.split(" ");
}

function operate(arr) {
	switch (arr[1]) {
		case "+":
			return add(arr);
		case "-":
			return subtract(arr);
		case "*":
			return multiply(arr); 
		case "/":
			return divide(arr); 
		default:
			break;
	}
}