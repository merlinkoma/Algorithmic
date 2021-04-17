/*
Ecrire un algorithme qui affiche les 10 nombres suivants celui entré par l'utilisateur.
Exemple : 
- nombre entré = 10
- le terminal affiche : 11 12 13 14 15 16 17 18 19 20
*/

const readline = require('readline-sync');

let x = readline.questionInt('Nombre ? ');

console.log('Avec la boucle while : ')
function suiteWhile(nombre){
    //initialisation à 1 pour afficher tout de suite le nombre suivant à x et ne pas afficher x au début de la suite
    let i = 1;
    //tant que i != 11 / tant que i n'a pas fait 10 tours de boucle
    while (i < 11){
        console.log(`${nombre+i}`);
        i=i+1;
    }
}
suiteWhile(x);

console.log('Avec la boucle for : ');
function suiteFor(nombre){
    for (let i = 1; i < 11; i++){
        console.log(`${nombre+i}`);
    }
}

suiteFor(x);

