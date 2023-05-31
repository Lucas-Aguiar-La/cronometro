let min = 0;
let sec = 0;
let millSec = 0;

let startPause = true;
let cron;

// Botões
function start() {
  pause();
  if (startPause) {
    startPause = false;
    clearInterval(cron);
  } else {
    startPause = true;
    cron = setInterval(() => {
      timer();
    }, 10);
  }
}

function pause() {
  clearInterval(cron);
}

function reset() {
  let min = 0;
  let sec = 0;
  let millSec = 0;
}

document.getElementById("h").innerHTML = "00";
document.getElementById("m").innerHTML = "00";
document.getElementById("s").innerHTML = "00";
document.getElementById("ms").innerHTML = "00";

function timer() {
  if ((ms += 10) == 1000) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
  if (m == 60) {
    m = 0;
    h++;
  }
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}
