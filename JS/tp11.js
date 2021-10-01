let nbr1 = parseInt(prompt("Veuillez entre un premier nombre :"));
let nbr2 = parseInt(prompt("Veuillez entrer un deuxieme nombre :"));
let nbr3 = parseInt(prompt("Veuillez entrer un troisième nombre :"));
let nbr4 = parseInt(prompt("Veuillez entrer un quatrième nombre :"));
let calcul = 0;
for (let i = nbr1; i < nbr2 + 1; i++) {
  for (let j = nbr3; j < nbr4 + 1; j++) {
    calcul = nbr1 * j;
    alert(`${nbr1} x ${j} = ${calcul}`);
  }
  nbr1++;
}
