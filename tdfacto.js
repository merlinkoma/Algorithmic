//Ecrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle. NB : la factorielle de 8, notée 8 !, vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

const readline = require('readline-sync');

function facto(nbDepart){
    let txt ='';
    let res = 1;
    for(let i=1; i<=nbDepart; i++){
        res *= i;
        //équivalent de s = s + i;
        txt +=`${i}`;
        if (i < nbDepart){
            txt += ' x '
        }
    }
    console.log(`${nbDepart}! = ${txt} = ${res}`);
}
let nombre1 = readline.questionInt('Entre un nombre : ');
facto(nombre1);