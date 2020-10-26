// var Session = require("./algo/algorithm.js");	// for node
import { Session } from "./algo/algorithm.js";

let obj = new Session(5);

var subBut = document.getElementById("submitButton");
var semaClass = document.getElementById("semaClass");

subBut.addEventListener("click", () => {
	var semaVal = parseInt(document.getElementById("initial_Sema").value);
	semaClass.innerHTML = semaVal;

	var time = setInterval(() => {
		if (semaVal <= 20) clearInterval(time);
		semaClass.innerHTML = semaVal--;
	}, 500);
});
