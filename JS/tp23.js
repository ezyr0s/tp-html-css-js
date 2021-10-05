function dimensions() {
  rayon = parseInt(document.getElementById("rayon").value);
  document.getElementById("diametre").value = rayon * 2;
  document.getElementById("circonference").value = 2 * 3.14 * rayon;
  document.getElementById("aire").value = 3.14 * (rayon * rayon);
}
