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

//boton submit
const boton = document.querySelector('input[type="submit"]');
console.log(boton);

//  validar
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    if (nombre.value === '' || email.value === '' || telefono.value === '' || empresa.value === '') {
        mostrarError('<strong>Error!</strong> Todos los campos son obligatorios');
        return;
    }

    // Crear objeto
    const cliente = {
        nombre: nombre.value,
        email: email.value,
        telefono: telefono.value,
        empresa: empresa.value
    };

    // Guardar en la API
    await crearCliente(cliente);

    mostrarCorrecto('<strong>Éxito!</strong> Cliente agregado correctamente :)');

    // Redirigir 
    window.location.href = 'index.html';  
    
});

//crear cliente
async function crearCliente(cliente) {
    try {
        await fetch('http://localhost:4000/clientes', {
            method: 'POST', //metodo POST para crear un nuevo registro en la base de datos
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        });
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        mostrarError('Error al crear cliente');
    }
}

// Mostrar errores
function mostrarError(mensaje) {
    if (document.querySelector('.error')) return;
    const div = document.createElement('div');
    div.classList.add('error', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3','rounded', 'max-w-lg','mx-auto', 'mt-6', 'text-center');
    div.innerHTML = mensaje;
    const form = document.querySelector('form');
    const insertBeforeEl = document.getElementById('resultado') || null;

    if (form) form.insertBefore(div, insertBeforeEl);
    setTimeout(() => div.remove(), 2000);
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
    setTimeout(() => div.remove(), 2000);
}
