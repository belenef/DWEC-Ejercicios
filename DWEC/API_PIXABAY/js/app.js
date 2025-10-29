const termino = document.querySelector('#termino');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const resultadosPorPagina = 20;
let totalPaginas = 0;
let paginaActual = 1;

formulario.addEventListener('submit', e => {
  e.preventDefault();
  paginaActual = 1;
  buscarImagenes(paginaActual);
});

// Ahora buscarImagenes acepta la página como parámetro
async function buscarImagenes(pagina) {
  paginaActual = pagina; // actualizar la variable global
  const busqueda = termino.value.trim();
  if (busqueda === '') {
    mostrarError('EL TÉRMINO DE BÚSQUEDA NO PUEDE ESTAR VACÍO');
    return;
  }

  // Limpiar solo imágenes, no paginador
  const paginacionAnterior = document.querySelector('.paginacion');
  if (paginacionAnterior) paginacionAnterior.remove();
  resultado.innerHTML = '';

  const url = `https://pixabay.com/api/?key=52997555-8e6623c176aa6f7e02d4258ae&q=${encodeURIComponent(busqueda)}&image_type=photo&per_page=${resultadosPorPagina}&page=${paginaActual}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (!datos.hits || datos.hits.length === 0) {
      mostrarError('No se encontraron imágenes.');
      return;
    }

    // Mostrar todas las imágenes de la página
    datos.hits.forEach(imgData => {
      const { webformatURL, largeImageURL, likes, views } = imgData;
      resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
          <div class="bg-white shadow-lg rounded">
            <img src="${webformatURL}" alt="${busqueda}" class="w-full">
            <div class="p-4">
              <p><span class="font-bold">${likes}</span><span class="font-light"> Me gusta</span> </p>
              <p><span class="font-bold">${views}</span><span class="font-light"> Veces vista</span> </p>
              <a href="${largeImageURL}" target="_blank" class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1">VER IMAGEN</a>
            </div>
          </div>
        </div>
      `;
    });

    // Calcular el total de páginas
    totalPaginas = Math.ceil(datos.totalHits / resultadosPorPagina);

    // Mostrar paginador si hay más de una página
    if (totalPaginas > 1) {
      mostrarPaginador(paginaActual, totalPaginas);
    }

  } catch (error) {
    console.error('Error al cargar imágenes', error);
    mostrarError('Error al cargar imágenes.');
  }
}

// Mostrar errores
function mostrarError(mensaje) {
  if (document.querySelector('.error')) return;
  const div = document.createElement('div');
  div.classList.add('error', 'mt-10');
  div.textContent = mensaje;
  formulario.insertBefore(div, resultado);
  setTimeout(() => div.remove(), 2000);
}

// Mostrar paginador
function mostrarPaginador(paginaActual, totalPaginas) {
  // Crear el contenedor del paginador
  const paginacion = document.createElement('div');
  paginacion.classList.add('paginacion', 'mt-10');

  // Mostrar información de la página actual
  const info = document.createElement('p');
  info.textContent = `Página ${paginaActual} de ${totalPaginas}`;
  info.classList.add('mb-4', 'font-bold', 'color-gray-700');
  paginacion.appendChild(info);

  // Crear botones para cada página
  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement('button');
    boton.textContent = i;
    boton.classList.add('btn', 'bg-yellow-500', 'hover:bg-yellow-600', 'text-black', 'font-bold', 'm-1', 'p-2', 'rounded', 'shadow');

    // Deshabilitar el botón de la página actual
    if (i === paginaActual) {
      boton.disabled = true;
      boton.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
      boton.onclick = () => {
        // PASAMOS i directamente como parámetro
        buscarImagenes(i);
      };
    }

    // Agregar el botón al paginador
    paginacion.appendChild(boton);
  }

  // Agregar el paginador al resultado
  resultado.appendChild(paginacion);
}
