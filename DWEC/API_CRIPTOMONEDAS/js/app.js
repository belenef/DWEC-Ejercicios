const selectCriptos = document.querySelector('#criptomonedas');
const selectMonedas = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

// Cargar criptomonedas al cargar la página
document.addEventListener('DOMContentLoaded', cargarCriptomonedas);

async function cargarCriptomonedas() {
  try {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    // Verificar que la API devuelva datos válidos
    if (!datos || !datos.Data) {
      mostrarError('No se pudieron cargar las criptomonedas.');
      return;
    }

    // Rellenar el select de criptomonedas
    datos.Data.forEach(coin => {
      const { Name, FullName } = coin.CoinInfo;
      const option = document.createElement('option');
      option.value = Name;
      option.textContent = FullName;
      selectCriptos.appendChild(option);
    });

  } catch (error) {
    console.error('Error al cargar criptomonedas', error);
    mostrarError('Error al cargar criptomonedas.');
  }
}

// Evento para obtener precio al enviar el formulario
formulario.addEventListener('submit', async e => {
  e.preventDefault();

  const cripto = selectCriptos.value;
  const moneda = selectMonedas.value;

  if (!cripto || !moneda) {
    mostrarError('AMBOS CAMPOS SON OBLIGATORIOS');
    return;
  }

  resultado.innerHTML = '<p>Cargando precio...</p>';
  

  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    // Verificar que la API devuelva datos válidos
    if (!datos || !datos.DISPLAY) {
      mostrarError('No se encontraron datos para esa combinación.');
      resultado.innerHTML = '';
      return;
    }

    const info = datos?.DISPLAY?.[cripto]?.[moneda];
    if (!info) {
      mostrarError('No se encontraron datos para esa combinación.');
      resultado.innerHTML = '';
      return;
    }

    setTimeout(() => {
      mostrarPrecio(info);
    }, 1000); 


  } catch (error) {
    console.error('Error al consultar precio', error);
    mostrarError('No se pudo obtener el precio.');
    resultado.innerHTML = '';
  }
});

// Mostrar errores
function mostrarError(mensaje) {
  if (document.querySelector('.error')) return;

  const div = document.createElement('div');
  div.classList.add('error', 'mt-10');
  div.textContent = mensaje;

  formulario.insertBefore(div, resultado);

  setTimeout(() => div.remove(), 2000);
}

// Mostrar resultado del precio
function mostrarPrecio(info) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = info;

  resultado.innerHTML = `
    <div class="card bg-warning">
      <div class="card-body text-light">
        <h2 class="card-title">El precio es: ${PRICE}</h2>
        <p>Precio más alto del día: ${HIGHDAY}</p>
        <p>Precio más bajo del día: ${LOWDAY}</p>
        <p>Variación últimas 24 horas: ${CHANGEPCT24HOUR}%</p>
        <p>Última actualización: ${LASTUPDATE}</p>
      </div>
    </div>
  `;
}
