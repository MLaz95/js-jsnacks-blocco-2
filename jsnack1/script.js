/* Snack 1
- Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
- Continua a chiedere i numeri all’utente e a inserirli nell’arrayfino a quando
la somma degli elementi è minore di 50 */

// set up array and sum variable
const array = [];
let sum = 0;

do {
    const userInput = Number(prompt("Insert a number"));

    // input validation
    if (isNaN(userInput)){
        alert('That is not a number, please try again');
    } else{
        // adds input to array and to the sum
        array.push(userInput);
        sum += userInput;
    }
        // ends when sum is 50 or higher
} while (sum < 50);

document.querySelector('#result').innerHTML = `You input ${array}, the final value is ${sum}`

