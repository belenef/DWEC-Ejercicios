
function mostrarReloj() {

  const reloj = document.querySelector('#hora');
  const fecha_actual = document.querySelector('#fecha');
  const reloj2 = document.querySelector('#reloj .reloj-contenedor');


  const ahora = new Date();
  let navidad = new Date(ahora.getFullYear(), 11, 25); // diciembre = 11

  // Si ya pasó Navidad este año, usamos la del año siguiente
  if (ahora > navidad) {
    navidad = new Date(ahora.getFullYear() + 1, 11, 25);
  }

  const diferencia = navidad - ahora;

  // Cálculo de tiempo
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Formato con dos dígitos
  const formato = (num) => num.toString().padStart(2, '0');

  // Mostrar en pantalla
  reloj.innerHTML = `${dias}d ${formato(horas)}h ${formato(minutos)}m ${formato(segundos)}s`;
  fecha_actual.innerHTML = `Faltan ${dias} días para Navidad !!! `;

  // Animaciones y estilos
  reloj2.classList.toggle('animar');
  
  reloj2.style.borderRadius = "30%";
  reloj2.style.borderColor = "#96911c";
  reloj2.style.boxShadow = "0 0 25px #1a1919ff";
  reloj2.style.borderWidth = "10px";
  reloj2.style.backgroundColor = "white";
  reloj2.style.color = "#6f0f11";


  setTimeout(mostrarReloj, 1000);
}

function añadirFondoNavidad() {
  const body = document.querySelector('body');
  body.style.backgroundImage = "url('fondo_navidad.jpg')"; 

  body.style.backgroundSize = "cover";       // que ocupe toda la pantalla
  body.style.backgroundPosition = "center";  
  body.style.backgroundRepeat = "no-repeat"; 
  body.style.margin = "0";                   
  body.style.height = "100vh";               // altura completa de la ventana
  body.style.width = "100vw";                // ancho completo
}

// Ejecutar después de que cargue el DOM
window.addEventListener('DOMContentLoaded', añadirFondoNavidad);
