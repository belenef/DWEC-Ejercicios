document.addEventListener('DOMContentLoaded', () => {
    const tarea = document.querySelector('#tarea');
    const listaTareas = document.querySelector('#lista-tareas');
    if (!tarea || !listaTareas) return;

    // Si #tarea es un form, obtener el input/textarea dentro; si no, usar el propio elemento
    const input = (tarea.tagName === 'FORM') ? tarea.querySelector('input, textarea') : tarea;
    if (!input) return;

    // Obtener el formulario para escuchar submit 
    const form = (tarea.tagName === 'FORM') ? tarea : (input.form || null);
    if (!form) return;

    // Cargar tareas guardadas al iniciar la página
    let tareas = cargarLocalStorage();
    tareas.forEach(texto => {
        agregarTareaDOM(texto);
    });

    // Evento para añadir tarea nueva
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const texto = (input.value || '').trim();

        if (texto === '') {
            mostrarError('NO HAS PUESTO NINGUNA TAREA...');
            return;
        }

        if (texto.length > 30) {
            mostrarError('LA TAREA ES DEMASIADO LARGA...');
            return;
        }

        // Evitar que se repitan las tareas
        const texto_minuscula = texto.toLowerCase();
        const existe = tareas.some(t => t.toLowerCase() === texto_minuscula);
        if (existe) {
            mostrarError(`"${texto}" YA EXISTE...`);
            return;
        }

        // Añadir tarea al DOM
        agregarTareaDOM(texto);

        // Guardar en localStorage
        tareas.push(texto);
        guardarLocalStorage(tareas);

        input.value = '';
        alert('Tarea añadida correctamente');
    });

    // Función para crear elemento <li> en el DOM 
    function agregarTareaDOM(texto) {
        const li = document.createElement('li');
        li.className = 'tarea-item';
        li.style.marginLeft = '10%';
        li.style.marginBottom = '2px';
       
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'space-between';
        div.style.width = '100%';

        const span = document.createElement('span');
        span.textContent = texto;
        span.style.flex = '1';
        
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'X';
        btn.title = 'borrar-tarea';
        btn.style.flex = '0 0 auto';
        btn.style.color = 'red';
        btn.style.border = 'none';
        btn.style.fontSize = '16px';
        btn.style.background = 'transparent';
        btn.style.cursor = 'pointer';

        //Eliminar tarea del DOM y del localStorage
        btn.addEventListener('click', () => {
            li.remove();
            tareas = tareas.filter(t => t !== texto);
            guardarLocalStorage(tareas);
        });

        div.appendChild(span);
        div.appendChild(btn);
        li.appendChild(div);
        listaTareas.appendChild(li);
    }

    //Función para mostrar mensajes de error
    function mostrarError(mensaje) {
        if (document.querySelector('.error')) return;
        const div = document.createElement('div');
        div.classList.add('error', 'mt-10');
        div.textContent = mensaje;
    
        document.querySelector('form').insertBefore(div, document.querySelector('#resultado'));

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    //Funciones para localStorage 
    function guardarLocalStorage(arr) {
        localStorage.setItem('mis_tareas', JSON.stringify(arr));
    }

    function cargarLocalStorage() {
        const stored = localStorage.getItem('mis_tareas');
        return stored ? JSON.parse(stored) : [];
    }
});
