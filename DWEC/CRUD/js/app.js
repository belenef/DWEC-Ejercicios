document.addEventListener('DOMContentLoaded', cargarClientes);

// Cargar clientes desde la API
async function cargarClientes() {
    try {
        const respuesta = await fetch('http://localhost:4000/clientes');
        const clientes = await respuesta.json();

        if (!Array.isArray(clientes)) {
            mostrarError('No se pudieron cargar los clientes.');
            return;
        }

        mostrarClientes(clientes);
    } catch (error) {
        console.error('Error al cargar los clientes:', error);
        mostrarError('Error al conectar con el servidor.');
    }
}

// Coloca los clientes en la tabla
function mostrarClientes(clientes) {
    const listado = document.querySelector('#listado-clientes');
    listado.innerHTML = '';

    clientes.forEach(cliente => {
        const { nombre,email,telefono, empresa, id } = cliente;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</div>
                <div class="text-sm leading-10 text-gray-700">${email}</div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">${telefono}</td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">${empresa}</td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        listado.appendChild(tr);
    });
}

// Notificación de error
function mostrarError(mensaje) {
    if (document.querySelector('.error')) return;

    const div = document.createElement('div');
    div.classList.add('error', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    div.textContent = mensaje;

    const main = document.querySelector('main');
    main.insertBefore(div, main.firstChild);

    setTimeout(() => div.remove(), 2500);
}

// Notificación de éxito
function mostrarCorrecto(mensaje) {
    if (document.querySelector('.correcto')) return;

    const div = document.createElement('div');
    div.classList.add('correcto', 'bg-green-100', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    div.textContent = mensaje;

    const main = document.querySelector('main');
    main.insertBefore(div, main.firstChild);

    setTimeout(() => div.remove(), 2500);
}

// Eliminar cliente
document.querySelector('#listado-clientes').addEventListener('click', async function(e) {
    if (e.target.classList.contains('eliminar')) {
        e.preventDefault();
        const clienteId = e.target.getAttribute('data-cliente');

        const confirmar = confirm('¿Deseas eliminar este cliente?');
        if (confirmar) {
            try {
                await fetch(`http://localhost:4000/clientes/${clienteId}`, {
                    method: 'DELETE'
                });
                mostrarCorrecto('Cliente eliminado correctamente.');
                cargarClientes();
            } catch (error) {
                console.error('Error al eliminar el cliente:', error);
                mostrarError('Error al eliminar el cliente.');
            }
        }
    }
});