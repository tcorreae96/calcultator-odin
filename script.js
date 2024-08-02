const screenDisplay = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
let isReadyForNextNumber = false;
let seq = [];

buttons.forEach(button => button.addEventListener("click", handleClick));

function handleClick(e) {
	switch (e.target.innerText) {
		case "+":
			addSeq(screenDisplay.innerText, e.target.innerText);
			isReadyForNextNumber = true;
			break;
		case "-":
			addSeq(screenDisplay.innerText, e.target.innerText);
			isReadyForNextNumber = true;
			break;
		case "/":
			addSeq(screenDisplay.innerText, e.target.innerText);
			isReadyForNextNumber = true;
			break;
		case "*":
			addSeq(screenDisplay.innerText, e.target.innerText);
			isReadyForNextNumber = true;
			break;
		case "=":
			addSeq(screenDisplay.innerText, e.target.innerText);
			isReadyForNextNumber = true;
			operate();
			break;
		case "C":
			clearDisplay();
			break;
		default:
			updateDisplay(e.target.innerText);
			break;
	}
}

function addSeq(num, op) {
	seq.push(num);
	seq.push(op);
	console.log(seq);
}

function checkDisplay() {
	const regex = /^0+/g;
	screenDisplay.innerText = screenDisplay.innerText.replaceAll(regex, "");
}

function checkDot() {
	const regex = /,.*(,)/;
	if (screenDisplay.innerText.search(regex) > 0) {
		screenDisplay.innerText = screenDisplay.innerText.substr(0, screenDisplay.innerText.length - 1);
	}
}

function clearDisplay() {
	screenDisplay.innerText = "0";
}

function clearSeq() {
	seq = [];
}


function updateDisplay(num) {
	if (isReadyForNextNumber) clearDisplay();
	screenDisplay.innerText += num;
	checkDisplay();
	checkDot();
	isReadyForNextNumber = false;
	return num; 
}

function add(arr) {
	return +arr[0] + +arr[2];
}

function subtract(arr) {
	return arr[0] - arr[2];
}

function multiply(arr) {
	return arr[0] * arr[2];
}

function divide(arr) {
	if (arr[0] === 0 || arr[2] === 0) {
		return alert("This is gonna take a while, please wait sitted.");
	}
	return arr[0] / arr[2];
}

function operate() {
	console.log('inside operate');
	if (seq.length === 4) {
		switch (seq[1]) {
			case "+":
				screenDisplay.innerText = add(seq);
				break;
			case "-":
				screenDisplay.innerText = subtract(seq);
				break;
			case "*":
				screenDisplay.innerText = multiply(seq); 
				break;
			case "/":
				screenDisplay.innerText = divide(seq); 
				break;
		}
		clearSeq();
	}
	clearSeq();
}