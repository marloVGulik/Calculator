var all = [];
var text = "";
var number;
var numberPart = "";
var numberPartOld = "";;
var oldCalculation = "";
var localAll;

function addNumber(number) {
	all.push(number);
	text = "";
	localAll = "";
	for (var i = 0; i < all.length; i++) {
		if(typeof all[i] == 'string') {
			if(all[i] == "Times") {
				console.log("Added: " + all[i]);
				localAll = calculateOld();
				oldCalculation = "Times";
			} else if(all[i] == 'Devide') {
				console.log("Added: " + all[i]);
				localAll = calculateOld();
				oldCalculation = "Devide";
			} else if(all[i] == 'Add') {
				console.log("Added: " + all[i]);
				localAll = calculateOld();
				oldCalculation = "Add";
			} else if(all[i] == 'Minus') {
				console.log("Added: " + all[i]);
				localAll = calculateOld();
				oldCalculation = "Minus";
			}
		} else {
			console.log("Added: " + all[i]);
			numberPart += all[i]
		}
		console.log(all[i] + i);
		text += all[i];
	}
	document.getElementById("showSum").innerHTML = text;
}


function calculateOld(CurrentNumber) {
	if(oldCalculation == "Times") {
		console.log(numberPartOld + " times " + numberPart);
		number = parseInt(numberPartOld) * parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "Devide") {
		console.log(numberPartOld + " devide " + numberPart);
		number = parseInt(numberPartOld) / parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "Add") {
		console.log(numberPartOld + " plus " + numberPart);
		number = parseInt(numberPartOld) + parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	} else if(oldCalculation == "Minus") {
		console.log(numberPartOld + " minus " + numberPart);
		number = parseInt(numberPartOld) - parseInt(numberPart);
		numberPartOld = numberPart;
		numberPart = "";
	}
	all.push(number);
}

function clear() {
	localAll = "";
	document.getElementById("showSum").innerHTML = " ";
	console.log("Cleared screen");
}