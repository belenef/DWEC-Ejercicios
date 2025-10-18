class Presupuesto {
    constructor(cantidad) {
        this.presupuesto = Number(cantidad);
        this.restante = Number(cantidad);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, g) => total + Number(g.cantidad), 0);
        this.restante = this.presupuesto - gastado;
        return this.restante;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(g => g.id !== id);
        this.calcularRestante();
    }
}

class Interfaz {
    // Asegura estructura mínima en DOM y crea elementos necesarios si faltan
    prepararUI() {
        // Crear lista de gastos dentro de #gastos si falta
        const gastosCont = document.getElementById('gastos');
        if (gastosCont && !gastosCont.querySelector('ul')) {
            const card = document.createElement('div');
            card.className = 'card';
            const body = document.createElement('div');
            body.className = 'card-body p-0';
            const ul = document.createElement('ul');
            ul.className = 'list-group list-group-flush';
            body.appendChild(ul);
            card.appendChild(body);
            gastosCont.appendChild(card);
        }

        // Crear contenedor #presupuesto si falta
        if (!document.getElementById('presupuesto')) {
            const secundario = document.querySelector('.secundario') || document.querySelector('.contenido') || document.querySelector('.col:nth-child(2)');
            if (secundario) {
                const presDiv = document.createElement('div');
                presDiv.id = 'presupuesto';
                presDiv.className = 'mt-3';
                secundario.appendChild(presDiv);
            }
        }

        // Dentro de #presupuesto creamos los dos alerts si faltan
        const presCont = document.getElementById('presupuesto');
        if (presCont && !presCont.querySelector('.alert')) {
            const divTotal = document.createElement('div');
            divTotal.className = 'alert alert-primary';
            divTotal.id = 'totalBox';
            divTotal.innerHTML = '<strong>Presupuesto: </strong><span id="total"></span>';
            const divRest = document.createElement('div');
            divRest.className = 'alert restante alert-success';
            divRest.id = 'restBox';
            divRest.innerHTML = '<strong>Restante: </strong><span id="restante"></span>';
            presCont.appendChild(divTotal);
            presCont.appendChild(divRest);
        }
    }

    // Pinta presupuesto y restante 
    imprimirPresupuesto(presObj) {
        const totalEl = document.getElementById('total');
        const restanteEl = document.getElementById('restante');
        if (totalEl) totalEl.textContent = `${formatMoney(presObj.presupuesto)}`;
        if (restanteEl) restanteEl.textContent = `${formatMoney(presObj.restante)}`;
    }

    // Muestra alerta
    imprimirAlerta(mensaje, tipo = 'danger', tiempo = 3000) {
        const contenedor = document.querySelector('.primario') || document.querySelector('.contenido-principal') || document.body;
        if (!contenedor) return;

        // Elimina alerta previa si existe
        const existing = contenedor.querySelector('.custom-alert');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.className = 'text-center alert custom-alert';
        if (tipo === 'success') div.classList.add('alert-success');
        else if (tipo === 'danger') div.classList.add('alert-danger');
        else if (tipo === 'validation') div.classList.add('alert-danger', 'validation');

        div.innerHTML = mensaje;

        // Insertar en la parte superior de la columna 
        const prim = contenedor.querySelector('.contenido') || contenedor;
        prim.insertBefore(div, prim.firstChild);

        setTimeout(() => {
            if (div.parentNode) div.remove();
        }, tiempo);
    }

