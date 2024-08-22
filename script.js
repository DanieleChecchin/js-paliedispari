/*     
PALIDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let word = prompt('Inserisci una parola');
// Creo una funzione
function isPalindrome(word) {
    // Creo una variabile che contenga la risposta finale
    let answer = word.chartAt(0) === word.chartAt(word.lenght - 1) ? 'La parola è Palindroma' : 'La parola non è Palindroma';
    console.log(word + answer)
    // Preparo la risposta che riceverò
    return answer;
}

console.log(isPalindrome('Ciao'))


/*
PARI e DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/