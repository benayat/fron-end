const divObject = {};
for (var value of document.querySelectorAll("div").values()) {
  divObject[value.id] = value;
}
