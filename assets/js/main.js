/**
 * Un alert espone 5 numeri casuali (univoci). 
 * Da lì parte un timer di 30 secondi.
 * Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 */



// Setup

var numbers = [];
var randomNumber = 0;
var userNumbers = [];
var matchedNumbers = [];

// referenze
var randomNumberList = document.getElementById('random-numbers');
var userNumberList = document.getElementById('user-numbers');
var matchedNumbersList = document.getElementById('matched-numbers');


// inserire numeri random in array
while (numbers.length < 5) {
    randomNumber = getRandomNumber(1, 50);

    if (!isInArray(numbers, randomNumber)) {
        numbers.push(randomNumber);
    }
}

// comunicare numeri
alert(numbers);


// prompt dopo timer di 30 secondi
setTimeout(function() {
    
    // inserimento numeri dall'utente
    getUserNumbers();

    // controllo corrispondenza e inserimento in nuovo array
    controlArray(numbers, userNumbers, matchedNumbers);

    
    // output risultato
    outputResult(randomNumberList, numbers, userNumberList, userNumbers, matchedNumbersList, matchedNumbers)
    
    
}, 1000);




// funzione genera numeri random
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min);
};

// funzione controllo presenza numero in array
function isInArray(array, number) {
    return array.includes(number);
};

// funzione per richiedere i numeri all'utente e push nell'array
function getUserNumbers() {
    for (var i = 0; i < 5; i++) {
        userNumbers.push( parseInt( prompt('Inserisci un numero')));
    };
    
};

// funzione per controllo se numeri utente in array numeri random e aggiungerli ad array numeri indovinati
function controlArray(array1, array2, array3) {
    for (var i = 0; i < 5; i++) {
        if (isInArray(array1, array2[i])) {
            array3.push(array2[i]);
        }
    };
    
};

// funzione cicli for per comunicare il risultato

function outputResult(list1, array1, list2, array2, list3, array3) {
    for (var i = 0; i < 5; i++) {

        // stampa i numeri random in lista
        list1.innerHTML += '<li>' + array1[i] + '</li>';

         // stampa numeri inseriti dall'utente in lista
        list2.innerHTML += '<li>' + array2[i] + '</li>';
        
    };

    // stampa numeri ricordati
    for (var j = 0; j < matchedNumbers.length; j++) {
        list3.innerHTML += '<li>' + array3[j] + '</li>';
    };
}