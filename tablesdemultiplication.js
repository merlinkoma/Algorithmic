/*
Appli tables de multiplication : 
- demander la table à afficher,
- afficher la table avec les calculs.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/

const readline = require('readline-sync');
let x = readline.questionInt('Afficher la table de ? ');

function tableDeMultiplication(chiffre){
    for (let i=1; i<11; i++){
        console.log(`${chiffre} x ${i} = ${chiffre*i}`)
    }
}

tableDeMultiplication(x);









