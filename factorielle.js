/*
Ecrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle. 
Exemple : la factorielle de 8, notée 8 !, vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8
*/
const readline = require('readline-sync');

let x = readline.questionInt('Nombre ? ');

function factorielle(nombre){
    let txt ='';
    let resultat = 1;

    for(let i = 1 ; i <= nombre ; i++){
        //équivalent de resultat = resultat + i;
        resultat *= i;
        //pour concaténer une chaîne de caractères
        txt +=`${i}`;
        if (i < nombre){
            txt += ' x '
        }
    }
    console.log(`${nombre}! = ${txt} = ${resultat}`);
}
factorielle(x);