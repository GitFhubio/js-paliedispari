// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parolaUtente=prompt('Inserisci una parola');

console.log(parolaUtente.length);
function isValida(parola){
  if(isNaN(parola) && parola.length>2){
  return true;
}
else{
  return false;
}
}
function isPalindroma(parola){
var parolarovescia=[];
parola=parola.toLowerCase();
for (var i=parola.length-1; i>=0;i--) {
parolarovescia.push(parola[i]);
}
parolarovescia=parolarovescia.join('');

if(parola==parolarovescia)
{
  return true;
}
else{
  return false;
}

}

if (isValida(parolaUtente) && isPalindroma(parolaUtente))
{
  alert('La parola è palindroma')
}
else if(isValida(parolaUtente) && !isPalindroma(parolaUtente)){
  alert('La parola non è palindroma')
}else {
  alert('Devi inserire una parola')
}


// Nota:Al solito parolarovescia anziché essere trasformato in array e poi riempito col push poteva rimanere stringa così come era,inizializzata con ''
// e poi nel for parolarovescia+=parola[i] evitando join
// Nota 2:Versione script3 con function reverse
