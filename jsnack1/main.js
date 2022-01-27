//Chiedere per 10 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti.

//Dichiarazione delle variabili
let i = 1;
let numero = 0;
let somma = 0;

//Chiedo per 10 volte di inserire il numero ed eseguo la somma
while (i <= 10) {
    numero = parseInt(prompt("Inserisci il " + i + " numero"));
    //Controllo che il numero inserito sia un numero intero 
    while (numero <= 0 || isNaN(numero)) {
        alert('Ha inserito un numero sbagliato!');
        numero = parseInt(prompt('Inserisci un numero maggiore di zero'));
    }
    somma += numero;
    i++
}

//Mostro la sommo a video
alert("La somma dei numeri che hai inserito è " + somma);