const readline = require('readline-sync');

let notes = [15,20,17,3,5,5,13,15,14,10,12,8,7];

// calculer la note la plus grande

function max(tab){
    let notemax = 0;
    // si j'avais voulu avoir le minimum, j'aurais pu mettre 20 mais quand on ne sait pas quel est le max ou le min, on peut mettre la première valeur du tableau.
    for (let i=0; i<notes.length; i++){
        if (notes[i]>notemax){
            notemax = notes[i];
        }
    }
    console.log(notemax);
}

max(notes);