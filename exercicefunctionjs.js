const readline = require('readline-sync');
var prix = readline.questionInt('Entrer un prix.');
var remise = readline.questionInt('Entrer la remise.');

function remisePrice (p, r){
    return (remise*prix)/100;  
}


var total = prix-remisePrice();
console.log(`Le total après la réduction est de ${total} €`);

