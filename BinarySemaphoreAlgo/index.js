var size = 1;

var i0 = 1;
var i1 = 1;
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

// map for process;
var processes = new Map();
processes.set("p0", { value: 1 });
processes.set("p1", { value: 1 });

async function addProcesses() {
	size++;
	let temp = size.toString();
	let name = "P" + temp; // p2
	let buttonName = "b" + temp; // b2
	processes.set(name, { value: 1 });
	margin_top += 55;
	if(temp>=5){
		box_height +=55;
	}
	
	final_box_height = `${box_height}px`;
	
	final_margin = ` ${margin_top}px`; 
	button_style = `style = "position: absolute; height: auto; width: auto; margin-top: ${final_margin};  margin-left: 115px; " `;
	 
	
	
	
	insertButton.innerHTML += `<button ${button_style} class="right" id=${buttonName} onclick="verify(${name})">${name}</button>`;
	// button pos variable

	image_style = `style = "width: 38px;
	margin-top: ${final_margin};
	transition-duration: 2s; "`;
	insertImg.innerHTML += `<img ${image_style} id=${name} src="img/p${size}.png" />`;

	
    document.getElementById('box1').style.height = final_box_height;
	document.getElementById('box2').style.height = final_box_height;
	document.getElementById('entry').style.height = final_box_height;
	document.getElementById('exit').style.height = final_box_height;
	
	

	
}

async function verify(val) {
	if (processes.get(val).value == inRQ) {
		if (semaphore == 1) {
			semaphore = 0;
			processes.get(val).value = 3;
			console.log(val[1]);
			moveToSemaphore(val);
			semArea.innerHTML = semaphore;
		} else {
			moveright(val);
			processes.get(val).value = 2;
		}
	} else if (processes.get(val).value == inSQ) {
		if (semaphore == 1) {
			moveright(val);
			processes.get(val).value = 3;
			semaphore = 0;
			semArea.innerHTML = semaphore;
		} else {
			alert("wait for the process to complete!");
		}
	} else if (processes.get(val).value == inCS) {
		moveright(val);
		semaphore = 1;
		processes.get(val).value = 4;
		semArea.innerHTML = semaphore;
	} else if (processes.get(val).value == inCQ) {
		alert(`process ${val} is already completed!`);
	}
}

async function moveToSemaphore(val) {
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
