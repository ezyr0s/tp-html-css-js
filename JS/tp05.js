let nbreConnexion = 1;
alert("Inscription");
let user = prompt("Veuillez rentrer votre adresse mail :");
let mdp = prompt("Veuillez entrer votre mot de passe :");
alert("Connexion");
let userConnexion = prompt("Email :");
let mdpConnexion = prompt("Mot de passe :");
while (userConnexion != user || mdpConnexion != mdp) {
  alert("Identifiants incorrects");
  nbreConnexion++;
  userConnexion = prompt("Email :");
  mdpConnexion = prompt("Mot de passe :");
  if (nbreConnexion > 4) {
    alert(
      "Vous avez saisi des mauvais identifiants 5 fois, votre compte est bloqué."
    );
    break;
  }
}
if (userConnexion === user && mdpConnexion === mdp) {
  alert("Bienvenue dans votre espace");
}
