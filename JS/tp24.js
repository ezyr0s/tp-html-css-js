// Déclaration des query
const formInscription = document.querySelector("#inscription");
const inputNom = document.querySelector("#nom");
const inputPrenom = document.querySelector("#prenom");
const inputAge = document.querySelector("#age");
const inputGenre = document.querySelector("#genre");
const inputPays = document.querySelector("#pays");
const inputOption = document.querySelector("#option");
const inputListeCours = document.querySelector("#listeCours");
const tableauEtudiants = document.querySelector("#tableauEtudiants");

formInscription.addEventListener("submit", function (e) {
  e.preventDefault();
  // On crée le tr
  const tr = document.createElement("tr");
  // On récupere et crée le Nom
  const nom = document.createElement("td");
  nom.innerText = inputNom.value;
  // On récupere et crée le prénom
  const prenom = document.createElement("td");
  prenom.innerText = inputPrenom.value;
  // On récupère et crée l'age
  const age = document.createElement("td");
  age.innerText = inputAge.value;
  // On récupère le genre
  const genre = document.createElement("td");
  genre.innerText = inputGenre.value;
  // On récupère le pays
  const pays = document.createElement("td");
  pays.innerText = inputPays.value;
  // On récupère l'option
  const option = document.createElement("td");
  option.innerText = inputOption.value;
  // On récupère la liste des cours
  const listeCours = document.createElement("td");
  listeCours.innerText = inputListeCours.value;

  tableauEtudiants.append(tr);
  tr.append(nom, prenom, age, genre, pays, option, listeCours);
});
