let process_limit_input = 5;

//*****Algorithm Processes******//
function Producer(process_no) {
	console.log('Process no.' + process_no + ' is produced.');
}

function Consumer(process_no) {
	console.log('Process no.' + process_no + ' is consumed.');
}
//********************************//

//***Random Function to generate process***//
function GenerateRandomProcess() {
  let random_process = Math.floor((Math.random() * 5) + 1);
  return random_process;
}


function OptionToProcess() {
  let process_type = Math.floor((Math.random() * 2) + 1);

  //console.log(process_type);

  if (process_type==1) {
    Producer(GenerateRandomProcess());
  }
  else {
    Consumer(GenerateRandomProcess());
  }
}
//********************************//

//*********Worker Thread**********//
OptionToProcess();
//********************************//
