// const fetch = require('node-fetch');
// const fs = require('fs');
//I used the fetch and fs require to debug it with noed, it looks like a nice challenge.

const baseEndpoints = [];

for (let i = 1; i <= 10; i++) {
  baseEndpoints.push(`https://swapi.dev/api/people/${i}`);
}

async function fetchPlanet(urlData) {
  const response = await fetch(urlData);
  const data = await response.json();
  const pName = data.name;
  const pPopulation = data.population;
  // const planetArray = [pName, pPopulation];
  return {
    name: pName,
    population: pPopulation,
  };
}
const actors = [];
// baseEndPoint[0] is people1
async function fetchActors() {
  for (actorUrl of baseEndpoints) {
    const response = await fetch(actorUrl);
    const data = await response.json();
    const actorProperties = {};
    actorProperties.name = data.name;
    actorProperties.height = data.height;
    actorProperties.hairColor = data.hair_color;
    actorProperties.planet = await fetchPlanet(data.homeworld);
    actors.push(actorProperties);
  }
}
async function wrapper() {
  await fetchActors();
  const tableElement = document.createElement('table');
  tableElement.setAttribute('id', 'starwarsPlayers');
  tableElement.style.border = '1px solid black';
  tableElement.insertAdjacentHTML(
    `afterbegin`,
    `  <tr>
    <th colspan="5">Star wars</th>
    </tr>
    <tr>
    <th>name</th>
    <th>hair</th>
    <th>height</th>
    <th>planet name</th>
    <th>planet population</th>
  </tr>
  `
  );

  for (let i = 0; i < 10; i++) {
    let row = actors[i];
    const innerHTML = `  <tr>
    <td>${row.name}</td>
    <td>${row.hairColor}</td>
    <td>${row.height}</td>
    <td>${row.planet.name}</td>
    <td>${row.planet.population}</td>
  </tr>`;
    tableElement.insertAdjacentHTML('beforeend', innerHTML);
  }
  document.body.insertAdjacentElement('afterbegin', tableElement);
}
wrapper();
// console.log('thats it loading over? ');
// console.log(actors);
