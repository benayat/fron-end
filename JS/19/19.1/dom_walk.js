const listItem = document.querySelector(".start-here");
listItem.innerHTML = "main title";
const titlesUL = listItem.nextElementSibling.firstElementChild;

const subTitleToAdd = document.createElement("li");
subTitleToAdd.innerHTML = "sub title 4";
titlesUL.appendChild(subTitleToAdd);
const lastLiToDelete = listItem.parentElement.lastElementChild;
lastLiToDelete.remove();
const titleElement = document.querySelector("title");
titleElement.innerHTML = "Master Of The Dom";

const paragraph = listItem.parentElement.nextElementSibling.firstElementChild;
paragraph.innerHTML = "this is just a paragraph, nothing to add.";
