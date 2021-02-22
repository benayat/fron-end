const instructionsP = document.createElement("p");
instructionsP.innerHTML = "How many smileys do you want to see?";
instructionsP.classList.add("paragraph");

const answerArea = document.createElement("textarea");
answerArea.classList.add("numberOfSmileys");
answerArea.style.height = "1rem";
answerArea.style.display = "inline";

const submit = document.createElement("button");
submit.classList.add("numberButton");
submit.innerHTML = "submit";

document.body.appendChild(instructionsP);
document.body.appendChild(answerArea);
document.body.appendChild(submit);

function handler(event) {
  debugger;

  document
    .querySelectorAll("img")
    .forEach((node) => node.parentNode.removeChild(node));
  const number = parseInt(answerArea.value);
  for (let i = 0; i < number; i++) {
    const image = document.createElement("img");
    image.src =
      "https://static8.depositphotos.com/1007989/1011/i/600/depositphotos_10118082-stock-photo-goofy-smiley.jpg";
    image.style.display = "inline-block";
    document.body.insertAdjacentElement("afterend", image);
  }
}
submit.addEventListener("click", handler);
