//the problem is that getStrength was called from a function which is inside the global object, so the object is not "this " anymore

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
const getStrengthBind = hero.getStrength.bind(hero);
console.log(whoIsStronger(getStrengthBind));
