//Calcola la somma e la media dei primi 10 numeri.

//Dichiarazione delle variabili
let i = 1;
somma = 0;

//Calcolo la somma
while (i <= 10) {
    somma += i;
    i++;
}
//Calcolo la media
let media = somma / 10;
//Mostro a video i risultati
alert(`La somma dei primi 10 numeri è ${somma}, mentre la media è ${media}`);