/* Snack 4
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

let results = [];
// user input is declared beforehand so we can keep track of it outside the loop
let userInput;

// loop ends when user decides to type end
while (userInput != 'end') {
    userInput = prompt('Input an integer or type "end" to stop playing.');

    // checks that input is a number and an integer
    if(!isNaN(userInput) && Number.isInteger(Number(userInput))){
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