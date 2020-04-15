/**
 * Un alert espone 5 numeri casuali (univoci). 
 * Da lì parte un timer di 30 secondi.
 * Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 */



// Setup

var numbers = [];
var randomNumber = 0;


// inserire numeri random in array
while (numbers.length < 5) {
    randomNumber = getRandomNumber(1, 10);

    if (!isInArray(numbers, randomNumber)) {
        numbers.push(randomNumber);
    }
}

// comunicare numeri
alert(numbers);





// funzione genera numeri random
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min);
};

// funzione controllo presenza numero in array
function isInArray(array, number) {
    return array.includes(number);
};