/*------------------------------------------
-----------DECLARACIÓN Y SINTAXIS-----------
--------------------------------------------*/

let hoy = new Date();
console.log(hoy);
console.log(typeof hoy); //Object

const fecha = new Date('12-31-2023');//mes-dia-año
console.log(fecha);

const fecha2 = new Date('December 31 2023');
console.log (fecha2);

let fecha3 = new Date(2022,11,31,23,59);
console.log(fecha3);

//argumento solo numérico --> miliseg desde 01/01/70
let fechaDesde010170 = new Date(1000000000000);
console.log(fechaDesde010170);

/*------------------------------------------
---------------MÉTODOS GET Y SET--------------
--------------------------------------------*/

console.log('----MÉTODOS GET----');
console.log(hoy);
console.log('getFullYear()')
console.log(hoy.getFullYear());
console.log('getMonth() --> Inicia en 0');
console.log(hoy.getMonth());
console.log('getDate() --> Dia del mes')
console.log(hoy.getDate());
console.log('getDay() --> Dia de la semana');
console.log(hoy.getDay());
console.log('getHours()')
console.log(hoy.getHours());
console.log('getMinutes()');
console.log(hoy.getMinutes());
console.log('getSeconds()')
console.log(hoy.getSeconds());
console.log('getMilliseconds()')
console.log(hoy.getMilliseconds());
console.log('getTime() -> Los milisegundos desde 01/01/1970')
console.log(hoy.getTime());
console.log('Date.now() -> Los milisegundos desde 01/01/1970')
console.log(Date.now());

console.log('----MÉTODOS SET----');
console.log(hoy);
hoy.setDate(17);   
hoy.setMonth(hoy.getMonth()+2); 
hoy.setFullYear(2025);
hoy.setHours(23); 
hoy.setMinutes(30);
hoy.setSeconds(50);
console.log(hoy);
hoy.setTime(25632552322);//aplica los miliseg desde 01/01/70
console.log(hoy); 

/*------------------------------------------
------------MÉTODOS FORMATEAR FECHA---------
--------------------------------------------*/

console.log("----Métodos formatear la fecha-----");
hoy = new Date();
//Muestra la fecha en formato de texto propio de JavaScript
console.log(hoy.toString());
//Muestra la hora (sin fecha) en formato de texto 
//con la configuración local
console.log(hoy.toTimeString());
//Muestra la fecha (sin hora) en un 
//formato más cómodo de lectura
console.log(hoy.toDateString());
//Muestra fecha y hora en formato texto
console.log(hoy.toLocaleString());
//Igual que el anterior pero con el código del país
console.log(hoy.toLocaleString('en'));
console.log(hoy.toLocaleString('es'));
//igual que el anterior, sin hora
console.log(hoy.toLocaleDateString());
console.log(hoy.toLocaleTimeString());

//Muestra la fecha pero antes de mostrarla convierte
//la fecha a la correspondiente según el meridiano de Greenwich
console.log(hoy.toGMTString());
//Muestra la fecha en formato ISO que cumple yyyy-mm-ddThh:mm:ss.sssZ
console.log(hoy.toISOString());

