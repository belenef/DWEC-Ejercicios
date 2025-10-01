const contador = document.querySelector('div.contenedor div.contador');
const barraFront = document.querySelector('.barraFront');

//Variable que va a ir aumentando el progreso de la barra
let progreso = 0;

//Función que va a ir aumentando el progreso de la barra
function aumentarContador(){
    if(progreso <= 100){

        //El contador va a ir aumentando conforme el progreso vaya aumentando
        contador.innerHTML = `${progreso}%`;
        //La barra se va a ir llenando conforme el progreso vaya aumentando
        barraFront.style.width = `${progreso}%`;
        progreso++;
        setTimeout(aumentarContador,50);
    } 
}

aumentarContador();