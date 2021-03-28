const readline = require('readline-sync');
let a = readline.questionInt('Entrer un premier nombre : ');
let op = readline.question('Entrer un opérateur : ');
let b = readline.questionInt('Entrer un deuxième nombre : ');


function calcul(nb1, nb2, symbol){

    if(symbol == '+'){
      let somme = (nb1 + nb2);
    if(symbol == '-'){
      let diff = (nb1 - nb2);
    } else if ((symbol == '*') || (symbol == 'x')){
      let prod = (nb1 * nb2);
    } else if (symbol == '/'){
      let quot = (nb1 / nb2);
    } else if (symbol == '%'){
        let modul = (nb1 % nb2)
    }
    console.log(somme, diff, prod, quot, modul);
  }

}
calcul(a, b, op);