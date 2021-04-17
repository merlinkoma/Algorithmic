const readline = require('readline-sync');

//Comparer les valeurs de 2 variables :
console.log('Comparer deux valeurs : ');
let nb1 = readline.questionInt('Entrer un 1er nombre : ');
let nb2 = readline.questionInt('Entrer un 2nd nombre : ');

if (nb1 < nb2) {
    //2 manières d'écrire la même chose :
    console.log(nb1 + ' est plus petit que ' + nb2);
    console.log(`${nb1} est plus petit que ${nb2}`);
}
// "===" permet de vérifier que le type des deux variables comparées est le même, contrairement à "=="
else if (nb1 === nb2) {
    console.log(`${nb1} est égal à ${nb2}`);
} else {
    console.log(`${nb1} est plus grand que ${nb2}`);
}
//Pour récupérer le type de la variable :
console.log(`Type de la variable '${nb1}' : ${typeof nb1}`);

//Faire des calculs simples :
console.log('Calculer une somme puis une moyenne : ');
let n1 = readline.questionInt('Entrer un 1e nombre : ');
let n2 = readline.questionInt('Entrer un 2e nombre : ');
let n3 = readline.questionInt('Entrer un 3e nombre : ');
let n4 = readline.questionInt('Entrer un 4e nombre : ');
let n5 = readline.questionInt('Entrer un 5e nombre : ');
let somme = n1 + n2 + n3 + n4 + n5;
let moyenne = somme / 5;
console.log(`La somme des 5 nombres est de ${somme}`);
//On aurait pu écrire directement : console.log(`la somme est de ${nb1+nb2+nb3+nb4+nb5}); sans déclarer la variable somme mais moins pratique pour écrire du code dynamique.
console.log(`La moyenne des 5 nombres est de ${moyenne}`);

console.log('Calculer une somme puis une moyenne en utilisant une boucle : ');
let j = 0;
let nouvelleSomme = 0;
while (j < 5) {
    let x = readline.questionInt('Entrer un nombre : ');
    nouvelleSomme = nouvelleSomme + x;
    j = j + 1;
}
let nouvelleMoyenne = nouvelleSomme / 5;
console.log(`La somme des 5 nombres est de ${nouvelleSomme}`);
console.log(`La moyenne des 5 nombres est de ${nouvelleMoyenne}`);

console.log('Calculer plusieurs opérations : ');
let a = readline.questionInt('Entrer un 1er nombre : ');
let b = readline.questionInt('Entrer un 2nd nombre : ');
console.log(`La somme est de ${(a + b)}, la différence est de ${(a - b)}, le produit est de ${(a * b)}, le quotient est de ${(a / b)}, le reste est de ${(a % b)}`);

/*
Calcul du prix des copies :
- il doit au moins y avoir une copie,
- si la quantité est supérieure à 20, la copie coûte 0.3€,
- si la quantité est supérieure à 10, la copie coûte 0.4€,
- sinon, la copie coûte 0.5€
*/
console.log('Calculer le prix des copies sans fonctions : ');
let nbDeCopies = 0;
while (nbDeCopies < 1) {
    nbDeCopies = readline.questionInt('Entrer un nombre de copies : ');
}

/*Attention à l'ordre des conditions :
Si la première condition est nbDeCopie > 10, pour 22 copies, elle sera vraie & la condition nbDeCopie > 20 qui suit ne sera même pas testée donc le prix final faux.
*/
if (nbDeCopies > 20) {
    console.log(`Le prix est de ${nbDeCopies * 0.3} €.`);
} else if (nbDeCopies > 10) {
    console.log(`Le prix est de ${nbDeCopies * 0.4} €.`);
} else { console.log(`Le prix est de ${nbDeCopies * 0.5} €.`); }

console.log('Calculer le prix des copies avec fonctions : ')

let totalCopies = readline.questionInt('Entrer un nombre de copies : ');
let totalPrix = 0;

//On appelle une fonction définie plus bas pour ne pas faire le calcul directement dans la condition.
if (totalCopies > 20) {
    totalPrix = calculTotalCopies(totalCopies, 0.3);
} else if (totalCopies > 10) {
    totalPrix = calculTotalCopies(totalCopies, 0.4);
} else {
    totalPrix = calculTotalCopies(totalCopies, 0.5);
}

console.log(`Le prix total est de ${totalPrix} €`);

function calculTotalCopies(quantité, prix) {
    return quantité * prix;
}

//Fonction pour passer des informations de type texte en majuscule.
console.log('Utilisation d\'une fonction qui retourne les mots donnés en majuscule : ')

function enMajuscule(texte) {
    return texte.toUpperCase();
}

console.log(enMajuscule("hello"))
console.log(enMajuscule("world"))



