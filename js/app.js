const element1 = document.getElementById("btn1");
element1.addEventListener("click", textAppear1);

const element2 = document.getElementById("btn2");
element2.addEventListener("click", textAppear2);

const element3 = document.getElementById("btn3");
element3.addEventListener("click", textAppear3);


function textAppear1 () {
	if (document.getElementById("shevron1").className == "shevron") {
		document.getElementById("shevron1").className = "shevron_rotate";
		document.getElementById("hidden1").className = "open-text"
	}
	else {document.getElementById("shevron1").className = "shevron";
	document.getElementById("hidden1").className = "hidden-text"
	}
}	

function textAppear2 () {
	if (document.getElementById("shevron2").className == "shevron") {
		document.getElementById("shevron2").className = "shevron_rotate";
		document.getElementById("hidden2").className = "open-text"
	}
	else {document.getElementById("shevron2").className = "shevron";
	document.getElementById("hidden2").className = "hidden-text"
	}
}	

function textAppear3 () {
	if (document.getElementById("shevron3").className == "shevron") {
		document.getElementById("shevron3").className = "shevron_rotate";
		document.getElementById("hidden3").className = "open-text"
	}
	else {document.getElementById("shevron3").className = "shevron";
	document.getElementById("hidden3").className = "hidden-text"
	}
}	

