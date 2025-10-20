// exportar las funciones para usarlas en el módulo seguro coche
export function fillYearOptions(selectElement, yearsBack = 19) {
    if (!selectElement) return;
    const max = new Date().getFullYear();
    const min = max - yearsBack;
    selectElement.innerHTML = '<option value="">- Seleccionar -</option>';
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectElement.appendChild(option);
    }
}

export function mostrarError(mensaje, timeout = 3000) {
    if (document.querySelector('.error')) return;
    const div = document.createElement('div');
    div.classList.add('error', 'mt-10');
    div.textContent = mensaje;
    const form = document.getElementById('cotizar-seguro') || document.querySelector('form');
    const insertBeforeEl = document.getElementById('resultado') || null;
    if (form) form.insertBefore(div, insertBeforeEl);
    setTimeout(() => {
        div.remove();
    }, timeout);
}