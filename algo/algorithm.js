// var Queue = require("./queue.js");	// for node

import { Queue } from "./queue.js";

function sleep(milli) {
	const DateTime = Date.now();
	let currDateTime = null;
	do {
		currDateTime = Date.now();
	} while (currDateTime - DateTime < milli);
}
export class Session {
	constructor(semaphore) {
		this.ReadyQueue = new Queue();
		this.SuspendedQueue = new Queue();
		this.CompletedQueue = new Queue();
		this.CriticalQueue = new Queue();
		this.semaphore = semaphore;
		this.capacity = semaphore;

		// insert all procedure in readyQueue
		for (let i = 1; i <= this.semaphore; i++) {
			this.ReadyQueue.enqueue(i);
		}

		this.start();
	}

	addCapacity(count) {
		this.capacity += count;
		for (let i = capacity - count + 1; i <= capacity; i++) {
			this.ReadyQueue.enqueue(i);
		}
	}

	down() {
		this.semaphore = this.semaphore - 1;

		let temp = this.ReadyQueue.front();
		this.ReadyQueue.dequeue();

		if (this.semaphore < 0) {
			// put process in suspended list from ready queue.
			this.SuspendedQueue.enqueue(temp);
		} else {
			// put process in critical section from ready queue.
			this.CriticalQueue.enqueue(temp);
		}
	}

	up() {
		this.semaphore = this.semaphore + 1;

		if (this.semaphore <= 0) {
			// fetch from suspended queue
			let temp = this.SuspendedQueue.front();
			this.SuspendedQueue.dequeue();

			// again queuing in readyQueue.
			this.ReadyQueue.enqueue(temp);
		}
	}

	start() {
		while (true) {
			if (this.ReadyQueue.isEmpty) break;
			this.down();
			this.up();
		}
	}
}

// module.exports = { Session };
