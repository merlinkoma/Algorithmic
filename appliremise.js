/*
Appli remise : 
- demander le prix,
- demander la remise (%),
- afficher le total après réduction.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/

const readline = require('readline-sync');

let price = readline.questionInt('Prix ? ');
let discount = readline.questionInt('Réduction (en %) ?');

function discountCalc (prix, remise){
    let reduction = remise*prix/100;
    let total = prix - reduction;
    console.log(`La réduction est de ${reduction} €`);
    console.log(`Le total après la réduction est de ${total} €`);
}
discountCalc(price, discount);

