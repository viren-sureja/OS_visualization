// var Queue = require("./queue.js");	// for node
import { Queue } from "./queue.js";

// var to display different queues (DOM)
var readyQ = document.getElementById("readyQ");
var semaV = document.getElementById("semaVal");
var suspendQ = document.getElementById("suspendedQ");
var criticalQ = document.getElementById("criticalQ");
var completedQ = document.getElementById("completedQ");
var capaVal = document.getElementById("capaVal");

export class Session {
	constructor(iniSema) {
		this.ReadyQueue = new Queue();
		this.SuspendedQueue = new Queue();
		this.CompletedQueue = new Queue();
		this.CriticalQueue = new Queue();
		this.semaphore = iniSema;
		this.capacity = iniSema;

		// insert all procedure in readyQueue
		for (let i = 1; i <= this.semaphore; i++) {
			this.ReadyQueue.enqueue(i);
		}

		// using methods to show the updation
		this.updateSemaphore();
		// setTimeout(function (this) {
		// 	semaV.innerHTML = this.semaphore;
		// }, 3000);
		console.log("before af sema");
		this.sleep(3000);
		console.log("before up ready");

		this.updateReadyQ();
		// setTimeout(function () {
		// 	this.updateReadyQ();
		// }, 5000);
		this.sleep(3000);
		console.log("before af ready");
		console.log("before up cap");

		this.updateCapacity();
		this.sleep(3000);
		console.log("before af cap");

		// setTimeout(function () {
		// 	this.updateCapacity();
		// }, 10000);

		// to start the session
		// this.start();
	}

	// sleep function to delay
	sleep(milli) {
		const DateTime = Date.now();
		let currDateTime = null;
		do {
			currDateTime = Date.now();
		} while (currDateTime - DateTime < milli);
	}

	// updating methods
	updateReadyQ() {
		readyQ.innerHTML = this.ReadyQueue.printQueue();
	}
	updateSemaphore() {
		semaV.innerHTML = this.semaphore;
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
	updateCapacity() {
		capaVal.innerHTML = this.capacity;
	}

	addCapacity(count) {
		this.capacity += count;
		for (let i = capacity - count + 1; i <= capacity; i++) {
			this.ReadyQueue.enqueue(i);
		}
		this.updateCapacity();
		this.updateReadyQ();
	}

	down() {
		console.log("inside down");
		this.semaphore = this.semaphore - 1;
		this.updateSemaphore();

		let temp = this.ReadyQueue.front();
		this.ReadyQueue.dequeue();
		this.updateReadyQ();

		if (this.semaphore < 0) {
			// put process in suspended list from ready queue.
			this.SuspendedQueue.enqueue(temp);
			this.updateSuspendedQ();
		} else {
			// put process in critical section from ready queue.
			this.CriticalQueue.enqueue(temp);
			this.updateCriticalQ();
		}
	}

	up() {
		console.log("inside up");
		this.semaphore = this.semaphore + 1;
		this.updateSemaphore();

		if (this.semaphore <= 0) {
			// fetch from suspended queue
			let temp = this.SuspendedQueue.front();
			this.SuspendedQueue.dequeue();
			this.updateSuspendedQ();

			// again queuing in readyQueue.
			this.ReadyQueue.enqueue(temp);
			this.updateReadyQ();
		}
	}

	start() {
		while (true) {
			console.log("inside while");

			if (this.ReadyQueue.isEmpty()) {
				console.log("readyQ empty!");
				break;
			} else {
				this.down();
				this.up();
			}
		}
		console.log("out of while");
		// can put pop up to show the processes is completed
	}
}

// module.exports = { Session };
