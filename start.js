const readline = require('readline-sync');

// const name = readline.question("Donne ton nom:");

// var age; 
// age = 30;
// déclaration puis affectation

var age = 30;
//déclaration et affectation directe 
if (age > 17) {
    console.log('Vous êtes majeur.');
} else if (age < 14) {
    console.log('facebook interdit');
} else {
    console.log('C\'est bon, facebook autorisé');
    // \ permet de compter l'apostrophe dans la chaîne de caractères.
}

while (age < 64) {
    console.log('age :' + age);
    age++;
}

for(var i = 0; i < 10; i++){
    console.log('note : '+ i);
}
//avant le point-virgule = initialisation, ensuite = test (condition) et enfin = le post, lu après la suite d'insctructions si le test est rempli.