function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "It is indeed a leap year";
  } else {
    return "This is not a leap year";
  }
}
console.log(leapYear(2400));
