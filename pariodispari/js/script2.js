var ParioDispari;
var numberUtente;
function numberRandom(min,max)
{return Math.floor(Math.random()*(max+1-min)+min);
}
function isPari(num)
{ num=parseInt(num);
  if(num % 2 === 0)
  {return true;}
  else{return false;}
}
function isValidoNumero(num)
{if(!isNaN(num) && num>=1 && num<=5)
{return true;
} else{return false;}
}
function isValidaScelta(scelta)
{if(scelta!=='pari' && scelta!='dispari')
{return false;}else{
  return true;
}
}
function gioco(){
while(!isValidaScelta(ParioDispari))
{ ParioDispari = prompt('Scegli pari o dispari');}
while(!isValidoNumero(numberUtente))
{numberUtente=parseInt(prompt('Inserisci un numero tra 1 e 5'));}

var random=numberRandom(1,5);
var somma=numberUtente+random;
if(ParioDispari=='pari')
{
  if(isPari(somma))
  {alert('Il computer ha inserito '+random+',la somma è '+somma+' :hai vinto')}
  else{alert('Il computer ha inserito '+random+',la somma è '+somma+ ' :hai perso')}

}
else if (ParioDispari=='dispari')
{
    if(isPari(somma))
  {alert('Il computer ha inserito '+random+',la somma è '+somma+' :hai vinto')}
  else{alert('Il computer ha inserito '+random+',la somma è '+somma+ ' :hai perso')}

}

}

gioco();
