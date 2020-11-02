let process_limit_input = 5;

//*****Algorithm Processes******//
function Producer(process_no) {
	console.log('Process no.' + process_no + ' is produced.');
}

function Consumer(process_no) {
	console.log('Process no.' + process_no + ' is consumed.');
}
//********************************//


//*********Worker Thread**********//
Producer(process_limit_input);
//********************************//
