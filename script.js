/*     
PALIDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let word = prompt('Inserisci una parola');
// Creo una funzione
function isPalindrome(word) {
    // Creo una variabile che contenga la risposta finale
    let answer = '';

    for (let i = 0; i < word.length; i++) {
        // Ciclo su ogni lettera
        const letterWord = word[i];

        // Creo un if



    }

    // Preparo la risposta
    return answer;
}

console.log(isPalindrome(word))


/*
PARI e DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/

// FASE DI RACCOLTA DATI
let usereChoice = promp('Scegli pari o dispari');
let userNumber = prompt('Scegli un numero da 1 a 5');

// Creo una funzione per generare un numero random da 1 a 5 per il pc
function getRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}
const randomNumber = getRandomNumber;
console.log(randomNumber)