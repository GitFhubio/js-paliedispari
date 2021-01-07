var ParioDispari = prompt('Scegli pari o dispari');
var numberUtente= parseInt(prompt('Dici un numero da 1 a 5'));

function numberRandom(min,max)
{return Math.floor(Math.random()*(max+1-min)+min);
}
function isPari(num)
{ num=parseInt(num);
  if(num % 2 === 0)
  {return true;}
  else{return false;}
}
var random=numberRandom(1,5);
console.log(random);
var somma=numberUtente+random;
if(ParioDispari=='pari')
{
  if(isPari(somma))
  {alert('Hai vinto')}
  else{alert('Hai perso')}

}
else if (ParioDispari=='dispari')
{
    if(isPari(somma))
  {alert('Hai vinto')}
  else{alert('Hai perso')}

}
