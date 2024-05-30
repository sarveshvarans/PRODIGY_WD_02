let timer; // Variable to store the interval ID
let isRunning = false; // Flag to track if the stopwatch is running
let seconds = 0, minutes = 0, hours = 0; // Variables to store time

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateStopwatch, 1000); // Update time every second
  }
}

function pauseStopwatch() {
  clearInterval(timer); // Stop the timer
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer); // Stop the timer
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.querySelector('.display');
  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.querySelector('.start-btn').addEventListener('click', startStopwatch);
document.querySelector('.pause-btn').addEventListener('click', pauseStopwatch);
document.querySelector('.reset-btn').addEventListener('click', resetStopwatch);
