let Process0 = 0;
// let interestP0 = false;
let Process1 = 1;
// let interestP1 = false;

var interest = [false, false];

function EntrySection(process) {
	let other;
	other = 1 - process;
	interest[process] = true;
	turn = process;

	//////////////////
	if (turn == 1) {
		P1Move(100)
	}
	else {
		P0Move(100)
	}
	/////////////////

	if (interest[other] = true && turn == process) {
		setTimeout(function () {

		}, 5000);
	}

	CriticalSection(process)
}

function CriticalSection(process) {

	////////////////////
	if (process == 0) {
		P0Move(200)
	}
	else {
		P1Move(300)
	}
	////////////////////


	var millisecondsToWait = 2500;
	setTimeout(function () {
		if (process == 0) {
			P1Move(100)
		}
	}, millisecondsToWait);

	ExitSection(process)
}

function ExitSection(process) {

	////////////////////
	if (process == 0) {
		P0Move(500)
		CriticalSection(1 - process)
	}
	else {
		P1Move(500)
	}
	////////////////////

	interest[process] = false;
}

function P0Move(valuetomove1) {
	var elem1 = document.getElementById("P000");
	var pos1 = 0;
	var id1 = setInterval(frame1, 5);
	function frame1() {
		if (pos1 == 1000) {
			clearInterval(id1);
		} else {
			pos1++;
			elem1.style.left = pos1 + "px";
		}
	}
}

function P1Move(valuetomove2) {
	var elem2 = document.getElementById("P001");
	var pos2 = 0;
	var id2 = setInterval(frame2, 5);
	function frame2() {
		if (pos2 == 1000) {
			clearInterval(id2);
		} else {
			pos2++;
			elem2.style.left = pos2 + "px";
		}
	}
}

EntrySection(Process0);
