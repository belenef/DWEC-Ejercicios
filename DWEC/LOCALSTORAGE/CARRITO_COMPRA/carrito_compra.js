// PRACTICA CARRITO_COMPRA  

const carrito = document.querySelector('#carrito');
const lista_cursos = document.querySelector('#lista-cursos');
const contenedor_carrito = document.querySelector('#lista-carrito tbody');
const vaciar_carrito = document.querySelector('#vaciar-carrito');

// console.log(lista_cursos);
// console.log(vaciar_carrito);

let articulosCarrito = []; //Se guardan los articulos de dentro del carrito en un array

cargarEventListeners(); //Carga los eventos
cargarLocalStorage(); // Cargar carrito desde localStorage al arrancar

function cargarEventListeners() {
    // Agregar curso al carrito
    lista_cursos.addEventListener('click', agregarCurso);

    // Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito
    vaciar_carrito.addEventListener('click', () => {
        articulosCarrito = []; // se vacía el array
        limpiarHTML(); // se limpia el carrito del HTML
        guardarLocalStorage();
    });
}


//FUNCIONES------

// Añadir curso
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Eliminar curso
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del array
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); // vuelve a mostrar el carrito actualizado
        guardarLocalStorage();
    }
}

// Leer la info del curso seleccionado
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.u-pull-right').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // Revisar si el curso ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        // Actualiza cantidad si ya existe, así evitamos que se vuelva a añadir otra fila del mismo curso
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        
        articulosCarrito = [...cursos];
    } else {
        // Agrega nuevo curso
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
    guardarLocalStorage();
}

// Muestra el carrito en el HTML
function carritoHTML() {
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        contenedor_carrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML() {
    while (contenedor_carrito.firstChild) {
        contenedor_carrito.removeChild(contenedor_carrito.firstChild);
    }
}

// Guardar carrito en localStorage
function guardarLocalStorage() {
    try {
        localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
    } catch (e) {
        console.error('Error guardando carrito en localStorage', e);
    }
}

// Cargar carrito desde localStorage
function cargarLocalStorage() {
    try {
        const stored = localStorage.getItem('articulosCarrito');
        if (stored) {
            articulosCarrito = JSON.parse(stored);
            carritoHTML();
        }
    } catch (e) {
        console.error('Error cargando carrito desde localStorage', e);
    }
}