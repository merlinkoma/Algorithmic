/*
Appli nombre premier : 
- demander un nombre,
- vérifier si ce nombre est premier ou non et afficher la réponse.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/
const readline = require('readline-sync');

let x = readline.questionInt('Entrer un nombre ');
function premier(nb){
    let i = 2;
    let diviseurs = []
    while(i < nb){
        if(nb % i == 0){
            diviseurs.push(i);
        }
        i++;
    }
    if(diviseurs.length == 0){
        console.log(`${nb} est un nombre premier.`)
    }else{
        console.log(`${nb} n'est pas un nombre premier. Diviseurs différents de 1 et de ${nb} : `)
        diviseurs.forEach(diviseur => {
            console.log(`${diviseur} `)
        })
    }
}
premier(x);
