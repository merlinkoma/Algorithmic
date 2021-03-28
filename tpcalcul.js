const readline = require('readline-sync');

let x = readline.questionInt('Entrer un premier nombre.');
let y = readline.questionInt('Entrer un second nombre.');
let z = readline.question('Entrer un opérateur.');

function calcul(nb1, nb2, symbol){
    if (symbol == '+') {
        console.log(`${nb1 + nb2}`);
    } else if (symbol == '-'){
        console.log(`${nb1 - nb2}`);
    } else if ((symbol == 'x') || (symbol == '*')) {
        // || = "pipes", veut dire "OU"
        console.log(`${nb1 * nb2}`);
    } else if (symbol == '/') {
        console.log(`${nb1 / nb2}`);
    }
}

//au lieu de répéter console.log dans chaque if, on peut mettre à la place result = nb1 l'opérateur nb2 (on déclare let = result avant d'ouvrir le premier if) et tout en bas de la fonction, on indique console.log(`Le résultat de ${nb1} ${symbol} ${nb2} = ${resultat});  VOIR TPcalcuJS.jpeg

calcul(x,y,z);