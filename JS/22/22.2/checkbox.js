const checkbox = document.querySelector("input");
checkbox.style.display = "block";
console.log(checkbox);
const image = document.querySelector("img[alt=airplane]");
image.style.margin = "auto";
checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    image.style.display = "inline-block";
  } else {
    image.style.display = "none";
  }
});
