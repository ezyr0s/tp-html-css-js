let tailleMatrice = parseInt(
  prompt("Veuillez entrer la taille de la matrice :")
);

const matrice = [];
let diagonale = 0;

for (let i = 0; i < tailleMatrice; i++) {
  matrice.push([]);
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i].push(parseInt(prompt("Veuillez rentrer un nombre :")));
  }
}

for (let i = 0; i < tailleMatrice; i++) {
  diagonale = matrice[i][i] + diagonale;
}
console.log(matrice);
console.log(`La somme de la diagonale est de ${diagonale}`);
