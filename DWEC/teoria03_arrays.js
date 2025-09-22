/***********************************************
************DESTRUCTURING DEL ARRAY*************
************************************************/
console.log("--------- Arrays Destructuring-------------");
//Recordamos destructuring de objetos
const producto4 = {
    nombre: "Disco duro SSD",
    capacidad: "1TB",
    pvp: 110
}
const {capacidad} = producto4;
console.log(capacidad);//1TB
//Ahora con arrays
const numbers = [10,20,30,40,50];
const [primero] = numbers;
console.log(primero);//10
//Acceso secuencial
const [, , tercero] = numbers;
console.log(tercero);//30
const [prim, seg, ter, , quin] = numbers;
console.log(prim, seg, ter, quin);//10 20 30 50 

//Destructuring + Spread Operator
const [primer, segun, ...tercer] = numbers;
console.log(tercer);//[30,40,50]

