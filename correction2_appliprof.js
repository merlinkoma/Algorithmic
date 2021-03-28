const readline = require('readline-sync');
//2nde solution pour l'exercice appliprof mais moins optimisée car dans la 1ere solution, on ne parcourt le tableau qu'une seule fois.

function prof2(){
    let nbNotes = askNbNote();
    let tableau= [];
    enterNote(tableau, nbNotes);
    sumAndAverage(tableau);
    min(tableau);
    max(tableau);
    supTen(tableau);
}

function askNbNote(){
    return readline.questionInt('Donne le nombre de notes à rentrer dans le tableau.');
}

function enterNote(tab, nb){
    for(let i=0; i<nb; i++){
        tab.push(readline.questionInt('Entrer la note ' + (i + 1) + ': ' ));
        //manière réduite d'écrire :
        //let n = readline.questionInt('Entrer la note.' + (i + 1) + ': ' );
        //tab.push(n);
    }
}

function sumAndAverage(tab){
    let somme = 0;
    for(let i=0; i < tab.length; i++){
        somme += tab[i];
    }
    console.log(`La somme du tableau est : ${somme}.`);
    console.log(`La moyenne du tableau est : ${somme/ tab.length}.`);
}

function min(tab){
    let min =tab[0];
    //car mon tableau existe déjà donc je peux appeler le premier i.
    for(let i =0; i< tab.length; i++){
        if (min>tab[i]){
            min= tab[i];
        }
    }
    console.log(`La note min est : ${min}`);
}

function max(tab){
    let max =tab[0];
    for(let i =0; i< tab.length; i++){
        if (max<tab[i]){
            max= tab[i];
        }
    }
    console.log(`La note max est : ${max}`);
}

function supTen(tab){
    let sup = 0;
    for(let i = 0; i<tab.length; i++){
        if (tab[i]>10){
            sup++;
        }
    }
    console.log(`Le nombre de notes sup à 10 est : ${sup}`);
}

prof2();