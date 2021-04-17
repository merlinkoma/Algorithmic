const readline = require('readline-sync');

/*
Bases :
- Déclaration & affectation d'une variable.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/

const name = readline.question("Nom ? ");
//la variable 'age' est déclarée à l'aide d'un let & non d'un const car la valeur va changer contrairement à la valeur de la variable name.
let age = readline.questionInt("Âge ? ");

// Est-ce que l'utilisateur est majeur ?
if (age > 17) {
    console.log(`${name} est majeur.`);
} else if (age < 14) {
    // \ permet de compter l'apostrophe dans la chaîne de caractères.
    console.log(`${name} est mineur et ne peut pas s\'inscrire sur facebook.`);
} else {
    console.log(`${name} est mineur et mais peut s\'inscrire sur facebook.`);   
}

/* 
Boucle while : tant que la variable 'age' est inférieure à 50, on écrit âge : la-valeur-de-age puis on ajoute 1 à la variable.
*/
while (age < 50) {
    console.log('âge :' + age);
    age++;
}

/*
Boucle for : 
- on déclare et initialise le compteur i à 0, => initialisation
- tant que la variable i est strictement inférieure à 10, la boucle s'exécute, => test/ condition
- on ajoute 1 à i à chaque tour de boucle & on écrit "note : la-valeur-de-i" => instruction à exécuter à la suite des autres instructions dans les accolades si le test est rempli
*/
for(var i = 0; i < 10; i++){
    console.log('note : '+ i);
}
