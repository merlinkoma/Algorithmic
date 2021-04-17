const readline = require('readline-sync');
/*
Appli calculatrice : 
- demander deux nombres et l'opération voulue,
- calculer et afficher le résultat.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/

let a = readline.questionInt('Entrer un premier nombre : ');
let op = readline.question('Entrer un opérateur : ');
let b = readline.questionInt('Entrer un deuxième nombre : ');


function calcul(nb1, nb2, symbol) {
  let result = 0;
  if (symbol == '+') {
    result = (nb1 + nb2);
  } else if (symbol == '-') {
    result = (nb1 - nb2);
    // || = "pipes" = "OU"
  } else if ((symbol == '*') || (symbol == 'x')) {
    result = (nb1 * nb2);
  } else if (symbol == '/') {
    result = (nb1 / nb2);
  } else if (symbol == '%') {
    result = (nb1 % nb2)
  }
  console.log((result).toFixed(2));
}
calcul(a, b, op);