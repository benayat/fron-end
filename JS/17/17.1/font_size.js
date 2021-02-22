const div = document.createElement("div");
div.classList.add("wrapper");
let paragraph = document.createElement("p");

paragraph.style.fontSize = "16px";
console.log(paragraph.style);
paragraph.classList.add("paragraph");
var style = window
  .getComputedStyle(paragraph, null)
  .getPropertyValue("font-size");

paragraph.innerHTML =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

const plusButton = document.createElement("button");
const minusButton = document.createElement("button");
minusButton.innerHTML = "-";
plusButton.innerHTML = "+";
div.appendChild(paragraph);
div.appendChild(plusButton);
div.appendChild(minusButton);
document.body.appendChild(div);

function plusButtonSizing(event) {
  if (parseInt(paragraph.style.fontSize) < 100)
    paragraph.style.fontSize = `${parseInt(paragraph.style.fontSize) + 1}px`;
}
function minusButtonSizing(event) {
  if (parseInt(paragraph.style.fontSize) > 6)
    paragraph.style.fontSize = `${parseInt(paragraph.style.fontSize) - 1}px`;
}
plusButton.addEventListener("click", plusButtonSizing);
minusButton.addEventListener("click", minusButtonSizing);
