const hoursPara = document.getElementById("hours");
const minutesPara = document.getElementById("minutes");
const secondsPara = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
// get hours, minutes, seconds

let hours = 0;
let minutes = 0;
let seconds = 0;
let stopwatch;

function updateTime() {
    seconds++;

    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }

    if (minutes > 59) {
        minutes = 0;
        hours++;
    }

    secondsPara.innerHTML = seconds.toString().padStart(2, "0");
    minutesPara.innerHTML = minutes.toString().padStart(2, "0");
    hoursPara.innerHTML = hours.toString().padStart(2, "0");
}

startBtn.addEventListener("click", () => {
    if (!stopwatch) {
        stopwatch = setInterval(updateTime, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    if (stopwatch) {
        clearInterval(stopwatch);
        stopwatch = null;
    }
});

resetBtn.addEventListener("click", () => {
    if (stopwatch) {
        clearInterval(stopwatch);
        stopwatch = null;
    }
    hours = 0;
    minutes = 0;
    seconds = 0;

    hoursPara.innerHTML = "00";
    minutesPara.innerHTML = "00";
    secondsPara.innerHTML = "00";
});
