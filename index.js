// var Session = require("./algo/algorithm.js");	// for node
import { Session } from "./algo/algorithm.js";

var subBut = document.getElementById("submitButton");

var session; // object of session class.

subBut.addEventListener("click", () => {
	let semaVal = document.getElementById("initial_Sema").value;
	if (!semaVal) alert("enter the semaphore value greater than 0.");
	// use fancy pop up instead of alert
	else {
		session = new Session(semaVal);
	}
});
