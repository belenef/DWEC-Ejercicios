/*------------------------------------------
-----------DECLARACIÓN DE ARRAYS------------
--------------------------------------------*/

//Declarar e instanciar arrays
console.log("----Declarar Arrays-----");
const alumnos = [];
const modulos = ["DWES","DWEC","DIW","DAW","EiE","Inglés"];
const numeros = new Array(1,2,3,4);
const deTodo = ["Natalia", 3, 5.25, null, {nom:"Pepe", profesion:"docente"}, [1,2,3]];
console.log(deTodo);
console.table(deTodo);

//Acceder a los elementos del array
console.log("----Acceder a los elementos del Array-----");
console.log(deTodo[2]);
console.log(deTodo[4]);
console.table(deTodo[5]);
console.log(deTodo[7]);
console.log(deTodo[5][0]);

//Arrays heterogéneos y multidimensionales
let heter1 = [3,4,"natalia",true,Math.random()];
console.log(heter1);
let heter2 = [3.5,,["holaaa",2,"adiós"]];
console.log(heter2);
console.log(heter2[2][0]);
//Bidimensional
let miArray = new Array(2);
miArray[0] = new Array(2);
miArray[1] = new Array(2);
//Asignamos valores a nuestro array... 
//posiciones 00, 01, 10 y 11
miArray[0][0] = 12;
miArray[0][1] = 20;
//Crear array automáticamente --> array de 10x10
let otroArray = new Array(10);
for (let i=0;i<10;i++){
    otroArray[i] = new Array(10);
}
console.log(otroArray);

/*------------------------------------------
AÑADIR, modificar y eliminar ELEMENTOS EN ARRAYS
--------------------------------------------*/
console.log("----Añadimos elementos-------")
//Asignar y modificar y acceder a los valores
alumnos[0] = "Antonio";
alumnos[1] = "Pedro";
alumnos[2] = "Rosa";
alumnos[3] = "Maria";
alumnos[10] = "José Antonio";
console.table(alumnos);
console.log(alumnos);
console.log(alumnos[5]);

//Declaración con const --> Se pueden modificar los datos
console.log("----Modificar elementos------")
const notas = [0,2.5,5,7.5,10];
notas[1] = 3.5;
console.log(notas);//[0,3.5,5,7.5,10]--> Modificado!!
//const --> NO se puede modificar la referencia del array
const mascotas = ["perro","gato","hámster","iguana","loro"];
//mascotas = ["tortuga","cacatúa","pez"]; //ERROR!!
console.log(mascotas);

//Asignación con arrays
console.log("----Asignación de arrays-----")
const mascotas2 = mascotas;
mascotas[4] ="tortuga";
console.log(`El array "mascotas" contiene ${mascotas}`);
console.log(`El array "mascotas2" contiene ${mascotas2}`);
mascotas2[0] = "tigre";
console.log(`El array "mascotas" contiene ${mascotas}`);
console.log(`El array "mascotas2" contiene ${mascotas2}`);

//Eliminar un elemento del array
const dias = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
delete dias[0];
console.log(dias);



