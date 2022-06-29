// Steps

// Chiedo all'utente un numero da 1 a 5

let userNum = parseInt(prompt('Scegli un numero fra 1 e 5','3'));

// Finché non soddisfa le condizioni glielo richiedo 
while(isNaN(userNum) || userNum < 1 || userNum > 5){
    alert('Il numero inserito non è corretto, riprova');
    userNum = parseInt(prompt('Scegli un numero fra 1 e 5'));
}

console.log('hai scelto: ' + userNum);

// Chiedo all'utente pari o dispari

let userChoice = prompt("Scegli un valore fa 'pari' o 'dispari'","pari");

// Finchè userchoice è SIA diverso da pari SIA diverso da dispari
while(userChoice !== 'pari' && userChoice !== 'dispari') {
    alert('Inserisci uno dei due valori')
    userChoice = prompt("Scegli un valore fa 'pari' o 'dispari'","pari");
} 

console.log('hai dichiarato: ' + userChoice);

// Creo una funzione che sorteggi un numero tra 1 e 5

function getRandomNum(min = 1,max = 5){
    let result = 0;

    result = Math.floor(Math.random() * (max + 1 - min)) + min;
    return result;
}

// Che uso per creare il numero della cpu

const cpuNum = getRandomNum();
console.log('la cpu ha estratto: ' + cpuNum);

// Sommo i due numeri

const sum = userNum + cpuNum;
console.log('la somma equivale a: ' + sum);

// Creo una funzione che determini se un numero è pari o dispari

function isEven(num){
    let isEven = true;
    if(num % 2) isEven = false;
    return isEven;
}

// Assegno una delle due opzioni che corrispondono alle scelte dell'utente (pari o dispari) in base a ciò che mi restituisce la funzione

let oddOrEven = "dispari"
if(isEven(sum)){
    oddOrEven = "pari"
}

// Creo un messaggio per stampare il risultato

let message = `Il risultato è ${oddOrEven}. `
if(userChoice === oddOrEven){
    message += "Hai vinto!"
} else{
    message += "Hai perso!"
}

console.log(message)


