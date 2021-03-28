const readline = require('readline-sync');
// var entier = readline.questionInt('Entrer un entier positif');

// function table(nb1, nb2){   
//     for (var i=0; i<11; i++){
//         resultat = entier*i;
//         console.log(`${i} x ${entier} = ${resultat}`);
//     }
// }

//CORRECTION
let x = readline.questionInt('Entrer un chiffre.')

function tableDeMultiplication(nombre){
    for (let i=1; i<11; i++){
        console.log(`${nombre} x ${i} = ${nombre*i}`)
    }
}

tableDeMultiplication(x);
//si je ne mets pas cette dernière ligne, ma fonction n'est pas appelée.








