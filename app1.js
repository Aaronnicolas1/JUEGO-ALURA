//Declaración de variables.
let numeroInicial;
let numeroFinal;
let rangoNumeroSecreto = prompt('Hola, dime hasta que número quieres jugar. Del 1 al _ ?: ')
let numeroSecreto = Math.floor(Math.random()*rangoNumeroSecreto)+1; //Número pseudoaleatorio entre 1 - 10.
let numeroUsuario; // indefinida 

//Contadores.
let contador = 1;
let maximoDeIntentos = prompt('¿Cuantos intentos quieres tener para adivinar?: ');

//Ciclo que seguirá hasta que el número que ingrese el usuario sea 5.

while (numeroUsuario != numeroSecreto){

    /* while anidado. Se rompe el ciclo solo cuando no le queden intentos al 
       usuario. */

    while(maximoDeIntentos > 0){
        
        numeroUsuario = parseInt(prompt(`adivina el número secreto del 1 al ${rangoNumeroSecreto} :`));
        maximoDeIntentos -= 1; //Se van agotando las oportunidades de ganar.
        
        //Si el número que ingresa el usuario es igual al número secreto, el usuario gana.

        if (numeroSecreto == numeroUsuario){

            alert(`!Adivinaste¡, el número secreto es: ${numeroUsuario}. Acertaste a ${contador == 1 ? 'la' : 'las'} ${ contador} ${ contador == 1 ? 'vez.' : 'veces.' } `);
            break;

        } else {

            /* Se dá una pista si el número que el usuario ingresó es mayor o menor que
               el número por adivinar y además, agrega cuantos intentos le quedan al usuario.
               Cuando se te acaban los intentos, el cajetin muestra que perdiste.*/

            if (numeroUsuario < numeroSecreto){

                alert(`${maximoDeIntentos == 0 ? ' ': `el número secreto es mayor que ${numeroUsuario},`} te ${maximoDeIntentos == 1 ? 'queda':'quedan'} ${maximoDeIntentos} ${maximoDeIntentos == 1 ? 'intento.':'intentos.'}${maximoDeIntentos == 0 ?`Perdiste, el número secreto era ${numeroSecreto}.`:' '}`);

            } else {

                alert(`${maximoDeIntentos == 0 ? ' ' : `el número secreto es menor que ${numeroUsuario},`} te ${maximoDeIntentos == 1 ? 'queda':'quedan'} ${maximoDeIntentos} ${maximoDeIntentos == 1 ? 'intento.':'intentos.'}${maximoDeIntentos == 0 ? `Perdiste, el número secreto era ${numeroSecreto}.`:' '}`);
            }

            contador ++; /* Cuando se completa un ciclo, le suma 1 a la variable para ver el
                            número de intentos. */
        }
    }
}