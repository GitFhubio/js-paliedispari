// versione base

var ParioDispari = prompt('Scegli pari o dispari');
var numberUtente= parseInt(prompt('Dici un numero da 1 a 5'));
var random;
var somma;
function numberRandom(min,max)
{return Math.floor(Math.random()*(max+1-min)+min);
}
function isPari(num)
{ num=parseInt(num);
  if(num % 2 === 0)
  {return true;}
  else{return false;}
}
random=numberRandom(1,5);
somma=numberUtente+random;
if(ParioDispari=='pari')
{
  if(isPari(somma))
  {alert('Il computer ha inserito '+random+',la somma è '+somma+' :hai vinto')}
  else{alert('Il computer ha inserito '+random+',la somma è '+somma+ ' :hai perso')}

}
else if (ParioDispari=='dispari')
{
    if(isPari(somma))
  {alert('Il computer ha inserito '+random+',la somma è '+somma+' :hai perso')}
  else{alert('Il computer ha inserito '+random+',la somma è '+somma+ ' :hai vinto')}

}
