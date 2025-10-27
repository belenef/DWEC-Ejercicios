const selectCriptos = document.querySelector('#criptomonedas');
const selectMonedas = document.querySelector('#monedas');

async function cargarCriptomonedas() {
  try {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    // Itera sobre las criptomonedas
    datos.Data.forEach(coin => {
      const { Name, FullName } = coin.CoinInfo;
      const option = document.createElement('option');
      option.value = Name;         
      option.textContent = FullName; 
      selectCriptos.appendChild(option);
    });

        // si no se selecciona nada, mostrar error
        if (selectCriptos.value === '' || selectMonedas.value === '') {
        mostrarError('AMBOS CAMPOS SON OBLIGATORIOS');
        return;
    }

  } catch (error) {
    console.error('Error al cargar criptomonedas', error);
  }
}

// Llama la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarCriptomonedas);

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
  if (document.querySelector('.error')) return;
  const div = document.createElement('div');
  div.classList.add('error', 'mt-10');
  div.textContent = mensaje;

  document.querySelector('form').insertBefore(div, document.getElementById('resultado'));

  setTimeout(() => div.remove(), 2000);
}

function mostrarPrecio(info){
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = info;
    const resultado = document.getElementById('resultado');
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