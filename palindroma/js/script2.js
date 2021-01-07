// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parolaUtente=prompt('Inserisci una parola');

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

isPalindroma(parolaUtente);
