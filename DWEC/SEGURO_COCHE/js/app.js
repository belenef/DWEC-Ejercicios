// Rellenar el campo año automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year');
    const max = new Date().getFullYear();
    const min = max - 19;

    // Rellenar opciones de año
    for(let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
});

// Manejo del formulario y mensajes de error
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Eliminar mensaje de error anterior si existe
    const prevError = document.querySelector('.error');
    if(prevError) prevError.remove();

    // Obtener valores del formulario
    const gama = document.getElementById('gama').value;
    const year = document.getElementById('year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value;

    // Validar campos
    if(gama === '' || year === '' || !tipo) {
        mostrarError('Todos los campos son OBLIGATORIOS');
        return;
    }

    // Si todo está bien, calcular seguro
    const poliza = new Poliza(gama, year, tipo);
    poliza.calcularSeguro();
    poliza.mostrarInfoHTML();
});

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    if(document.querySelector('.error')) return;
    const div = document.createElement('div');
    div.classList.add('error', 'mt-10');
    div.textContent = mensaje;
    document.querySelector('form').insertBefore(div, document.getElementById('resultado'));
    setTimeout(() => {
        div.remove();
    }, 3000);
}