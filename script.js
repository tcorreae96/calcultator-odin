const screenDisplay = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", handleClick))

function handleClick(e) {
	switch (e.target.innerText) {
		case "+":
			console.log("pressed +");
			break;
		case "-":
			console.log("pressed -");
			break;
		case "/":
			console.log("pressed /");
			break;
		case "*":
			console.log("pressed *");
			break;
		case "=":
			console.log("pressed =");
			console.log(screenDisplay.innerText);
			break;
		case "C":
			console.log("pressed C");
			clearDisplay();
			break;
		case ",":
			console.log("pressed ,");
			break;
		default:
			updateDisplay(e.target.innerText);
			console.log("default case");
			break;
	}
}
function checkDisplay() {
	const regex = /^0+/g;
	screenDisplay.innerText = screenDisplay.innerText.replaceAll(regex, "");
}

function clearDisplay() {
	screenDisplay.innerText = "0";
}

function updateDisplay(num) {
	screenDisplay.innerText += num;
	checkDisplay();
	return num; 
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	if (num1 === 0 || num2 === 0) {
		return alert("This is gonna take a while, please wait sitted.");
	}
	return num1 / num2;
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