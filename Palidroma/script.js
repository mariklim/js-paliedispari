// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Creo una var nome per salvare il nome del utente
// 2. Dentro una funzione:Creo un controllo in cui scompongo la parola per le lettere
// 3. Faccio inversione delle lettere se IF hanno lo stesso ordine 
//     della parola originale quindi è una parola Palidroma
// 4. Stampo il risultato.

var userName = prompt("Scopri se il tuo nome é Palidromo! Scrivi il tuo nome: ").toLowerCase();

function wordPalindrome(wordToControl){
   var wordSplit = wordToControl.split("").reverse();
   var wordRevers = wordSplit.join('');
   var result;
   if(wordToControl == wordRevers){
    result = alert(wordToControl + " = " + wordRevers + " " + "é palindromo");
   }
   else{
    result = alert(wordToControl + " != " + wordRevers + " " + "non é palindromo");
   }
     
   return result;

}

wordPalindrome(userName);