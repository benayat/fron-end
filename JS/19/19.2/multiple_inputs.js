// const target = document.querySelector('div.target');

//what to do: first, set all the inputs to focus on the next one when getting input
const submitButton = document.querySelector("[type=submit]");
console.log(submitButton.innerHTML);
submitButton.addEventListener("click", (event) => {
  submitButton.parentElement.parentElement.submit();
});
const formToSubmit = submitButton.parentElement.parentElement;
formToSubmit.addEventListener("submit", (event) => {
  const headline = document.querySelector(".heading h2");
  headline.innerHTML = "FORM IS SUBMITTED!";
});

function focusNext(event) {
  let targetInput = event.target;
  let nextInput = targetInput.nextElementSibling;
  if (nextInput) nextInput.focus();
}

const inputs = document.querySelectorAll(".letterInput");
for (let inputBox of inputs) {
  inputBox.addEventListener("input", focusNext);
}

function pasteAll(event) {
  let paste = event.clipboardData.getData("text");
  if (paste.length != 6)
    alert("not goot enough! please insert exactly 6 characters");
  for (let i = 0; i < paste.length; i++) {
    inputs[i].value = paste.charAt(i);
  }
}
let container = document.querySelector(".container");
container.addEventListener("paste", pasteAll);
let inputsContainer = container.querySelector(".inputsContainer");

inputsContainer.addEventListener("click", (event) => {
  for (inputBox of inputs) {
    inputBox.value = "";
  }
});

const firstInput = inputs[0];
firstInput.addEventListener("paste", pasteAll);

//second part:
