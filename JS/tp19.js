function calculerSommeDiag(matrice) {
  let sommeDiagonale1 = 0;
  let sommeDiagonale2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    sommeDiagonale1 += matrice[i][i];
    sommeDiagonale2 += matrice[i][matrice.length - i - 1];
  }
  return sommeDiagonale1 + sommeDiagonale2;
}
