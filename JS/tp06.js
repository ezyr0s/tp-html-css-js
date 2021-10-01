let nbr = parseInt(prompt("Veuillez entrer un nombre :"));
while (nbr < 1 || nbr > 3) {
  nbr = parseInt(prompt("Veuillez entrer un nombre :"));
}
if (nbr >= 1 && nbr <= 3) {
  alert("Bien joué");
}
