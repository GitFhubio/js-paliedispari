var tuaparola=prompt('Inserisci una parola ti dirò se è palindroma');

function is_palindroma (parola){
var array= parola.split('');
array.reverse();
var parolareverse=array.join('')

if (parola===parolareverse)

{return true;}

else{return false;}
}

if (is_palindroma(tuaparola))
{alert('La tua parola è palindroma')}
else{
  alert('La tua parola non è palindroma');
}