    // Imprime la lista de gastos en el HTML
    imprimirGastosListado(gastos) {
        // usamos #gastos-list ul
        const lista = document.getElementById('gastos-list') || document.querySelector('#gastos ul') || document.querySelector('#gastos-list');
        // limpiar HTML 
        const ul = document.getElementById('gastos-list') || document.querySelector('#gastos ul');
        if (!ul) return;
        while (ul.firstChild) ul.removeChild(ul.firstChild);

        gastos.forEach(gasto => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.dataset.id = gasto.id;

            
            const nameDiv = document.createElement('div');
            nameDiv.style.flex = '1';
            nameDiv.textContent = gasto.nombre;

            
            const centerDiv = document.createElement('div');
            centerDiv.style.width = '80px';
            centerDiv.style.display = 'flex';
            centerDiv.style.justifyContent = 'center';
            centerDiv.style.alignItems = 'center';

            const badge = document.createElement('span');
            badge.className = 'bg-primary text-white';
            
            badge.style.display = 'inline-flex';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.style.minWidth = '44px';
            badge.style.height = '28px';
            badge.style.borderRadius = '6px';
            badge.style.fontSize = '0.9rem';
            badge.style.padding = '0 6px';
            badge.textContent = `${formatMoney(gasto.cantidad)}€`;

            centerDiv.appendChild(badge);

            // botón borrar
            const rightDiv = document.createElement('div');
            rightDiv.style.marginLeft = '12px';
            const btnBorrar = document.createElement('button');
            btnBorrar.className = 'btn btn-danger btn-sm borrar-gasto';
            btnBorrar.textContent = 'Borrar X';
            btnBorrar.dataset.id = gasto.id;
            rightDiv.appendChild(btnBorrar);

            //montar li
            li.appendChild(nameDiv);
            li.appendChild(centerDiv);
            li.appendChild(rightDiv);

            ul.appendChild(li);
        });
    }

    // Limpia la lista de gastos del DOM (evita duplicados)
    limpiarHTML() {
        const lista = document.querySelector('#gastos ul');
        if (!lista) return;
        while (lista.firstChild) lista.removeChild(lista.firstChild);
    }

    // Actualiza el valor restante en pantalla
    actualizarRestante(presObj) {
        const restanteEl = document.getElementById('restante');
        if (restanteEl) restanteEl.textContent = `${formatMoney(presObj.restante)}`;
        this.comprobarPresupuesto(presObj);
    }

    // Cambia el color del alert restante según el porcentaje gastado
    comprobarPresupuesto(presObj) {
        const contRestante = document.querySelector('.restante');
        if (!contRestante) return;

        contRestante.classList.remove('alert-success', 'alert-warning', 'alert-danger');

        if (presObj.presupuesto <= 0) {
            contRestante.classList.add('alert-danger');
        } else {
            const gastado = presObj.presupuesto - presObj.restante;
            const porcentaje = gastado / presObj.presupuesto;

            if (porcentaje > 0.75) {
                contRestante.classList.add('alert-danger'); // rojo
            } else if (porcentaje > 0.5) {
                contRestante.classList.add('alert-warning'); // amarillo
            } else {
                contRestante.classList.add('alert-success'); // verde
            }
        }

        // Control del botón Agregar
        const btnAgregar = document.querySelector('#agregar-gasto button[type="submit"]');
        if (btnAgregar) {
            if (presObj.restante <= 0) {
                btnAgregar.disabled = true;
                btnAgregar.classList.add('disabled');
            } else {
                btnAgregar.disabled = false;
                btnAgregar.classList.remove('disabled');
            }
        }
    }
}

// Formatea números a formato monetario (sin símbolo €)
function formatMoney(value) {
    const v = Number(value);
    if (Number.isNaN(v)) return '';
    if (Number.isInteger(v)) return `${v}`;
    return v.toFixed(2).replace(/\.?0+$/, '');
}

// Variables globales
let presupuesto;
const interfaz = new Interfaz();

// Inicialización y eventos
document.addEventListener('DOMContentLoaded', () => {
    interfaz.prepararUI();
    preguntarPresupuesto();

    const form = document.getElementById('agregar-gasto');
    if (form) form.addEventListener('submit', añadirGasto);

    const lista = document.querySelector('#gastos ul');
    if (lista) {
        lista.addEventListener('click', (e) => {
            const btn = e.target.closest('.borrar-gasto');
            if (btn) {
                const id = Number(btn.dataset.id);
                eliminarGasto(id);
            }
        });
    }
});

// Pregunta presupuesto hasta que sea válido
function preguntarPresupuesto() {
    let cantidad;
    do {
        cantidad = prompt('¿Cuál es tu presupuesto?', '');
        if (cantidad === null) continue;
        cantidad = parseFloat(String(cantidad).replace(',', '.'));
    } while (isNaN(cantidad) || cantidad <= 0);

    presupuesto = new Presupuesto(cantidad);
    interfaz.imprimirPresupuesto(presupuesto);
    interfaz.comprobarPresupuesto(presupuesto);
}

// Añadir gasto
function añadirGasto(e) {
    e.preventDefault();
    const nombreInput = document.getElementById('gasto');
    const cantidadInput = document.getElementById('cantidad');
    if (!nombreInput || !cantidadInput) return;

    const nombre = nombreInput.value.trim();
    const cantidadRaw = cantidadInput.value.trim();

    if (nombre === '' || cantidadRaw === '') {
        interfaz.imprimirAlerta('Ambos campos son obligatorios', 'validation', 3000);
        return;
    }

    const cantidad = parseFloat(cantidadRaw.replace(',', '.'));
    if (isNaN(cantidad) || cantidad <= 0) {
        interfaz.imprimirAlerta('Importe NO válido', 'validation', 3000);
        return;
    }

    const gastoObj = { nombre, cantidad: Number(cantidad), id: Date.now() };

    // Añadir gasto (permitido exceder)
    presupuesto.nuevoGasto(gastoObj);

    interfaz.imprimirAlerta('¡Gasto añadido correctamente!', 'success', 3000);
    interfaz.imprimirGastosListado(presupuesto.gastos);
    interfaz.actualizarRestante(presupuesto);

    if (presupuesto.restante <= 0) {
        interfaz.imprimirAlerta('PRESUPUESTO AGOTADO!!', 'danger', 4000);
    }

    // Reiniciar formulario 
    const form = document.getElementById('agregar-gasto');
    if (form) form.reset();
}

// Eliminar gasto por id
function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);
    interfaz.imprimirGastosListado(presupuesto.gastos);
    interfaz.actualizarRestante(presupuesto);
    interfaz.imprimirAlerta('¡Gasto eliminado correctamente!', 'success', 2000);
}