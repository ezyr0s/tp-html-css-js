let age = parseInt(prompt("Veuillez rentrer votre age :"));
if (age < 7) {
  alert("L'enfant est trop jeune");
} else if (age >= 7 && age <= 9) {
  alert("L'enfant est poussin");
} else if (age >= 10 && age <= 11) {
  alert("L'enfant est pupille");
} else if (age >= 12 && age <= 13) {
  alert("L'enfant est benjamin");
} else if (age >= 14 && age <= 15) {
  alert("L'enfant est minime");
} else if (age > 16 && age <= 17) {
  alert("L'enfant est cadet");
} else if (age > 17) {
  alert("L'enfant est trop vieux");
}
