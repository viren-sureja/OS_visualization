var $output = $(".output")

var process_limit_input = 5;
var process_time_milliseconds = 90;
var ProcessStack = []

function StackFormingQueue() {
	for(var i=0;i<process_limit_input;i++) {
		ProcessStack.push(i);
	}
}


async function AcceptInput() {
  process_limit_input = document.getElementById("NoOfProcess").value;
  process_time_milliseconds = document.getElementById("ExecutionTime").value;

  //*********Worker Thread**********//
  let iteration = 0;
  StackFormingQueue();

  while (iteration <= process_time_milliseconds) {
    OptionToProcess();
    iteration++;
    await sleep(100);
  }
  //********************************//
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




//*****Algorithm Processes******//
function Producer(process_no) {
  ProcessStack.push(process_no);
  console.log('Process no.' + process_no + ' is produced.');
  $output.append("<section>" + 'Process no.' + process_no + ' is produced.' + "</section>");
}

function Consumer(process_no) {
  console.log('Process no.' + process_no + ' is consumed.');
  $output.append("<section>" + 'Process no.' + process_no + ' is consumed.' + "</section>");
}
//********************************//


//***Random Function to generate process***//
function GenerateRandomProcess() {
  let random_process = Math.floor((Math.random() * process_limit_input) + 1);
  return random_process;
}

function ExecuteRandomProcess() {
  let random_process = ProcessStack.pop();
  return random_process;
}

function OptionToProcess() {
  let process_type = Math.floor((Math.random() * 2) + 1);

  // console.log(process_type);

  if (process_type == 1) {
    Producer(GenerateRandomProcess());
  }
  else {
    Consumer(ExecuteRandomProcess());
  }
}
//********************************//
