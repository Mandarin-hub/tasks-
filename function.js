const person = {
  name: "Vadim",
  age: 23,
};
function personeAge(person) {
  const personeOne = Object.assign({}, person);
  personeOne.age += 1;
  return personeOne;
}
const persone2 = personeAge(person);
console.log(persone2.age);
