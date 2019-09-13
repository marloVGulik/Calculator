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
	localAll = "";
	numberPart = "";
	for (var i = 0; i < all.length; i++) {
		if(typeof all[i] == 'string') {
			if(all[i] == "Times") {
				localAll = calculateOld();
				oldCalculation = "Times";
			} else if(all[i] == 'Devide') {
				localAll = calculateOld();
				oldCalculation = "Devide";
			} else if(all[i] == 'Add') {
				localAll = calculateOld();
				oldCalculation = "Add";
			} else if(all[i] == 'Minus') {
				localAll = calculateOld();
				oldCalculation = "Minus";
			} else if(all[i] == 'Final') {
				localAll = calculateOld();
				oldCalculation = "Final";
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
	if(oldCalculation == "Final") {
		console.log("FINAL");
	} else if(oldCalculation == "Minus") {
		console.log(numberPartOld + " minus " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) - parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "Add") {
		console.log(numberPartOld + " plus " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) + parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "Devide") {
		console.log(numberPartOld + " devide " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) / parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "Times") {
		console.log(numberPartOld + " times " + numberPart);
		number = parseInt(localAll);
		localAll = parseInt(numberPartOld) * parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	}

	return localAll;
}

function clear() {
	localAll = "";
	document.getElementById("showSum").innerHTML = " ";
	console.log("Cleared screen");
}