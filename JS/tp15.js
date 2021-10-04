let tailleListe = parseInt(prompt("Veuillez entrer la taille de la liste :"));

let array1 = [];
let array2 = [];
let array3 = [];

alert("Remplir le premier tableau :");
for (let i = 0; i < tailleListe; i++) {
  array1[i] = parseInt(prompt("Veuillez entrer un nombre :"));
}
alert("Remplir le deuxième tableau :");
for (let j = 0; j < tailleListe; j++) {
  array2[j] = parseInt(prompt("Veuillez entrer un nombre :"));
}

for (let k = 0; k < tailleListe; k++) {
  array3[k] = array1[k] + array2[k];
}

console.log(array1);
console.log(array2);
console.log(array3);
