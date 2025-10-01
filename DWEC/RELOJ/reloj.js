//LocalDate

function mostrarReloj(){
const reloj = document.querySelector(' div#hora');
const fecha_actual = document.querySelector(' div#fecha');
const reloj2 = document.querySelector(' div#reloj div.reloj-contenedor');
console.log(reloj);


//insertamos la hora actual en 'div#hora'
let fecha = new Date();

let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

//Añadir un 0 delante de los números menores de 10
if (hora < 10) hora = '0' + hora;
if (minutos < 10) minutos = '0' + minutos;
if (segundos < 10) segundos = '0' + segundos;

//Cambiamos el html desde JS
reloj.innerHTML = `${hora}:${minutos}:${segundos}`;


fecha_actual.innerHTML = `${formatoPersonalizado(fecha)}`;
reloj2.classList.toggle('animar');
setTimeout(mostrarReloj,1000);


}

function formatoPersonalizado(fecha) {
  const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  const diaSemana = dias[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  
  return `${diaSemana}, ${dia} ${mes}`;
}