// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var input=prompt('Inserisci una parola');

function isPalindroma(parola){
var parolarovescia=[];
if(isNaN(parola)){
parola=parola.toLowerCase();
for (var i=parola.length-1; i>=0;i--) {
parolarovescia.push(parola[i]);
}
parolarovescia=parolarovescia.join('');

if(parola==parolarovescia)
{
  alert('la parola è palindroma')
}
else{
  alert('la parola non è palindroma')
}
} else{
  alert('Devi inserire una parola')
}
}

isPalindroma(input);

// Nota:Al solito parolarovescia anziché essere trasformato in array e poi riempito col push poteva rimanere stringa così come era,inizializzata con ''
// e poi nel for parolarovescia+=parola[i] evitando join
// Nota 2:Versione bonus con function reverse
