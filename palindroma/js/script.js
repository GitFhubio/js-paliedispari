// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parolaUtente;
var parolarovescia;
function isValida(parola){
  if(isNaN(parola) && parola.length>2){
  return true;
}
else{
  return false;
}
}
parolaUtente='';
while(!isValida(parolaUtente))
{parolaUtente=prompt('Inserisci una parola');}

function isPalindroma(parola){
parolarovescia=[];
// Nota1:Al solito parolarovescia anziché essere array poi riempito col push poteva rimanere stringa inizializzata con ''
// e poi nel for parolarovescia+=parola[i] evitando join
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

if (isPalindroma(parolaUtente))

  {alert('La parola è palindroma');}
else{
  alert('La parola non è palindroma')
}


// Nota 2:Versione script3 con function reverse
