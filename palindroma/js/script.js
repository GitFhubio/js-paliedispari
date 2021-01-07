// var parola=prompt('Inserisci una parola');
// var parolarovescia=[];
// for (var i=parola.length-1; i>=0;i--) {
// parolarovescia.push(parola[i]);
// }
// parolarovescia=parolarovescia.join('');
//
// if(parola==parolarovescia)
// {
//   alert('la parola è palindroma')
// }
// else{
//   alert('la parola non è palindroma')
// }

// Sopra è la base di partenza
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
