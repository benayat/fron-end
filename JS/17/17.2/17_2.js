const heading = document.createElement("h1");
heading.innerHTML = "Why are you interested in this position?";
heading.classList.add("theHeading");
const buttonWrap = document.createElement("div");
buttonWrap.classList.add("buttonWrap");
const button = document.createElement("button");
button.innerHTML = "Validate";
button.classList.add("theButton");
buttonWrap.appendChild(button);
const textArea = document.createElement("textarea");
textArea.classList.add("textPlace");

document.body.appendChild(heading);
document.body.appendChild(textArea);
document.body.appendChild(buttonWrap);

function validate(event) {
  currentButton = event.currentTarget;
  let textPlace = currentButton.closest(".theButton");
  debugger;
  const str = textPlace.value;
  if (str.length < 100)
    heading.innerHTML = "this is not enough! at least 100 characters!";
}
button.addEventListener("click", validate);
