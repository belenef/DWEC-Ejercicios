// funciones y variables
export let progreso = 0; 

let contadorEl = null;
let barraFrontEl = null;

// setter para los elementos
export function setElements(contador, barraFront) {
    contadorEl = contador;
    barraFrontEl = barraFront;
}

export function aumentarContador() {
    if (progreso <= 100) {
        if (contadorEl) contadorEl.innerHTML = `${progreso}%`;
        if (barraFrontEl) barraFrontEl.style.width = `${progreso}%`;
        progreso++;
        setTimeout(aumentarContador, 50);
    }
}

