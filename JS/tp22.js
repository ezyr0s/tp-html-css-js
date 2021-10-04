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
let origineChinois = 0;
let prenomEndA = [];
let listeHommeRusse = [];
let listeFemmePrenomK = [];
let listeHommePrenomM = [];
let listeNoms = [];

for (let i = 0; i < nbrEtudiant; i++) {
  const nom = prompt("Nom :");
  const prenom = prompt("Prénom :");
  const age = prompt("Age :");
  const genre = toLowerCase(prompt("Genre :"));
  const pays = toLowerCase(prompt("Pays :"));
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
for (let k = 0; k < nbrEtudiant; k++) {
  //Le nombre de personnes d'origine chinoise
  if (listeEtudiant[k].pays === "chine") {
    origineChinois += 1;
  }
  //La liste des personnes dont le prénom termine par "a"
  if (listeEtudiant[k].prenom[listeEtudiant[k].prenom.length - 1] === "a") {
    prenomEndA.push(listeEtudiant[k]);
  }
  //La liste de tout les noms
  listeNoms[k] = listeEtudiant[k].nom;
  //La liste de tout les hommes russes
  if (listeEtudiant[k].pays === "russie" && listeEtudiant[k].genre === "m") {
    listeHommeRusse.push(listeEtudiant[k]);
  }
  //La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes
  if (listeEtudiant[k].prenom[0] === "k" && listeEtudiant[k].genre === "f") {
    listeFemmePrenomK.push(listeEtudiant[k]);
  }
  //La liste de tous les hommes dont les noms commencent par M
  if (listeEtudiant[k].prenom[0] === "m" && listeEtudiant[k].genre === "m") {
    listeHommePrenomM.push(listeEtudiant[k]);
  }
}
console.log(`Nombre de personnes d'origine chinoise : ${origineChinois}`);
console.log(
  `Liste des personnes dont le prénom termine par "a" : ${prenomEndA}`
);
console.log(`Liste de tout les noms : ${listeNoms}`);
console.log(`Liste de tout les hommes russes : ${listeHommeRusse}`);
console.log(
  `Liste de toutes les personnes dont les noms commencent par K et qui sont des femmes : ${listeFemmePrenomK}`
);
console.log(
  `Liste de toutes les personnes dont les noms commencent par M et qui sont des hommes : ${listeHommePrenomM}`
);
