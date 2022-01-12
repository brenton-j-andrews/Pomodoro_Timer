// Select timer elements
let timer_screen = document.getElementById("timer-screen");
let sessionLength = 1 * 60; // Will take value from form later. Form value in minutes, converted to seconds.


// Select timer buttons, add eventListeners.
let start_btn = document.getElementById("start-btn");
start_btn.addEventListener("click", startTimer);


// Start timer.
function startTimer() {
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

