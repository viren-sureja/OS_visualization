// importing queue for ready and suspended.
// import { Queue } from "./asset/queue.js";

// class queue
class Queue {
	// Array is used to implement a Queue
	constructor() {
		this.items = [];
	}

	// enqueue function
	enqueue(element) {
		// adding element to the queue
		this.items.push(element);
	}

	// dequeue function
	dequeue() {
		// removing element from the queue
		// returns underflow when called
		// on empty queue
		if (this.isEmpty()) return null;
		return this.items.shift();
	}

	// front function
	front() {
		// returns the Front element of
		// the queue without removing it.
		if (this.isEmpty()) return null;
		return this.items[0];
	}

	// isEmpty function
	isEmpty() {
		// return true if the queue is empty.
		return this.items.length == 0;
	}

	// printQueue function
	printQueue() {
		var str = "";
		for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
		return str;
	}
}

var suspendedQ = new Queue();

var size = 1;
var dummySize = -1;

var margin_top = 135;
var box_height = 300;

const inRQ = 1;
const inSQ = 2;
const inCS = 3;
const inCQ = 4;
var semaphore = 1;
var semArea = document.getElementById("sem");
semArea.innerHTML = 1;

var insertImg = document.getElementById("insertImg");

var insertButton = document.getElementById("insertButton");

var printSuspendedQueue = document.getElementById("printSuspendedQueue");
var printCriticalSection = document.getElementById("printCriticalSection");
var printCompletedQueue = document.getElementById("printCompletedQueue");

// map for process;
var processes = new Map();
processes.set("p0", { value: 1 });
processes.set("p1", { value: 1 });

async function addProcesses() {
	size++;
	let temp = size.toString();
	let name = "p" + temp; // p2
	let buttonName = "b" + temp; // b2

	processes.set(`${name}`, { value: 1 });

	margin_top += 55;
	if (temp >= 5) {
		box_height += 55;
	}

	final_box_height = `${box_height}px`;

	final_margin = ` ${margin_top}px`;
	button_style = `style = "position: absolute; height: auto; width: auto; margin-top: ${final_margin};  margin-left: 115px; " `;

	insertButton.innerHTML += `<button ${button_style} class="right" id=${buttonName} onclick='verify("${name}")'>${name}</button>`;

	image_style = `style = "width: 38px;
	margin-top: ${final_margin};
	transition-duration: 2s; "`;
	insertImg.innerHTML += `<img ${image_style} id=${name} src="img/${name}.png" />`;

	document.getElementById("box1").style.height = final_box_height;
	document.getElementById("box2").style.height = final_box_height;
	document.getElementById("entry").style.height = final_box_height;
	document.getElementById("exit").style.height = final_box_height;
}

async function verify(val) {
	// val is value send by the button

	let suspendedfEle = suspendedQ.front();
	let suspendedIsEmpty = suspendedQ.isEmpty();

	if (processes.get(val).value == inRQ) {
		if (semaphore == 1) {
			semaphore = 0;
			processes.get(val).value = 3;
			moveToCriticalSection(val);
			printCriticalSection.innerHTML = val;
			semArea.innerHTML = semaphore;
		} else {
			moveright(val);
			processes.get(val).value = 2;
			suspendedQ.enqueue(val);
		}
	} else if (processes.get(val).value == inSQ) {
		if (semaphore == 1) {
			moveright(suspendedfEle);
			processes.get(suspendedfEle).value = 3;
			printCriticalSection.innerHTML = suspendedfEle;
			semaphore = 0;
			semArea.innerHTML = semaphore;
			suspendedQ.dequeue();
		} else {
			alert("wait for the process to complete!");
		}
	} else if (processes.get(val).value == inCS) {
		if (suspendedIsEmpty) {
			moveright(val);
			semaphore = 1;
			processes.get(val).value = 4;
			printCriticalSection.innerHTML = "";
			printCompletedQueue.innerHTML += `${val} `;
		} else {
			moveToComplete(val, suspendedfEle);
			semaphore = 0;
			processes.get(val).value = 4;
			printCompletedQueue.innerHTML += `${val} `;
			processes.get(suspendedfEle).value = 3;
			printCriticalSection.innerHTML = suspendedfEle;
			suspendedQ.dequeue();
		}
		semArea.innerHTML = semaphore;
	} else if (processes.get(val).value == inCQ) {
		alert(`process ${val} is already completed!`);
	}
	printSuspendedQueue.innerHTML = suspendedQ.printQueue();
}

async function moveToComplete(completeVal, suspendedVal) {
	var cs = document.getElementById("box2");

	const img1 = document.getElementById(completeVal);
	img1.style.marginLeft = `${img1.offsetLeft + 170}px`;
	await sleep(1000);

	const img2 = document.getElementById(suspendedVal);
	img2.style.marginLeft = `${img2.offsetLeft + 170}px`;
	await sleep(1000);

	if (!semaphore) {
		cs.style.borderColor = "#ff4136";
	} else {
		cs.style.borderColor = "#2ecc40";
	}
}
async function moveToCriticalSection(val) {
	var cs = document.getElementById("box2");

	const img = document.getElementById(val);
	img.style.marginLeft = `${img.offsetLeft + 340}px`;

	await sleep(1000);

	if (!semaphore) {
		cs.style.borderColor = "#ff4136";
	} else {
		cs.style.borderColor = "#2ecc40";
	}
}
async function moveright(val) {
	var cs = document.getElementById("box2");

	const img = document.getElementById(val);
	img.style.marginLeft = `${img.offsetLeft + 170}px`;

	await sleep(1000);

	if (!semaphore) {
		cs.style.borderColor = "#ff4136";
	} else {
		cs.style.borderColor = "#2ecc40";
	}
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
