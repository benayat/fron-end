// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);

// make an unordered list

const ulList = document.createElement("ul");
ulList.innerHTML = `  <li>one</li>
<li>two</li>
<li>three</li>`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.appendChild(ulList);

// create an image
const img = document.createElement("img");
// set the source to an image
img.src = "https://picsum.photos/500";
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class = "paragraphs-div">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`;

//just for clarity, made another variable for the ul.
const theUl = div.querySelector("ul");
console.log(theUl);
// put this div before the unordered list from above
theUl.insertAdjacentHTML("beforebegin", myHTML);
// add a class to the second paragraph called warning
const secondDiv = div.querySelector(".paragraphs-div");
secondDiv.children[1].classList.add("warning");
// remove the first paragraph
secondDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>
    </div>
  `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");
// Have that function make 4 cards
const card1HTML = generatePlayerCard("wes", 12, 150);
const card2HTML = generatePlayerCard("scott", 12, 150);
const card3HTML = generatePlayerCard("kait", 12, 150);
const card4HTML = generatePlayerCard("snickers", 12, 150);

cards.innerHTML = card1HTML + card2HTML + card3HTML + card4HTML;
div.insertAdjacentElement("beforebegin", cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll(".delete");
// make out delete function
function deleteCard(event) {
  const currentButtonTarget = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  currentButtonTarget.closest(".playerCard").remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener("click", deleteCard));
