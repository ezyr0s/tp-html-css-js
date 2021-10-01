alert("Inscription");
let user = prompt("Veuillez rentrer votre adresse mail :");
let mdp = prompt("Veuillez entrer votre mot de passe :");
alert("Connexion");
let userConnexion = prompt("Email :");
let mdpConnexion = prompt("Mot de passe :");
while (userConnexion != user || mdpConnexion != mdp) {
  alert("Identifiants incorrects");
  userConnexion = prompt("Email :");
  mdpConnexion = prompt("Mot de passe :");
}
if (userConnexion === user && mdpConnexion === mdp) {
  alert("Bienvenue dans votre espace");
}
