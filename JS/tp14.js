let array = [];

for (i = 0; i < 5; i++) {
  array[i] = parseInt(prompt("Veuillez entre un nombre :"));
}

let plusPetit = array[0];
let plusGrand = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] < plusPetit) {
    plusPetit = array[i];
  } else if (array[i] > plusGrand) {
    plusGrand = array[i];
  }
}
console.log(array);
console.log(
  `Le plus petit nombre du tableau est ${plusPetit} et le plus grand nombre est ${plusGrand}.`
);
