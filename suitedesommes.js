/* 
Ecrire un algorithme qui demande un nombre de départ & calcule la somme des entiers jusqu’à ce nombre. 
Exemple : si on entre 5, le programme doit calculer : 
1 + 2 + 3 + 4 + 5 = 15
*/

const readline = require('readline-sync');

let x = readline.questionInt('Nombre ? ');

function somme(nombre) {
    let string = '';
    let somme = 0;
    for (let i = 1; i <= nombre; i++) {
        //équivalent de somme = somme + i;
        somme += i;
        //concaténation de la chaîne de caractères
        string += `${i}`;
        if (i < nombre) {
            string += ' + '
        }
    }
    console.log(`${string} = ${somme}`);
}
somme(x);