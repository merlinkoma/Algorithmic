const readline = require('readline-sync');

// let x = readline.questionInt('Entrer un chiffre.');

// function nbPremier(nombre){
//     for (let i=2; i<x; i++){
//         if((x%i===0)&&(i>1)&&(i<x)){
//         console.log(`Chiffre pas premier`)
//         }  
//         else {
//         console.log(`Chiffre premier.`)
//         }
//     }
// }   
// nbPremier(x);

//CORRECTION

function premier(nbPremier){
    let p = true;
    for(let i=2; i<nbPremier; i++){
        if (nbPremier % i == 0) {
            console.log("Ce n'est pas un nombre premier.");
            p= false;
            break;
        }
     }
     if (p){
         console.log("C'est un nombre premier.");
     }
 }

 let nombre = readline.questionInt('Nombre premier ou non ? ');
 premier(nombre);