const readline = require('readline-sync');

function justePrix(){
    let joueur1 = readline.questionInt('Entrer un nombre');
    console.clear();
    let joueur2 = -1;
    while(joueur1 != joueur2){
        joueur2 = readline.questionInt(`Devine.`);
        plusGrand(joueur1, joueur2);
        plusPetit(joueur1, joueur2);
        itsGood(joueur1, joueur2);
    }
}

justePrix();

function plusGrand(nb1, nb2){
    if (nb1 > nb2){
        console.log("C\'est plus plus grand.");
    }      
}
function plusPetit(nb1, nb2){
    if (nb1 < nb2){
        console.log("C\'est plus plus petit.");
    }      
}
function itsGood(nb1, nb2){
    if (nb1 == nb2){
        console.log("Bonne réponse trouvée.");
    }      
}

