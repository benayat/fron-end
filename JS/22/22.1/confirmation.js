const submitButton = document.querySelector("button[type = 'submit']");
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  const firstName = document.querySelector("#fname").value;
  const lastName = document.querySelector("#lname").value;
  const age = document.querySelector("#age").value;
  const emailAddress = document.querySelector("#email").value;
  confirm(
    `you name: ${firstName} ${lastName}\nage: ${age} \nemail-address: ${emailAddress}`
  );
});
