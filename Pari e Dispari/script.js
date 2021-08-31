// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. Chiedo l'utente il numero dispari o pari, prima faccio il controlo se sta inserendo il numero,  salvo in una var.
// 2. Creo una funzione per il numero randomico
// 3. Creo var la somma di due numeri.
// 4. Creo una funzione se numero e paro o dispari
// 5. Stampo il risultato

var pariDispariUtente = prompt("scegli pari o dispari");
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numeroUtente);

function numberRandom(min, max){
    return parseInt(Math.random() * (max - min + 1) + min);
}
var numeroComputer;
console.log(numeroComputer = numberRandom(1, 5));

var somma = numeroUtente + numeroComputer;
console.log(somma);

function evenORodd(num){
    if(num%2 == 0){
        return "pari";
        }
        else{
        return "dispari";
        }
}
var result;
// controllo se la somma è pari o dispari
if (evenORodd(somma) == "pari"){
    result = "pari";
}else if (evenORodd(somma) == "dispari"){
    result = "dispari";
}

// controllo se il risultato (pari o dispari) della somma corrisponde a quello che ha scelto utente.
if (pariDispariUtente == result){
    console.log("hai vinto: " + "ha scelto " + pariDispariUtente + " e anche la somma " + somma + " è " + result );
}else{
    console.log ("hai perso: " + "ha scelto " + pariDispariUtente + " e anche la somma " + somma + " è " + result );
}