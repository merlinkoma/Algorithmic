/*
Appli prof : 
- demander le nombre de notes, 
- demander les notes et les mettre dans un tableau, 
- calculer la somme,
- calculer la moyenne,
- afficher un message au prof en indiquant la note min et la note max,
- afficher le nombre de notes supérieures à 10.

Pour lancer le test de l'appli : node *nomdufichier* dans le terminal VSC/ l'invite de cmd
*/

const readline = require('readline-sync');
//Module node permettant de demander à l'utilisateur une information.

function appProf(){
    let nbNotes = readline.questionInt('Nombre de notes ? '); 
    //questionInt -> oblige à entrer un chiffre, renvoie une erreur si le type de la valeur n'est pas bon.
    let notes = [];
    for(let i=0; i<nbNotes; i++){
        let note = readline.questionInt(`Note ${i+1} : `);
        notes[i] = note;
    }
    
    //Somme & moyenne
    let somme = 0;
    let moyenne = 0;
    notes.forEach(note => {
        somme += note;
    });
    moyenne = (somme/notes.length).toFixed(2);
    //.toFixed(value) : nombre de chiffres voulus après la virgule. 
    console.log(`La somme est de : ${somme}`);
    console.log(`La moyenne est de : ${moyenne}`);
    
    //Notes nim & max
    let noteMin = 20;
    let noteMax = 0;
    notes.forEach(note => {
        if (note > noteMax){
            noteMax = note;
        }
        if (note < noteMin){
            noteMin = note;
        }
    })
    console.log(`La note minimum est : ${noteMin}`);
    console.log(`La note maximum est : ${noteMax}`);

    //Notes > 10
    let notesPos = [];
    for(let i = 0; i<notes.length; i++){
        if(notes[i] >= 10){
            notesPos.push(notes[i]);
        }
    }
    console.log(`Notes positives : `);
    notesPos.forEach(notePos => {
        console.log(`${notePos} `);
    })
    console.log(`Nombre de notes positives : ${notesPos.length}`);
}

//Ne pas oublier d'appeler la fonction pour la tester.
appProf();