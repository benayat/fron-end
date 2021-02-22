const pictureChange = function (pictureUrl) {
  document.querySelector(".the_big_picture").src = pictureUrl;
};
for (let i = 1; i <= 6; i++) {
  document.querySelector(`#clickMe${i}`).addEventListener("click", function () {
    pictureChange(String.raw`images/product-pictures/right-large/${i}.jpg`);
  });
}
