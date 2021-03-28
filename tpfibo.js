// Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 
//1 + 2 + 3 + 4 + 5 = 15

const readline = require('readline-sync');

function somme(nbDepart){
    let txt ='';
    let s = 0;
    for(let i=1; i<=nbDepart; i++){
        s += i;
        //équivalent de s = s + i;
        txt +=`${i}`;
        if (i < nbDepart){
            txt += ' + '
        }
    }
    console.log(`${txt} = ${s}`);
}
let nombre1 = readline.questionInt('Entre un nombre : ');
somme(nombre1);