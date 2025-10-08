document.addEventListener('DOMContentLoaded', () => {

  //Variables
  const formulario = document.getElementById('formulario');
  const email = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');
  const btnEnviar = formulario.querySelector('button[type="submit"]');
  const btnReset = formulario.querySelector('button[type="reset"]');
  const spinner = document.getElementById('spinner');

  // Estado del formulario
  const datos = {
    email: '',
    asunto: '',
    mensaje: ''
  };

  // Expresión regular para email
  const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Eventos
  email.addEventListener('input', validar);
  asunto.addEventListener('input', validar);
  mensaje.addEventListener('input', validar);

  formulario.addEventListener('submit', simularEnvio);
  btnReset.addEventListener('click', reiniciarFormulario);

  //FUNCIONES---

  function validar(e) {
    const campo = e.target.id;
    const valor = e.target.value.trim();

    // Eliminar alertas previas
    eliminarAlerta(e.target.parentElement);

    // Validar campo vacío
    if (valor === '') {
      mostrarAlerta(`El campo ${campo.toUpperCase()} es obligatorio`, e.target.parentElement);
      datos[campo] = '';
      comprobarFormulario();
      return;
    }

    // Validar email 
    if (campo === 'email' && !regexEmail.test(valor)) {
      mostrarAlerta('El EMAIL no es válido', e.target.parentElement);
      datos[campo] = '';
      comprobarFormulario();
      return;
    }

    // Si todo está bien
    datos[campo] = valor;
    comprobarFormulario();
  }

  //Funcion que muestra el mensaje de alerta
  function mostrarAlerta(mensaje, referencia) {
    eliminarAlerta(referencia);

    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded', 'alerta');
    referencia.appendChild(error);
  }

  //Funcion que elimina la alerta
  function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector('.alerta');
    if (alerta) alerta.remove();
  }

  //Funcion que comprueba el formulario
  function comprobarFormulario() {
    if (Object.values(datos).includes('')) {
      btnEnviar.disabled = true;
      btnEnviar.classList.add('opacity-50');
    } else {
      btnEnviar.disabled = false;
      btnEnviar.classList.remove('opacity-50');
    }
  }


  //Funcion que simula el envío del formulario
  function simularEnvio(e) {
    e.preventDefault();

    // Mostrar spinner
    const loader = document.createElement('div');
    loader.classList.add('spinner');
    loader.innerHTML = `
      
        <div class="dot1"></div>
        <div class="dot2"></div>
       
    `;
    spinner.appendChild(loader);
    spinner.classList.remove('hidden');


    //setTimeout para que una vez termine el spinner, se oculte y aparezca el texto de confirmación
    setTimeout(() => {
      spinner.classList.add('hidden');
      loader.remove();
      mostrarConfirmacion('MENSAJE ENVIADO CORRECTAMENTE');
      reiniciarFormulario();
    }, 2000);
  }


  //Funcion que muestra el texto de confirmación
function mostrarConfirmacion(texto) {
  const alerta = document.createElement('p');
  alerta.textContent = texto;
  alerta.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded', 'mt-5');

  //Bordes redondeados
  alerta.style.borderRadius = '8px';   
  alerta.style.overflow = 'hidden';

  formulario.parentElement.appendChild(alerta);
  // Desaparece tras 3 segundos
  setTimeout(() => alerta.remove(), 3000);
}


  //Función que reinicia el formulario
  function reiniciarFormulario() {
    formulario.reset();
    Object.keys(datos).forEach(key => datos[key] = '');
    comprobarFormulario();
  }

});
