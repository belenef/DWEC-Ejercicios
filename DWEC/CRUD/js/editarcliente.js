/*EDITAR UN REGISTRO:
  Todo lo relacionado con las dos fases de la edición
*/

//form
const form = document.querySelector('#formulario');
//campo nombre
const nombre = document.querySelector('#nombre');
//campo email
const email = document.querySelector('#email');
//campo telefono
const telefono = document.querySelector('#telefono');
//campo empresa
const empresa = document.querySelector('#empresa');

// Obtener ID desde URL
const parametrosURL = new URLSearchParams(window.location.search);
const idCliente = parametrosURL.get('id');

// Cuando cargue la página, obtener datos del cliente
document.addEventListener('DOMContentLoaded', async () => {
    if(idCliente){
        try {
            const respuesta = await fetch(`http://localhost:4000/clientes/${idCliente}`);
            const cliente = await respuesta.json();
            
            // Rellenar formulario con datos del cliente
            nombre.value = cliente.nombre;
            email.value = cliente.email;
            telefono.value = cliente.telefono;
            empresa.value = cliente.empresa;

        } catch (error) {
            console.log('Error al obtener cliente:', error);
        }
    }
});

// Evento submit para guardar cambios
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // VALIDACIÓN
    if(nombre.value === '' || email.value === '' || telefono.value === '' || empresa.value === ''){
        mostrarError('<strong>Error!</strong> Todos los campos son obligatorios');
        return;
    }

    // Crear objeto actualizado
    const clienteActualizado = {
        nombre: nombre.value,
        email: email.value,
        telefono: telefono.value,
        empresa: empresa.value,
        id: Number(idCliente)
    };

    try {
        const respuesta = await fetch(`http://localhost:4000/clientes/${idCliente}`, {
            method: 'PUT', //metodo PUT para modificar el registro que ya existe
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clienteActualizado)
        });

        // Si se guardó bien
        if (respuesta.ok) {
            mostrarCorrecto('<strong>Éxito!</strong> Cliente actualizado correctamente :)');
              //Redirigir
                window.location.href = 'index.html'; 
        

        } else {
            mostrarError('Error al actualizar el cliente');
            console.log("Error en PUT. Código:", respuesta.status);
        }

    } catch (error) {
        mostrarError('Error al actualizar el cliente');
        console.log("Error de fetch:", error);
    }
});

// Mostrar errores
function mostrarError(mensaje) {
    if (document.querySelector('.error')) return;
    const div = document.createElement('div');
    div.classList.add('error', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3','rounded', 'max-w-lg','mx-auto', 'mt-6', 'text-center');
    div.innerHTML = mensaje;
    const form = document.querySelector('form');
    const insertBeforeEl = document.getElementById('resultado') || null;

    if (form) form.insertBefore(div, insertBeforeEl);
    setTimeout(() => div.remove(), 4000);
}

// Mostrar mensajes de éxito
function mostrarCorrecto(mensaje) {
    if (document.querySelector('.correcto')) return;
    const div = document.createElement('div');
    div.classList.add('correcto', 'bg-green-100', 'border-green-400', 'text-green-700', 'px-4', 'py-3','rounded', 'max-w-lg','mx-auto', 'mt-6', 'text-center');
    div.innerHTML = mensaje;
    const form = document.querySelector('form');
    const insertBeforeEl = document.getElementById('resultado') || null;

    if (form) form.insertBefore(div, insertBeforeEl);
    setTimeout(() => div.remove(), 4000);
}
