const clickMe = document.querySelector("button");

clickMe.addEventListener("click", (event) => {
  let heading = event.target.parentElement.firstElementChild;
  if (parseInt(event.target.previousElementSibling.value) > 18) {
    heading.innerHTML = "you can drink!";
  } else {
    heading.innerHTML = "you're too young";
  }
});
