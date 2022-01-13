// Select timer elements
let timer_screen = document.getElementById("timer-screen");
// let sessionLength = 1 * 60; // Will take value from form later. Form value in minutes, converted to seconds.
let timer_started = false;

timer_screen.textContent = "25:00";


// Select timer buttons, add eventListeners.

// Start button (submit and click events)
let start_btn = document.getElementById("start-btn");
let timer_values = document.getElementById("timer-form").elements;

console.log(timer_values);

start_btn.addEventListener("click", (event) => {
    if (!timer_started) {
        timer_started = true;
        let timer_data = {
            sessionLength: document.getElementById("session-length").value * 60,
            sessionCount: document.getElementById("session-number").value,
            shortBreak: document.getElementById("short-break-length").value * 60,
            longBreak: document.getElementById("long-break-length").value * 60,
        }
        console.log(timer_data.sessionCount);
        startTimer(timer_data.sessionLength);
    }
});

let pause_btn = document.getElementById("pause-btn");
pause_btn.addEventListener("click", () => {
    console.log("do this button later!");
});

let refresh_btn = document.getElementById("refresh-btn");
refresh_btn.addEventListener("onClick", function () {
    window.location.reload();
});


// Start timer.
function startTimer(sessionLength) {
    let increment = setInterval( function() {
        incrementTimerDisplay(sessionLength);
        sessionLength--;
    }, 1000);
    setTimeout(() => {clearInterval(increment)}, sessionLength * 1000);
}

// Change timer screen display.
function incrementTimerDisplay(sessionLength) {
    let minutes = Math.floor(sessionLength / 60).toString();
    let seconds = (sessionLength % 60).toString();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timer_screen.textContent = `${minutes}:${seconds}`;
}

