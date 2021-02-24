const answer = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
console.log(answer);
const isCorrect = document.querySelector("#answer");
const curerntGuess = document.querySelector(".currentGuess");
const answerBox = document.querySelector(".isRightGuess");
const secondHeading = document.querySelector("h2");
const buttonPlayAgain = document.createElement("button");
buttonPlayAgain.innerHTML = `YES`;
buttonPlayAgain.addEventListener("click", (event) => {
  window.location.reload();
});

const container = document.querySelector(".container");

window.addEventListener("keydown", (event) => {
  if (!/^[a-zA-Z]$/.test(event.key)) {
    isCorrect.innerHTML = "Not a letter!";
  } else if (event.key != answer) {
    isCorrect.innerHTML = `Nope, wrong letter`;
    isCorrect.style.color = "red";

    if (curerntGuess.innerHTML === "") {
      curerntGuess.innerHTML += `${event.key}`;
    } else {
      curerntGuess.innerHTML += `,${event.key}`;
    }
  } else {
    answerBox.innerHTML = `${answer}`;
    isCorrect.innerHTML = `Right letter!`;
    isCorrect.style.color = "green";
    secondHeading.style.fontSize = "1rem";
    secondHeading.innerHTML = `would you like to play again?`;
    container.insertAdjacentElement("beforeend", buttonPlayAgain);
    curerntGuess.innerHTML = "";
  }
});
