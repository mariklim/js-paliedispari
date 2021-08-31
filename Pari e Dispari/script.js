// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var numero = parseInt(prompt("Inserisci un numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("Non è un numero, inserisci un numero"));
}
 if (numero % 2 == 0){
     console.log(numero);
     alert("il numero pari è " + numero)
 }
    else{
        console.log(numero + 1);
        alert("il numero " + numero + " " + "+ 1 è " + (numero + 1));
 }


