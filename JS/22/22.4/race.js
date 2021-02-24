const firstTableRow = document.querySelector("#player1-race");
const secondTableRow = document.querySelector("#player2-race");

function carMove(car) {
  let current = car.querySelector(".active");
  let newOne = current.nextElementSibling;
  current.classList.remove("active");
  newOne.classList.add("active");
  const announceWinner = document.createElement("h1");
  announceWinner.style.textAlign = "center";

  if (newOne.classList.contains("finish")) {
    firstTableRow.parentElement.parentElement.nextElementSibling.insertAdjacentElement(
      "afterend",
      announceWinner
    );
    announceWinner.innerHTML = `${car.id.split("-")[0]} wins!`;
    const timeDisplay = document.createElement("h2");
    announceWinner.insertAdjacentElement("afterend", timeDisplay);
    timeDisplay.style.textAlign = "center";
    setTimeout(function () {
      let timeLeft = 5;
      setInterval(() => {
        if (timeLeft <= 0) {
          window.location.reload();
        } else {
          timeDisplay.innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
      }, 1000);
    }, 3000);
  }
}

function makeAMove(event) {
  switch (event.key) {
    case "ArrowRight":
      carMove(firstTableRow);
      break;
    case "d":
      carMove(secondTableRow);
      break;
    default:
      break;
  }
}

window.addEventListener("keyup", makeAMove);
