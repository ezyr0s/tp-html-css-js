const formCercle = document.querySelector("#formCercle");

formCercle.addEventListener("click", function (e) {
  e.preventDefault;
  let rayon = document.querySelector("#rayon").value;
  document.querySelector("#diametre").value = rayon * 2;
  document.querySelector("#circonference").value = 2 * 3.14 * rayon;
  document.querySelector("#aire").value = 3.14 * (rayon * rayon);
});

// function dimensions() {

//   rayon = parseInt(document.getElementById("rayon").value);
//   document.getElementById("diametre").value = rayon * 2;
//   document.getElementById("circonference").value = 2 * 3.14 * rayon;
//   document.getElementById("aire").value = 3.14 * (rayon * rayon);
// }
