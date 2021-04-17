const readline = require('readline-sync');

/*
Les tableaux :
- déclaraer & initialiser d'un tableau,
- parcourir un tableau pour trouver le nombre le plus grand.
*/

let notes = [15,20,17,3,5,5,13,15,14,10,12,8,7];

function max(tab){
    //Le paramètre passé à la fonction est une "variable par défaut". Pour que la fonction fonctionne avec n'importe quel tableau, on lui dit qu'on a besoin d'un tableau en paramètre mais on ne passe pas un tableau spécifique au moment de la déclaration de la fonction. On passe le tableau spécifique 'notes' au moment de l'appel de la fonction max().
    let notemax = 0;
    // Pour avoir la note min, on initialise la valeur à 20 si la note maximale possible est 20. Si on ne sait pas quelle peut être la note maximale, on met par défaut la première valeur du tableau (notes[0]).

    //notes.length = longueur du tableau 'notes', c'est-à-dire le nombre de lignes contenues dans le tableau.
    for (let i=0; i<tab.length; i++){
        if (tab[i]>notemax){
            notemax = tab[i];
        }
    }
    console.log(notemax);
}
//Appel de la fonction max() avec passage en paramètre du tableau 'notes.
max(notes);