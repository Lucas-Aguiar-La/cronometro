let hour = 0;
let min = 0;
let sec = 0;
let millSec = 0;

let startPause = false;
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
  if (!startPause) {
    pause();
  }

  document.getElementById("h").innerHTML = returnData(0);
  document.getElementById("m").innerHTML = returnData(0);
  document.getElementById("s").innerHTML = returnData(0);
  document.getElementById("ms").innerHTML = returnData(0);

  hour = 0;
  min = 0;
  sec = 0;
  millSec = 0;
}

function timer() {
  millSec += 10;

  if (millSec === 1000) {
    millSec = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hour++;
  }

  document.getElementById("h").innerHTML = returnData(hour);
  document.getElementById("m").innerHTML = returnData(min);
  document.getElementById("s").innerHTML = returnData(sec);
  document.getElementById("ms").innerHTML = returnData(millSec);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}
