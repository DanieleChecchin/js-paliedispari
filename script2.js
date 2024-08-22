/*
PARI e DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/

// FASE DI RACCOLTA DATI
let usereChoice = prompt('Scegli pari o dispari');
console.log('L\'utente ha scelto ' + usereChoice)
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('L\'utente ha scelto il numero ' + userNumber)

// Creo una funzione per generare un numero random da 1 a 5 per il pc
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Stampo in console il numero del pc
const pcNumber = getRandomNumber();
console.log('Il computer ha scelto il numero: ' + pcNumber)

// Sommo i due numeri
let sum = userNumber + pcNumber;
console.log('La somma dei due numeri è: ' + sum);

// Creo una funzione per stabilire se la somma è pari o dispari

function isEven(sum) {
    if (sum % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

// Creo una variabile che contiene la risposta della funzione
const result = isEven(sum);

// Stampo la risposta della funzione
console.log(result);

// Dichiaro chi ha vinto
const resultMessage = result === usereChoice ? 'Il giocatore ha vinto' : 'Il pc ha vinto';

// Stampo il messaggio finale
console.log(resultMessage);
