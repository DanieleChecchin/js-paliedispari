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

    // Creo un ciclo for per ciclare in ogni lettera della parola inserita dall'utente
    for (let i = 0; i < word.length; i++) {

        // Creo un if per comparare le lettere
        if (word.charAt(0) === word.charAt(word.length -1)){
            answer = `La parola ${word} è palindroma`
        } else{
            answer = `La parola ${word} non è palindroma`
        }
    }
    // Preparo la risposta
    return answer;
}
 // Stampo la risposta fuori dalla funzione
console.log(isPalindrome(word))


