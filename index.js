// var Session = require("./algo/algorithm.js");	// for node
import { Session } from "./algo/algorithm.js";

var subBut = document.getElementById("submitButton");

// object of session class.
var session;

subBut.addEventListener("click", () => {
	let semaVal = document.getElementById("initial_Sema").value;
	if (!semaVal) alert("enter the semaphore value greater than 0.");
	// use fancy pop up instead of alert
	else {
		session = new Session(semaVal);
	}
});

var increButton = document.getElementById("increButton");
increButton.addEventListener("click", () => {
	session.addCapacity(1);
});
