/***********************************************
*********AÑADIR Y ELIMINAR ELEMENTOS ARRAY******
************************************************/

//push y pop --> ponen y quitan elemento (al final)
console.log("---PUSH Y POP---");
const muebles = ["silla","mesa"];
console.log(muebles); //silla, mesa
//añadimos sillon al final
muebles.push("sillón");
console.log(muebles); //silla, mesa, sillón
//asignamos el último elemento a una variable --> el nº ordinal, NO el valor
const ponUltimo = muebles.push("escritorio");
console.log(muebles);//silla, mesa, sillón, escritorio
console.log(ponUltimo);//4
//eliminamos el último elemento del array
console.log(muebles);
muebles.pop();
console.log(muebles);//silla, mesa, sillón
//asignamos el último elemento elemento a una variable --> el valor
const ultimo = muebles.pop();
console.log(muebles);//silla, mesa
console.log(ultimo);//sillón

console.log("---UNSHIFT Y SHIFT---");
//unshift y shift --> ponen y quitan elemento (inicio)
const frutas = ["manzana", "sandía", "fresas"];
frutas.unshift("pera");
console.log(frutas);
frutas.shift();
console.log(frutas);

console.log("---SPLICE: eliminar elementos---");
//splice --> elimina elementos
const hastaDiez = [1,2,3,4,5,6,7,8,9,10];
console.log(hastaDiez);
//quitamos los dos últimos elementos
hastaDiez.splice(hastaDiez.length-2,2); //similar a splice(8,2)
console.log(hastaDiez);
//quitamos los dos primeros.
hastaDiez.splice(0,2);
console.log(hastaDiez);

console.log("---SPLICE: eliminar y añadir elementos---");
//splice --> añade elementos (en el lugar que queramos)
const impares = [1,3,5,7,9,11,13,15,17,19];
console.log(impares);
impares.splice(2,6,31,33,35);
console.log(impares);

console.log("---Spread Operator o Rest Operator----");
//Spread Operator --> añade al final 
//Trabaja sobre una copia del objeto.
let carrito = [];
const producto1 = {
    nombre: "Disco duro SSD",
    capacidad: "1TB",
    pvp: 110
}
const producto2 = {
    nombre: "Disco duro HDD",
    capacidad: "1TB",
    pvp: 50
}
const producto3 = {
    nombre: "Disco duro M2",
    capacidad: "1TB",
    pvp: 175
}
//Aplicamos Spread Operator 
carrito = [...carrito, producto1];
carrito = [producto3, ...carrito];
carrito = [...carrito, producto2];
console.table(carrito);





