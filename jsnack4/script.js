/* Snack 4
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

let results = [];
let userInput;

while (userInput != 'end') {
    userInput = prompt('Input a number or type "end" to stop playing.');

    if(!isNaN(userInput)){
        if (userInput % 2 == 0){
        results.push(userInput);
        alert(results);
        } else {
            results.push(Number(userInput) + 1);
            alert(results);
        }
    } 
}

document.querySelector('#result').innerHTML = `Here are all your results <br> ${results}`