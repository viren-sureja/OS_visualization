var i0 = 1;
var i1 = 1;

const inRQ = 1;
const inSQ = 2;
const inCS = 3;
const inCQ = 4;
var semaphore = 1;
var semArea = document.getElementById("sem");

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
