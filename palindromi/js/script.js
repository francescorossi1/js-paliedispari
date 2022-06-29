// Steps

// Creo la funzione che inverte la parola scritta

function getReverseWord(word){
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return reversedWord;
}

// Creo la funzione che verifica se una parola è palindroma o no

function isPalindrome(word){
    let isPalindrome = false;
    if(word === reversedWord){
        isPalindrome = true;
    }
    return isPalindrome;
}

// Chiedo all'utente la parola da inserire

let userWord = prompt('Inserisci una parola','Anna').toLowerCase().trim();

// Ripeto finché non è una parola vera

while(!userWord || !isNaN(userWord)) {
    alert('Inserisci una parola corretta!')
    userWord = prompt('Inserisci una parola');
}

console.log(userWord)

// Recupero la parola al contrario

const reversedWord = getReverseWord(userWord);
console.log(reversedWord);

// Recupero l'esito della funzione

const result = isPalindrome(userWord);

// Stampo un messaggio di conferma

let message = `La parola ${userWord} è palindroma`
if(!result){
    message = `La parola ${userWord} non è palindroma`
}

console.log(message)