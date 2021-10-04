let tailleMatrice = parseInt(
  prompt("Veuillez entrer la taille de la matrice :")
);

const matrice = [];
let diagonale1 = 0;
let diagonale2 = 0;
let sommeDiag = 0;

for (let i = 0; i < tailleMatrice; i++) {
  matrice.push([]);
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i].push(parseInt(prompt("Veuillez rentrer un nombre :")));
  }
}

for (let i = 0; i < tailleMatrice; i++) {
  diagonale1 = matrice[i][i] + diagonale1;
}

for (let i = 0; i < tailleMatrice; i++) {
  diagonale2 = matrice[i][tailleMatrice - i - 1] + diagonale2;
}

sommeDiag = diagonale1 + diagonale2;

console.log(matrice);
console.log(diagonale1, diagonale2);
console.log(`La somme des diagonales est ${sommeDiag}.`);
