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


// Utente inserisce pari o dispari (prompt) [evenodd]
// utente unserisce un numero da 1 a 5prompt [numUser]
// dichiariamo una funzione che mi deve restituire un risultato (se la parola che ottengo è uguale a ciò che ha inserito l'utente)
// nella funzione generiamo un numero random per il pc
// sommiamo il numero del pc con ul numero dell'utente
// se il numero è divisibile per 2 allora è pari
// se il numero non è divisibile per 2 allora è dispari
// fuori dalla funzione -> se l'output della funzione è uguale a evenodd stampiamo hai vinto
// altrimenti stampiamo hai perso


let playUser = prompt('Scegli pari o dispari')
console.log(playUser)

let numUser = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(numUser)


function numRandom (){
    return Math.floor(Math.random() * 5) + 1
}

let numPc = numRandom()
console.log(numPc)

let sum = numPc+numUser
console.log(sum)

function evenOdd (num){
    if (num % 2 === 0){
        return "pari"
    }
    else{
        return "dispari"
    }
}

let result = evenOdd(sum)
console.log(result)

if(result === playUser){
    console.log('Hai vinto')
}
else{
    console.log('Hai perso')
}