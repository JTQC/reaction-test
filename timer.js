export let tens = 0;
export let seconds = 0;
export let isStarted = false;
export let interval;

export let start = () => {
	document.getElementById('start').innerHTML = "Stop";
	interval = setInterval(timer, 10);
}

export let stop = () => {
    document.getElementById('start').innerHTML = "Start";
    clearInterval(interval);
}

export let timer = () => {
	tens++;

  if(tens <= 9){
  	document.getElementById('tens').innerHTML = "0" + tens;
  }
  else if(tens > 9 && tens < 99){
  	document.getElementById('tens').innerHTML = tens;
  }
  else if(tens >= 99){
    tens = 0;
    document.getElementById('tens').innerHTML = "0" + tens;
    seconds++;
    document.getElementById('seconds').innerHTML = "0" + seconds;
  }

  if(seconds > 9) {
  	document.getElementById('seconds').innerHTML = seconds;
  }

}

document.getElementById('start').onclick = ()=> {
	if(isStarted === false){
  	start();
    isStarted = true;
  }
  else {
  	stop();
    isStarted = false;
  }
}

document.getElementById('reset').onclick = ()=> {
  tens = 0;
  seconds = 0;
  document.getElementById('tens').innerHTML = "0" + tens;
  document.getElementById('seconds').innerHTML = "0" + seconds;
}
