// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
var ParioDispari;
var numberUtente;
var random;
var somma;
var risposta;
function numberRandom(min,max)
{return Math.floor(Math.random()*(max+1-min)+min);
}
// function isPari(num)
// {if(parseInt(num) % 2 === 0)
//   {return true;}
//   else {return false;}
// }

function PariDispari(num)
{if(parseInt(num) % 2 === 0)
  {return 'pari';
}
  else {return 'dispari';
}
}

function isValidoNumero(num)
{if(!isNaN(num) && num>=1 && num<=5)
{return true;
} else{return false;
}
}
function isValidaScelta(scelta)
{if(scelta!=='pari' && scelta!=='dispari')
{return false;
}else{
  return true;
}
}
function gioco(){
while(!isValidaScelta(ParioDispari)){
  ParioDispari = prompt('Scegli pari o dispari');
}
while(!isValidoNumero(numberUtente)){
  numberUtente=parseInt(prompt('Inserisci un numero tra 1 e 5'));
}

random=numberRandom(1,5);
somma=numberUtente+random;
risposta='Hai scelto '+ParioDispari+' ,il computer ha inserito '+random+' ,la somma è '+somma;

  if(PariDispari(somma)==ParioDispari){
    alert(risposta+' :hai vinto');
  }

else
{
  alert(risposta+' :hai perso')
}
}
gioco();
