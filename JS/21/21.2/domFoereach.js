const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
users.forEach((value, index) => {
  let ol = document.createElement("ol");
  ol.innerHTML = `<li>${value.firstName}</li>
  <li>${value.lastName}</li>`;
  ol.style.listStyle = "none";
  document.body.appendChild(ol);
  let listElements = ol.querySelectorAll("li");
  listElements.forEach((liValue, liIndex) => {
    liValue.setAttribute("data-id", `${value.id}`);
  });
});
