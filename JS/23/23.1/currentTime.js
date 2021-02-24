setInterval(myTimer, 1000);
const time = document.createElement("h1");
time.style.textAlign = "center";
document.body.appendChild(time);

function myTimer() {
  let d = new Date();
  time.innerHTML = `${d.toLocaleTimeString()}`.slice(0, -2);
}
