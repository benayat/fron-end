/*
Create a simple password validation function that takes a
password string as an argument.
If the passwords length is more than 7 characters return
“Strong”. If it is less than 7 characters long return “Weak.
1) Create a function that uses a if/else conditional
expression.
2. Create a function that uses a ternary conditional
expression.
3. Create a function that uses a && logical operator.


what if it's exactly 7 characters long?? not mentioned in the pdf.
*/

function passwordValidationSimple(password) {
  if (password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}
function passwordValidationTernaty(password) {
  return password.length > 7 ? "Strong" : "Weak";
}
function passwordValidationShorthand(password) {
  return (password.length > 7 && "Strong") || (password.length < 7 && "Weak");
}
function advancedPasswordValidation(password) {
  return password.length > 7
    ? /^[a-z]+$/.test(password)
      ? "Very Strong"
      : "Strong"
    : "Weak";
}
