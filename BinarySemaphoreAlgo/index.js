var lock = 1;
var i0 = 1;
var i1 = 1;

const inRQ = 1;
const inSQ = 2;
const inCS = 3;
const inCQ = 4;
var semaphore = 1;
var semArea = document.getElementById("sem");

document.getElementById("reg");
document.getElementById("loc");
function check() {
	return Boolean(lock);
}

// async function verify(val) {
// 	if (val == "p0") {
// 		i0++;
// 		if (i0 == 3) {
// 			document.getElementById("reg").value = "Register: 0";
// 			document.getElementById("loc").value = "Lock: 0";
// 		}
// 		if (i0 == 4) {
// 			alert("Process Finished");
// 			location.reload();
// 		}
// 		if (i0 == 1 && i1 == 0) {
// 			console.log("hello here");
// 			document.getElementById("reg").value = "Register: 0";
// 			document.getElementById("loc").value = "Lock: 1";
// 		}
// 		if (i0 == 1 && i1 == 1) {
// 			i0--;
// 			moveright(val);
// 			document.getElementById("reg").value = "Register: 1";
// 			document.getElementById("loc").value = "Lock: 1";
// 			await sleep(2000);
// 			alert("Deadlock");
// 			location.reload();
// 		} else if (i0 == 1 && i1 == 2) {
// 			console.log("1 and 2");
// 			document.getElementById("reg").value = "Register: 1";
// 			document.getElementById("loc").value = "Lock: 1";
// 			moveright(val);
// 		} else if (i0 == 2 && i1 == 3) {
// 			document.getElementById("loc").value = "Lock: 1";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i0 == 3 && i1 == 2) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i0 == 2 && i1 == 2) {
// 			alert("P0 needs to wait for P1 to finish");
// 			i0--;
// 		} else if (i0 == 4 && i1 == 2) {
// 			document.getElementById("loc").value = "Lock: 1";
// 			document.getElementById("reg").value = "Register: 0";
// 		} else if (i0 == 3 && i1 == 3) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i1 == 3 && i0 == 3) {
// 			document.getElementById("loc").value = "Lock: 0";
// 		} else if (i0 == 4 && i1 == 2) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i0 == 4 && i1 == 4) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			alert("Process Finished");
// 			location.reload();
// 		} else {
// 			moveright(val);
// 		}
// 	} else {
// 		i1++;
// 		if (i1 == 3) {
// 			document.getElementById("reg").value = "Register: 0";
// 			document.getElementById("loc").value = "Lock: 0";
// 		}
// 		if (i1 == 4) {
// 			alert("Process Finished");
// 			location.reload();
// 		}
// 		if (i0 == 0 && i1 == 1) {
// 			console.log("hello here");
// 			document.getElementById("reg").value = "Register: 0";
// 			document.getElementById("loc").value = "Lock: 1";
// 		}
// 		if (i0 == 1 && i1 == 1) {
// 			--i1;
// 			moveright(val);
// 			document.getElementById("reg").value = "Register: 1";
// 			document.getElementById("loc").value = "Lock: 1";
// 			await sleep(2000);
// 			alert("Deadlock");
// 			location.reload();
// 		} else if (i1 == 3 && i0 == 3) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i1 == 1 && i0 == 2) {
// 			console.log("1 and 2");
// 			document.getElementById("reg").value = "Register: 1";
// 			document.getElementById("loc").value = "Lock: 1";
// 			moveright(val);
// 		} else if (i0 == 2 && i1 == 2) {
// 			alert("P1 needs to wait for P0 to finish");
// 			i1--;
// 		} else if (i1 == 1 && i0 == 3) {
// 			document.getElementById("reg").value = "Register: 0";
// 			document.getElementById("loc").value = "Lock: 1";
// 			moveright(val);
// 		} else if (i0 == 2 && i1 == 3) {
// 			document.getElementById("loc").value = "Lock: 1";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i0 == 3 && i1 == 2) {
// 			document.getElementById("loc").value = "Lock: 1";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i1 == 2 && i0 == 4) {
// 			console.log("hello");
// 			document.getElementById("loc").value = "Lock: 1";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i1 == 3 && i0 == 1) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			moveright(val);
// 		} else if (i0 == 2 && i1 == 4) {
// 			document.getElementById("loc").value = "Lock: 1";
// 			document.getElementById("reg").value = "Register: 0";
// 		} else if (i0 == 4 && i1 == 4) {
// 			document.getElementById("loc").value = "Lock: 0";
// 			document.getElementById("reg").value = "Register: 0";
// 			alert("Process Finished");
// 			location.reload();
// 		} else {
// 			moveright(val);
// 		}
// 	}
// }
async function verify(val) {
	if (val == "p0") {
		if (i0 == inRQ) {
			if (semaphore == 1) {
				semaphore = 0;
				i0 = 3;
				console.log(val[1]);
				moveToSemaphore(val);
				semArea.innerHTML = semaphore;
			} else {
				moveright(val);
				i0 = 2;
			}
		} else if (i0 == inSQ) {
			if (semaphore == 1) {
				moveright(val);
				i0 = 3;
				semaphore = 0;
				semArea.innerHTML = semaphore;
			} else {
				alert("wait for the process to complete!");
			}
		} else if (i0 == inCS) {
			moveright(val);
			semaphore = 1;
			i0 = 4;
			semArea.innerHTML = semaphore;
		} else if (i0 == inCQ) {
			alert(`process ${val} is already completed!`);
		}
	}
	if (val == "p1") {
		if (i1 == inRQ) {
			if (semaphore == 1) {
				console.log(val[1]);
				moveToSemaphore(val);
				semaphore = 0;
				i1 = 3;
				semArea.innerHTML = semaphore;
			} else {
				moveright(val);
				i1 = 2;
			}
		} else if (i1 == inSQ) {
			if (semaphore == 1) {
				moveright(val);
				semaphore = 0;
				i1 = 3;
				semArea.innerHTML = semaphore;
			} else {
				alert("wait for the process to complete!");
			}
		} else if (i1 == inCS) {
			moveright(val);
			semaphore = 1;
			i1 = 4;
			semArea.innerHTML = semaphore;
		} else if (i1 == inCQ) {
			alert(`process ${val} is already completed!`);
		}
	}
}

async function moveleft(val) {
	const img = document.getElementById(val);
	img.style.left = `${img.offsetLeft - 170}px`;

	await sleep(1000);
}
async function moveToSemaphore(val) {
	var cs = document.getElementById("box2");

	lock = 0;

	const img = document.getElementById(val);
	img.style.left = `${img.offsetLeft + 340}px`;

	await sleep(1000);

	if (i0 == 3 || i1 == 3) {
		cs.style.borderColor = "#ff4136";
	} else {
		cs.style.borderColor = "#2ecc40";
	}
}
async function moveright(val) {
	var cs = document.getElementById("box2");

	lock = 0;

	const img = document.getElementById(val);
	img.style.left = `${img.offsetLeft + 170}px`;

	await sleep(1000);

	if (i0 == 3 || i1 == 3) {
		cs.style.borderColor = "#ff4136";
	} else {
		cs.style.borderColor = "#2ecc40";
	}
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
