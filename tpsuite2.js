const readline = require('readline-sync');
let x = readline.questionInt('Entrer un nombre.');
function suite(nb1){
    for (let i=1; i<11; i++){
        console.log(`${nb1+i}`);
    }
}
suite(x);