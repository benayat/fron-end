/*
isisland - boolean.
population - integer.
country: string of a country.
language: string.

Sarah's requirments re-ordered: 

not an island.
population: less than 50m people.
language: english

*/

function countryToLiveIn(language, isIsland, population, country) {
  if (!isIsland && population < 50 && language === "English") {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}
let language = "English",
  isIsland = false,
  population = 49,
  country = "England";
countryToLiveIn(language, isIsland, population, country);
