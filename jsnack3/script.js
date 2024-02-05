/* Snack 3
- Crea due array che hanno un numero di elementi diversi.
- Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
- (Se iniziate con un array da 3 elementi e l'altro da 5,
eseguite istruzioni sinchè non ne hanno entrambi 5) */

// an array with for elements and an empty array
const players = ['Danny', 'David', 'Jack', 'Nicole'];
let score = [];

// adds numbers to empty array until it matches the other one
for(i = 0; i < players.length; i++){
    score.push(Math.floor(Math.random() * 100 + 1));
}

document.querySelector('#result').innerHTML = `${players} <br> ${score}`