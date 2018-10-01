//-------------javaScript-------------

// custom function

function calculateTip() {
	//store the input data
	
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;
	
	//Quick validation
	
	if(billAmount === "" || serviceQuality == 0) {
		window.alert("please enter the amount to get this baby running..");
		return; // this will prevent function to running
	}
	//check to see if the input is empty or less than equal to 1
	
	if(numPeople === "" || numPeople <= 1) {
		numPeople = 1;
		
		document.getElementById("each").style.display = "none";
	}
	else {
		document.getElementById("each").style.display = "block";
	}
	//Do some math
	
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100 / 100);
	total = total.toFixed(2);
	//Display the tip
	
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
	
}

// hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// calculate the tip amount by clicking the function

document.getElementById("calculate").onclick = function() { calculateTip(); };
