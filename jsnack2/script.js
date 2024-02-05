/* Snack 2
- Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero.
- Il programma poi deve far comparire un messaggio "il numero è troppo alto"
oppure "il numero è troppo basso" nel momento in cui il numero
detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
- Quando l'utente trova il numero, fateglielo sapere! */

// generates number between 1 and a 100
const number = Math.floor(Math.random() * 100 + 1);
console.log(number)

do{
    // asks the user a number and compares it to the random computer number
    userGuess = Number(prompt('Guess what number I am thinking of'))
    if (userGuess > number){
        alert('Too high, guess again');
    }else if (userGuess < number){
        alert('Too low, guess again');
    }

    // stops when the user guesses right
} while (userGuess != number);

document.querySelector('#result').innerHTML = `You got it! ${userGuess} is correct`