// Constructeur objet
function Etudiant(nom, prenom, age, genre, pays, option, listeCours) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.listeCours = listeCours;
}

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
const formError = document.querySelector("#formError");
const formErrorNom = document.querySelector("#formErrorNom");
const formErrorAge = document.querySelector("#formErrorAge");
const formErrorGenre = document.querySelector("#formErrorGenre");
const formErrorPays = document.querySelector("#formErrorPays");
let listeEtudiant = [];
let etudiant = [];

formInscription.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputNom.value.length < 5 || inputPrenom.value.length < 5) {
    formErrorNom.innerText =
      "Le nom ou le prénom ne comporte pas assez de caractères.";
    formErrorNom.classList.add("text-red");
  } else if (isNaN(inputAge.value) === true) {
    formErrorAge.innerText = "L'âge n'est pas un nombre.";
    formErrorAge.classList.add("text-red");
  } else if (inputPays.value === "") {
    formErrorPays.innerText = "Le pays n'est pas renseigné.";
    formErrorPays.classList.add("text-red");
  } else if (
    inputGenre.value != "H" ||
    inputGenre.value != "F" ||
    inputGenre.value != "None"
  ) {
    formErrorGenre.innerText = "Le genre renseigné n'est pas bon.";
    formErrorGenre.classList.add("text-red");
  } else {
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

    //On append
    tableauEtudiants.append(tr);
    tr.append(nom, prenom, age, genre, pays, option, listeCours);
    etudiant = new Etudiant(
      inputNom.value,
      inputPrenom.value,
      inputAge.value,
      inputGenre.value,
      inputPays.value,
      inputOption.value,
      inputListeCours.value
    );
    listeEtudiant.push(etudiant);
    //On reset les fields une fois le submit effectué
    inputNom.value = "";
    inputPrenom.value = "";
    inputAge.value = "";
    inputGenre.value = "";
    inputPays.value = "";
    inputOption.value = "";
    inputListeCours.value = "";
    // On reset le message d'erreur si c'est bon
    formError.innerText = "";
    formError.classList.remove("text-red");
    formErrorNom.innerText = "";
    formErrorNom.classList.remove("text-red");
    formErrorPrenom.innerText = "";
    formErrorPrenom.classList.remove("text-red");
    formErrorAge.innerText = "";
    formErrorAge.classList.remove("text-red");
    formErrorGenre.innerText = "";
    formErrorGenre.classList.remove("text-red");
    formErrorPays.innerText = "";
    formErrorPays.classList.remove("text-red");
    console.table(listeEtudiant);
  }
});
