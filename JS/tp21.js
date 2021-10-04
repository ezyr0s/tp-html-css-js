function Etudiant(nom, prenom, age, genre, pays, option, listeCours) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.listeCours = listeCours;
}

let nbrEtudiant = parseInt(prompt("Entrez le nombre d'étudiant à inscrire :"));
let listeEtudiant = [];

for (let i = 0; i < nbrEtudiant; i++) {
  const nom = prompt("Nom :");
  const prenom = prompt("Prénom :");
  const age = prompt("Age :");
  const genre = prompt("Genre :");
  const pays = prompt("Pays :");
  const option = prompt("Option :");
  const nbreCours = prompt("Nombre de cours :");
  const listeCours = [];
  for (let j = 0; j < nbreCours; j++) {
    listeCours.push(prompt("Entrez les cours suivis :"));
  }
  listeEtudiant.push(
    new Etudiant(nom, prenom, age, genre, pays, option, listeCours)
  );
}
console.log(listeEtudiant);
