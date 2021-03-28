const readline = require('readline-sync');
//demander le nombre de notes, demander les notes et les mettre dans un tableau, calculer la somme et la moyenne puis afficher le message au prof, indiquer la note min et la note max.

function prof(){
    let nbNotes = readline.questionInt('Entrer le nombre de notes. ');

    let table = [];
    let somme = 0;
    let max = 0;
    let min = 20;
    let countSup10 = 0;

    for(let i=0; i<nbNotes; i++){
        let n = readline.questionInt('Entrer la note.' + (i + 1) + ' ' );
        table.push(n);
        somme += n;
        //idem que somme = somme+n;
            if (max<n){
                max = n;
            }

            if (min>n){
                min = n;
            }

            if (n>10){
                countSup10++;
            }
    }

    console.log(`La somme est de : ${somme}`);
    console.log(`La moyenne est de : ${somme/table.length}`);
    console.log(`La note maximale est : ${max}`);
    console.log(`La note minimale est : ${min}`);
    console.log(`Le nombre de notes supérieures à 10 est : ${countSup10}`);
}

prof();