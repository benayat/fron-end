function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attackNumber) {
  console.log(
    `${this.name} used ${
      this.attackList[attackNumber] || "an attack that doesn't exist"
    }`
  );
};
let pokemans = {
  0: new Pokemon("Pikachu", "electric", ["static", "lightning"]),
  1: new Pokemon("Bulbasaur", "grass", ["overgrow", "shrink"]),
  2: new Pokemon("Charizard", "fire", ["blaze", "inferno"]),
};
// pokemans[0].attack(1);
// pokemans[1].callPokemon();
for (pokemon of Object.values(pokemans)) {
  console.log(pokemon);
  pokemon.attack(0);
  pokemon.callPokemon();
}
let mos = 12312412;
console.log(mos);
