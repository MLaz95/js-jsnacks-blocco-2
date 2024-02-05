/* Snack 1
- Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
- Continua a chiedere i numeri all’utente e a inserirli nell’arrayfino a quando
la somma degli elementi è minore di 50 */

// set up array and sum variable
const array = [];
let sum = 0;

do {
    const userInput = Number(prompt("Inserisci un numero"));
    array.push(userInput);
    sum += userInput;
} while (sum < 50);

document.querySelector('#result').innerHTML = `You input ${array}, the final value is ${sum}`

