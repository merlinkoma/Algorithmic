/*
Appli juste prix : 
- demander un chiffre au joueur 1 et effacer la console,
- demander au joueur 2 de deviner le chiffre du joueur 1.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/

const readline = require('readline-sync');

function justePrix() {
    let x = 101;
    while (x > 100 || x < 0){
      x =  readline.questionInt('Entrer un nombre entre 0 et 100 ');
    }
    console.clear();
    let y = -1;
    while (x != y) {
        y = readline.questionInt(`Deviner le nombre x `);
        more(x, y);
        less(x, y);
        match(x, y);
    }
}

justePrix();

function more(nb1, nb2) {
    if (nb1 > nb2) {
        console.log("C\'est plus plus grand.");
    }
}
function less(nb1, nb2) {
    if (nb1 < nb2) {
        console.log("C\'est plus plus petit.");
    }
}
function match(nb1, nb2) {
    if (nb1 == nb2) {
        console.log("Bonne réponse trouvée.");
    }
}

