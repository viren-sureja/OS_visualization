let process_limit_input = 5;
let process_time_milliseconds = 90;

let randomness_factor = 0;

function Producer(process_no) {
	console.log('Process no.' + process_no + ' is produced.');
}

function Consumer(process_no) {
	console.log('Process no.' + process_no + ' is consumed.');
}



function GenerateRandomProcess() {
  let random_process = Math.floor((Math.random() * process_limit_input) + 1);
  return random_process;
}

function OptionToProcess() {
  let process_type = Math.floor((Math.random() * randomness_factor) + 1);

  //console.log(process_type);

  if (process_type==1) {
    randomness_factor = 3;
    Producer(GenerateRandomProcess());
  }
  else {
    randomness_factor = 0;
    Consumer(GenerateRandomProcess());
  }
}

let iteration = 0;
while(iteration<=process_time_milliseconds) {
  OptionToProcess();
  iteration++;
}
