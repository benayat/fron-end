function returnDate() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  let dayOfTheWeek = days[d.getDay()];
  let dayOfTheMonth = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `today is ${dayOfTheWeek} the ${dayOfTheMonth} of ${month}, ${year}`;
}

console.log(returnDate());
