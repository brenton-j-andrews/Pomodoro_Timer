// Select timer elements
let timer_screen = document.getElementById("timer-screen");
let start_btn = document.getElementById("start-btn");
let sessionLength = document.getElementById("session-length");
let sessionCount = document.getElementById("session-count");
let shortBreak = document.getElementById("short-break-length");
let longBreak = document.getElementById("long-break-length");

// Global variables.
let intervalID;
let totalSessionLength;


// Start button -> start timer script.
start_btn.addEventListener("click", function() {

    let timer_data = {
            sessionLength: sessionLength.value * 60,
            sessionCount: sessionCount.value,
            shortBreak: shortBreak.value * 60,
            longBreak: longBreak.value * 60,
    }

    let studyLen = timer_data.sessionLength;
    let breakLen = timer_data.shortBreak;
    let longBreakLen = timer_data.longBreak;
    let currentSession = timer_data.sessionCount * 2;
    let isBreak = false;

    intervalID = setInterval( function() {

        if (!isBreak) {
            incrementTimerDisplay(studyLen);
            studyLen--;

            if (studyLen === 0) {
                currentSession--;
                isBreak = true;
                studyLen = timer_data.sessionLength;
            }
        } 

        else if (isBreak && currentSession != 1) {
            incrementTimerDisplay(breakLen);
            breakLen--;

            if (breakLen === 0) {
                isBreak = false;
                breakLen = timer_data.shortBreak;
                currentSession--;
            }
        }

        else {
            console.log(currentSession);
            incrementTimerDisplay(longBreakLen);
            longBreakLen--;

            if (longBreakLen === 0) {
                currentSession--;
            }
        }

        if (currentSession === 0) {
            clearInterval(intervalID);
            timer_screen.textContent = "00:00";
        }

    }, 1000);
});

// Pause button -> pause interval.
let pause_btn = document.getElementById("pause-btn");
pause_btn.addEventListener("click", () => {
    clearInterval(intervalID);
});

// Refresh button -> refresh page with refresh(), restore default values.
let refresh_btn = document.getElementById("refresh-btn");
refresh_btn.addEventListener("click", refresh, false);

function refresh() {
    reload = location.reload();
    sessionLength.value = 25;
    sessionCount.value = 4;
    shortBreak.value = 5;
    longBreak.value = 30;
}


// Update timer screen display.
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