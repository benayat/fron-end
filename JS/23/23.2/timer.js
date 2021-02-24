const timeDisplay = document.createElement("h2");
timeDisplay.style.textAlign = "center";
timeDisplay.style.fontSize = "10vw";
document.body.appendChild(timeDisplay);
function timer() {
  let timeLeft = 7100;
  setInterval(() => {
    if (timeLeft <= 0) {
      timeDisplay.innerHTML = "done!";
    } else {
      timeDisplay.innerHTML = `${Math.floor(timeLeft / 3600)}:${Math.floor(
        (timeLeft % 3600) / 60
      )}:${Math.floor(Math.floor((timeLeft % 3600) % 60))} `;
    }
    timeLeft -= 1;
  }, 1000);
}
timer();
