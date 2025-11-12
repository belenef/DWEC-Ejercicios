// Select de categorías y contenedor de resultados
const selectCategorias = document.querySelector('#categorias');
const resultado = document.querySelector('#resultado');

// Crear un h2 para mostrar el numero de resultados
const encabezadoResultados = document.createElement('h2');
encabezadoResultados.classList.add('text-center', 'text-black', 'my-5');
selectCategorias.parentElement.insertBefore(encabezadoResultados, selectCategorias);

// Modal de Bootstrap
const modal = new bootstrap.Modal(document.getElementById('modal'), {
  keyboard: true,
  backdrop: 'static'
});

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', cargarRecetas);
selectCategorias.addEventListener('change', seleccionarCategoria);
resultado.addEventListener('click', obtenerReceta); // Escucha los botones Ver receta

//API: Cargar categorías
async function cargarRecetas() {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (!datos.categories || datos.categories.length === 0) {
      throw new Error('No se encontraron categorías');
    }

    datos.categories.forEach(categoria => {
      const { strCategory } = categoria;
      const option = document.createElement('option');
      option.value = strCategory;
      option.textContent = strCategory;
      selectCategorias.appendChild(option);
    });

  } catch (error) {
    console.error('Error al cargar recetas:', error);
  }
}

//Cuando el usuario selecciona una categoría
async function seleccionarCategoria(e) {
  const categoria = e.target.value;
  if (!categoria) return;

  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    mostrarRecetas(datos.meals, categoria);
  } catch (error) {
    console.error('Error al obtener recetas:', error);
  }
}

//Mostrar recetas
function mostrarRecetas(recetas, categoria) {
  limpiarHTML(resultado);

  if (!recetas || recetas.length === 0) {
    encabezadoResultados.textContent = `No hay resultados disponibles para ${categoria}`;
    resultado.innerHTML = '<p class="text-center text-black my-5">No hay recetas disponibles.</p>';
    return;
  }

  // Mostrar numero de resultados por categoría
  encabezadoResultados.textContent = `${recetas.length} Resultados`;

  recetas.forEach(receta => {
    const { strMeal, strMealThumb, idMeal } = receta;

    const card = document.createElement('div');
    card.classList.add('col-md-4');

    card.innerHTML = `
      <div class="card mb-4">
        <img src="${strMealThumb}" alt="Imagen de la Receta ${strMeal}" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title mb-3">${strMeal}</h3>
          <button data-id="${idMeal}" class="btn btn-danger w-100 ver-receta">Ver receta</button>
        </div>
      </div>
    `;

    resultado.appendChild(card);
  });
}

//Obtener receta al hacer clic en el botón
async function obtenerReceta(e) {
  if (e.target.classList.contains('ver-receta')) {
    const id = e.target.dataset.id;

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      mostrarRecetaModal(datos.meals[0]);
    } catch (error) {
      console.error('Error al obtener los datos de la receta:', error);
      
    }
  }
}

// Mostrar receta en el modal
function mostrarRecetaModal(receta) {
  const { strMeal, strInstructions, strMealThumb, idMeal } = receta;

  // Extraer ingredientes
  const ingredientes = [];
  for (let i = 1; i <= 20; i++) {
    const ingrediente = receta[`strIngredient${i}`];
    const medida = receta[`strMeasure${i}`];
    if (ingrediente && ingrediente.trim() !== '') {
      ingredientes.push(`${ingrediente} - ${medida || ''}`);
    }
  }

  // Comprobar si la receta ya es favorita
  const esFavorito = existeEnFavoritos(idMeal);

  // Inyectar HTML en el modal
  const modalBody = document.querySelector('.modal-body');
  const modalTitle = document.querySelector('.modal-title');

  modalTitle.textContent = strMeal;
  modalBody.innerHTML = `
    <div class="">
      <img src="${strMealThumb}" alt="${strMeal}" class="img-fluid">
      <h3 class="my-3">Instrucciones:</h3>
      <p class="text-start">${strInstructions}</p>
      <h3 class="my-3">Ingredientes y cantidades:</h5>
      <ul class="list-group">
        ${ingredientes.map(ing => `<li class="list-group-item">${ing}</li>`).join('')}
      </ul>
    </div>
  `;

  // Footer del modal con botones
  const modalFooter = document.querySelector('.modal-footer');
  modalFooter.innerHTML = `
    <button id="btn-favorito" class="btn btn-danger col ${esFavorito}">
      ${esFavorito ? 'Eliminar Favorito' : 'Guardar Favorito'}
    </button>
    <button type="button" class="btn btn-secondary col" data-bs-dismiss="modal">Cerrar</button>
  `;

  // Escuchar clic en botón de favoritos
  document.querySelector('#btn-favorito').onclick = () => {
    toggleFavorito(receta);
  };

  modal.show();
}

//Funciones de favoritos (LocalStorage)
function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos')) || [];
}

function guardarFavoritos(favoritos) {
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function existeEnFavoritos(id) {
  const favoritos = obtenerFavoritos();
  return favoritos.some(fav => fav.idMeal === id);
}


function toggleFavorito(receta) {
  let favoritos = obtenerFavoritos();

  if (existeEnFavoritos(receta.idMeal)) {
    // Eliminar de favoritos
    favoritos = favoritos.filter(fav => fav.idMeal !== receta.idMeal);
    guardarFavoritos(favoritos);
    document.querySelector('#btn-favorito').textContent = 'Guardar Favorito';
    document.querySelector('#btn-favorito').classList.add('btn btn-danger col');
  } else {
    // Añadir a favoritos
    favoritos.push({
      idMeal: receta.idMeal,
      strMeal: receta.strMeal,
      strMealThumb: receta.strMealThumb
    });
    guardarFavoritos(favoritos);
    document.querySelector('#btn-favorito').textContent = 'Eliminar Favorito';
    document.querySelector('#btn-favorito').classList.add('btn btn-danger col');
  }
}

//Limpiar resultados anteriores
function limpiarHTML(elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}


