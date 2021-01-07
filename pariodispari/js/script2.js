var ParioDispari = prompt('Scegli pari o dispari');
var numberUtente;
// var numberUtente=prompt('Inserisci un numero tra 1 e 5');
function numberRandom(min,max)
{return Math.floor(Math.random()*(max+1-min)+min);
}
function isPari(num)
{ num=parseInt(num);
  if(num % 2 === 0)
  {return true;}
  else{return false;}
}

function isValido(num)
{if(!isNaN(num) && num>=1 && num<=5)
{return true;
} else{return false;}
}

function inserisciNumero(){
 return  numberUtente=parseInt(prompt('Inserisci un numero tra 1 e 5'));
}

while(!isValido(inserisciNumero()))
{inserisciNumero();}

var random=numberRandom(1,5);
console.log(random);
var somma=numberUtente+random;



function gioco(){
if(ParioDispari=='pari')
{
  if(isPari(somma))
  {alert('Hai vinto')}
else
{alert('Hai perso')}

}
else if (ParioDispari=='dispari')
{
    if(isPari(somma))
  {alert('Hai vinto')}
  else{alert('Hai perso')}
}
}


gioco();
