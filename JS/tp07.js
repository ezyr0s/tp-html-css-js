let nbr = parseInt(prompt("Veuillez entrer un nombre"));
while (nbr < 10 || nbr > 20) {
  if (nbr < 10) {
    alert("Plus grand !");
    nbr = parseInt(prompt("Veuillez entrer un nombre"));
  }
  if (nbr > 20) {
    alert("Plus petit !");
    nbr = parseInt(prompt("Veuillez entrer un nombre"));
  }
}
if (nbr >= 10 && nbr <= 20) {
  alert("Bien joué !");
}
