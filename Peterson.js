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
	
	while(interest[other]==true && turn==process)
	{
		
	}
	
	CriticalSection(process)
}

function CriticalSection(process) {
	var millisecondsToWait = 2500;
	setTimeout(function() {
		// Uncommenty the next line to see how dynamically the algorithm works, NOTE it is an instance of the working and not the working itself.
		// EntrySection(1-process);
	}, millisecondsToWait);
	
	ExitSection(process)
}

function ExitSection(process) {
	interest[process]=false;
	console.log("Completed Process" + process);
}


EntrySection(Process0);
EntrySection(Process1);
