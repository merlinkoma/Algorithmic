const readline = require('readline-sync');
//cf correction correction_appliprof.js
function calculNotes(tab){
    let nbNotes = readline.questionInt('Entrer le nombre de notes.');
    let table =[];
    for(let i=0; i<nbNotes; i++){
        let notes = readline.questionInt('Entrer la note.');
        table[i] = notes;   
    }
    for(let i=0; i<nbNotes; i++){
    console.log(table[i]);
    }

    let notemax = 0;
    for (let i=0; i<table.length; i++){
        if (table[i]>notemax){
            notemax = table[i];
        }
    }
    console.log(`La note max est ${notemax}`);

    let notemin = 20;
    for (let i=0; i<table.length; i++){
        if (table[i]<notemin){
            notemin = table[i];
        }
    }
    console.log(`La note min est ${notemin}`);
}

calculNotes();