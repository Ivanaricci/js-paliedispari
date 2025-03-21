// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



function wordPalindroma (word){
    // creo l'arrey con le lettere della parola
    let letters = word.split('')
    console.log(letters)
    
    // inverto l'array
    let arrayRev = letters.reverse()
    console.log(arrayRev)

    // unisco le lettere per ricreare la parola per il confronto
    let wordRev = arrayRev.join('')
    console.log(wordRev)

    return word === wordRev
}

let wordUser = prompt('inserisci qui la tua parola')
console.log(wordUser)

let palindroma = wordPalindroma (wordUser)

if (palindroma){
    console.log(`la parola è palindroma`)
}

else{
    console.log(`la parola non è palindroma`)
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


