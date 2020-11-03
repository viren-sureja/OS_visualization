// var Queue = require("./queue.js");	// for node
import { Queue } from "./queue.js";

// var to display different queues (DOM)
var readyQ = document.getElementById("readyQ");
var semaV = document.getElementById("semaVal");
var suspendQ = document.getElementById("suspendedQ");
var criticalQ = document.getElementById("criticalQ");
var completedQ = document.getElementById("completedQ");
var stepguide = document.getElementById("stepguide");
var capaVal = document.getElementById("capaVal");

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Session {
	constructor(iniSema) {
		this.ReadyQueue = new Queue();
		this.SuspendedQueue = new Queue();
		this.CompletedQueue = new Queue();
		this.CriticalQueue = new Queue();
		this.semaphore = parseInt(iniSema);
		this.capacity = parseInt(iniSema);

		// insert all procedure in readyQueue
		for (let i = 1; i <= this.semaphore; i++) {
			stepguide.innerHTML += `<div>-> adding process p${i} in ready queue.</div>`;
			this.ReadyQueue.enqueue(i);
		}

		// using methods to show the updation
		this.updateSemaphore();
		this.updateReadyQ();
		this.updateCapacity();

		this.start();
	}

	// sleep function to delay
	// sleep(milli) {
	// 	const DateTime = Date.now();
	// 	let currDateTime = null;
	// 	do {
	// 		currDateTime = Date.now();
	// 	} while (currDateTime - DateTime < milli);
	// }

	// updating methods
	async updateReadyQ() {
		readyQ.innerHTML = this.ReadyQueue.printQueue();
		await sleep(3000);
	}
	async updateSemaphore() {
		console.log("inside semaphore");
		semaV.innerHTML = this.semaphore;
		await sleep(3000);
		console.log("outside semaphore");
	}
	updateCriticalQ() {
		criticalQ.innerHTML = this.CriticalQueue.printQueue();
	}
	updateSuspendedQ() {
		suspendQ.innerHTML = this.SuspendedQueue.printQueue();
	}
	updateCompletedQ() {
		completedQ.innerHTML = this.CompletedQueue.printQueue();
	}
	async updateCapacity() {
		capaVal.innerHTML = this.capacity;
		await sleep(3000);
	}

	addCapacity() {
		this.capacity = parseInt(this.capacity + 1);
		this.semaphore = this.semaphore + 1;
		let temp = this.capacity;
		for (let i = temp - 1 + 1; i <= temp; i++) {
			stepguide.innerHTML += `<div>-> adding process p${i} in ready queue.</div>`;
			this.ReadyQueue.enqueue(i);
		}
		this.updateCapacity();
		this.updateReadyQ();
		this.start();
	}

	down() {
		stepguide.innerHTML += `<div>----> entered down <----</div>`;
		this.semaphore = this.semaphore - 1;
		stepguide.innerHTML += `<div>-> semaphore value: ${this.semaphore + 1} -> ${
			this.semaphore
		}.</div>`;
		this.updateSemaphore();

		let temp = this.ReadyQueue.front();
		this.ReadyQueue.dequeue();
		this.updateReadyQ();

		if (this.semaphore < 0) {
			// put process in suspended list from ready queue.
			this.SuspendedQueue.enqueue(temp);
			this.updateSuspendedQ();
			stepguide.innerHTML += `<div>-> process p${temp} exits suspended queue.</div>`;
		} else {
			// put process in critical section from ready queue.
			this.CriticalQueue.enqueue(temp);
			this.updateCriticalQ();
			stepguide.innerHTML += `<div>-> process p${temp} entered critical section.</div>`;
		}
		let temp2 = this.CriticalQueue.front();
		this.CriticalQueue.dequeue();
		stepguide.innerHTML += `<div>-> process p${temp2} exits critical section.</div>`;
		this.updateCriticalQ();
		this.CompletedQueue.enqueue(temp2);
		stepguide.innerHTML += `<div>-> process p${temp2} entered completed queue.</div>`;
		this.updateCompletedQ();
	}

	up() {
		stepguide.innerHTML += `<div>----> entered up <----</div>`;
		this.semaphore = this.semaphore + 1;
		stepguide.innerHTML += `<div>-> semaphore value ${this.semaphore - 1} -> ${
			this.semaphore
		}.</div>`;
		this.updateSemaphore();

		if (this.semaphore <= 0) {
			// fetch from suspended queue
			let temp = this.SuspendedQueue.front();
			this.SuspendedQueue.dequeue();
			stepguide.innerHTML += `<div>-> process p${temp} exits suspended queue.</div>`;
			this.updateSuspendedQ();

			// again queuing in readyQueue.
			this.ReadyQueue.enqueue(temp);
			this.updateReadyQ();
			stepguide.innerHTML += `<div>-> process p${temp} entered ready queue.</div>`;
		}
	}

	start() {
		while (true) {
			if (this.ReadyQueue.isEmpty()) {
				stepguide.innerHTML += `<div>-> ready queue is empty.</div>`;
				console.log("readyQ empty!");
				break;
			}
			while (this.semaphore) this.down();
			while (this.semaphore < 0) this.up();
		}
		// can put pop up to show the processes is completed
	}
}

// module.exports = { Session };
