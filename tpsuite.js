const readline = require('readline-sync');
let x = readline.questionInt('Entrer un nombre.');
function suite(nb1){
    let i = 0;
    while (i < 11){
        console.log(`${nb1+i}`);
        i=i+1;
    }
}
suite(x);