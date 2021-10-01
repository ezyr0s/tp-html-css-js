let nbr = parseInt(prompt("Veuillez entrer un nombre"));

for (let i = 1; i < nbr + 1; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    alert("fizzbuzz");
  } else if (i % 5 === 0) {
    alert("buzz");
  } else if (i % 3 === 0) {
    alert("fizz");
  } else {
    alert(i);
  }
}
