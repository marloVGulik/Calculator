var all = [];
var text = "";
var numberTotal = 0;
var numberPart = "";
var numberPartOld = "";;
var oldCalculation = "";
var localAll;

function addNumber(number) {
	console.log("Added: " + number);
	all.push(number);
	text = "";
	localAll = "The answer will appear here";
	numberPart = "";
	for (var i = 0; i < all.length; i++) {
		if(typeof all[i] == 'string') {
			if(all[i] == "Pop") {
				console.log(all.pop());
			} else if(all[i] == "x") {
				localAll = calculateOld();
				oldCalculation = "x";
			} else if(all[i] == '/') {
				localAll = calculateOld();
				oldCalculation = "/";
			} else if(all[i] == '+') {
				localAll = calculateOld();
				oldCalculation = "+";
			} else if(all[i] == '-') {
				localAll = calculateOld();
				oldCalculation = "-";
			} else if(all[i] == '=') {
				localAll = calculateOld();
				oldCalculation = "=";
			}
		} else {
			numberPart += parseInt(all[i])
			console.log("Number = " + numberPart);
		}
		console.log(localAll);
		text += all[i];
	}
	document.getElementById("showSum").innerHTML = text;
	document.getElementById("showAnswer").innerHTML = localAll;
}


function calculateOld(CurrentNumber) {
	if(oldCalculation == "=") {
		console.log("=");
	} else if(oldCalculation == "-") {
		console.log(numberPartOld + " - " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) - parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "+") {
		console.log(numberPartOld + " + " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) + parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "/") {
		console.log(numberPartOld + " / " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) / parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "x") {
		console.log(numberPartOld + " x " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) * parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	}

	return localAll;
}

function clearElements(clearThem) {
	if(clearThem == true) {
		localAll = "";
		document.getElementById("showSum").innerHTML = "Start pressing buttons";
		console.log("Cleared screen");
		document.getElementById("showAnswer").innerHTML = "The answer will appear here";
		text = "";
		localAll = "";
		numberPart = "";
		all = [];
	}
}