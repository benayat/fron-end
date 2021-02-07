function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  let str = `You will be a ${jobTitle} in ${location} and married to
  ${partnerName} with ${numberOfChildren} children.`;
  return str;
}

console.log(tellFortune("Butcher", "Harish", "Dana", 3));
