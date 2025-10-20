// Selectores y arranque
import { setElements, aumentarContador } from './funciones.js';

// esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const contador = document.querySelector('div.contenedor div.contador');
    const barraFront = document.querySelector('.barraFront');
    setElements(contador, barraFront);

    // arrancar la función 
    aumentarContador();
});