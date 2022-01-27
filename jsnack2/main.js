//Stampa il cubo dei primi N numeri
//N è un numero indicato dall’utente

//Dichiarazione delle variabili
let numero = parseInt(prompt("Di quanti numeri vuoi vedere il cubo ?"));

//Controllo che sia un numero intero
while (numero <= 0 || isNaN(numero)) {
    alert('Ha inserito un numero sbagliato!');
    numero = parseInt(prompt('Inserisci un numero maggiore di zero'));
}

//Dichiarazione del contatore e di una variabile vuota
let i = 1;
let cubo = '';

//Eseguo il cubo dei numeri fino a N
while (i <= numero) {
    cubo += `<span>Il cubo di ${i} è ${Math.pow(i, 3)}</span><br>`;
    i++;
}

let containerElements = document.getElementById("container");
containerElements.innerHTML = cubo;

