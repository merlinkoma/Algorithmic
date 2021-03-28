const readline = require('readline-sync');

// var nb1 = readline.question('Entrer un 1er nombre');
// var nb2 = readline.question('Entrer un 2nd nombre');

// if(nb1 < nb2){
//     console.log(nb1 + ' est plus petit que ' + nb2);
//     console.log(`${nb1} est plus petit que ${nb2}`);
//     //2 manières d'écrire la même chose.
// } else if (nb1===nb2){
//     console.log(`${nb1} est égal à ${nb2}`);
// } else {
//     console.log(`${nb1} est plus grand que ${nb2}`);
// }
//console.log(typeof nb1);
//permet de récupérer le type de la variable

// var nb1 = readline.questionInt('Entrer un 1er nombre : ');
// var nb2 = readline.questionInt('Entrer un 2e nombre : ');
// var nb3 = readline.questionInt('Entrer un 3e nombre : ');
// var nb4 = readline.questionInt('Entrer un 4e nombre : ');
// var nb5 = readline.questionInt('Entrer un 5e nombre : ');
// somme = nb1 + nb2 + nb3 + nb4 + nb5
// var moyenne=somme/5
// console.log(`La somme des 5 nombres est de ${somme}`);
// //j'aurais pu écrire directement : console.log(`la somme est de ${nb1+nb2+nb3+nb4+nb5}); sans passer par les var somme et moyenne.
// console.log(`La moyenne des 5 nombres est de ${moyenne}`);


// var i = 0
// var somme = 0
//     while(i<5){
//         var nb = readline.questionInt('Entrer un nombre : ');
//         somme=somme+nb;
//         i = i+1;
//     }
//     var moyenne=somme/5;
//     console.log(`La somme des 5 nombres est de ${somme}`);
//     console.log(`La moyenne des 5 nombres est de ${moyenne}`);

// var nb1 = readline.questionInt('Entrer un 1er nombre'); //MERLIN OUBLIE PAS DE METTRE LE INT BOURDEL !
// var nb2 = readline.questionInt('Entrer un 2nd nombre');
// console.log(`La somme est de ${(nb1+nb2)}, la différence est de ${(nb1-nb2)}, le produit est de ${(nb1*nb2)}, le quotient est de ${(nb1/nb2)}, le reste est de ${(nb1%nb2)}`);

var nbDeCopies = readline.questionInt('Entrer un nombre de copies');
    while (nbDeCopies < 1){
        console.log(`Nombre de copies insuffisant.`);
        var nbDeCopies = readline.questionInt('Entrer un nombre de copies');
    }

    if (nbDeCopies>20){  //ATTENTION, si je change l'ordre de mes conditions, risque d'erreur : si la condition >10 est en 
    // premier et >20 en deuxième et que je propose un nombre de copies à 22, ma première condition va être acceptée, la seconde
    // pas même testée et mon prix final sera donc faux.
        console.log(`Le prix est de ${nbDeCopies*0.3} €.`);
    } else if (nbDeCopies>10){
        console.log(`Le prix est de ${nbDeCopies*0.4} €.`);
    } else {console.log(`Le prix est de ${nbDeCopies*0.5} €.`);}

//quand on fait appel à une fonction

    
var copies = readline.questionInt('Entrer un nombre de copies');
    

    var total = 0;
    if (copies > 20){
        total = calculTotalCopies(copies, 0.3);
    } else if (copies > 10){
        total = calculTotalCopies(copies, 0.4);
    } else {
        total = calculTotalCopies(copies, 0.5);
    }

    console.log(`Le prix total est de ${total} €`);

function calculTotalCopies(c,prix) {
    return c * prix;
}

function enMajuscule(texte){
    return texte.toUpperCase();
}
//fonction pour passer des informations de type texte en majuscule.

console.log(enMajuscule("hello"))
console.log(enMajuscule("world"))
console.log(enMajuscule("toto"))

    

