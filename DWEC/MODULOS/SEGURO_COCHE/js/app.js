// importar las funciones y clases necesarias
import { Poliza } from './appClases.js';
import { fillYearOptions, mostrarError } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year');
    // rellenar años (últimos 20 años incluyendo actual)
    fillYearOptions(yearSelect, 19);
});

const form = document.getElementById('cotizar-seguro');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Eliminar mensaje de error anterior si existe
        const prevError = document.querySelector('.error');
        if (prevError) prevError.remove();

        // Obtener valores del formulario
        const gama = document.getElementById('gama').value;
        const year = document.getElementById('year').value;
        const tipo = document.querySelector('input[name="tipo"]:checked')?.value;

        // Validar campos
        if (gama === '' || year === '' || !tipo) {
            mostrarError('Todos los campos son OBLIGATORIOS');
            return;
        }

        // Si todo está bien, calcular seguro
        const poliza = new Poliza(gama, parseInt(year, 10), tipo);
        poliza.calcularSeguro();
        poliza.mostrarInfoHTML();
    });
}