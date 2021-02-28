const timer = document.querySelector("h1");
timer.style.textAlign = "center";
timer.style.fontSize = "10vw";

function parseToTime(number) {
  return `${Math.floor(number / 6e3)}:${Math.floor(
    (number % 6e3) / 100
  )}:${Math.floor(Math.floor(number % 6e3) % 100)}`;
}

function parseToBaseTime(str) {
  dateArray = str.split(":");
  return dateArray[0] * 6e3 + dateArray[1] * 1e2 + dateArray[2];
}

window.watch;
window.time = 0;

function startWatch(event) {
  watch = setInterval(watchHandler, 10);
  time = 0;
}
function resumeWatch(event) {
  watch = setInterval(watchHandler, 10);
}
function stopTheWatch(event) {
  event.target.previousElementSibling.removeEventListener("click", startWatch);
  clearInterval(watch);
  event.target.previousElementSibling.addEventListener("click", resumeWatch);
}
function watchHandler() {
  if (time >= 6e4 * 60) return;
  timer.innerHTML = parseToTime(time);
  time++;
}

document.querySelector(".buttons").style.position = "relative";
document.querySelector(".buttons").style.left = "45%";
const startButton = document.querySelector(".buttons").firstElementChild;
startButton.innerHTML = "start";
const stopButton = document.querySelector(".buttons").lastElementChild;
stopButton.innerHTML = "stop!";

startButton.addEventListener("click", startWatch);
let stopValue;
stopButton.addEventListener("click", stopTheWatch);

function start(event, state = "start") {
  countTime(event, state);
}

function resume(event, state = "resume") {
  countTime(event, state);
}
function stop(event, state = "stop") {
  countTime(event, state);
}
