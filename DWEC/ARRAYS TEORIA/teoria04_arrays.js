/***********************************************
***********RECORRER ARRAYS**********************
************************************************/
console.log("-----RECORRER ARRAYS--------");

const animales = [
    {nombre:"Fly", tipo:"perro"},
    {nombre:"Misi", tipo:"gato"},
    {nombre:"Cuqui", tipo:"canario"},
    {nombre:"McGuiver", tipo:"tortuga"},
    {nombre:"Olaf", tipo:"perro"}
];

console.log("\n*******BUCLE FOR**************");

const notas2 = [2,1,,9,8.5,6.12,,2,5,,7];
for (let i=0;i<notas2.length;i++){
    if (notas2[i] === undefined){
        notas2[i] = "NO presentado";
    }
    console.log(`La nota ${i} es: ${notas2[i]}`);
}

console.log("******BUCLE FOR IN***************");

for (let indice in notas2){
    console.log(`La nota ${indice} de "notas2" es: ${notas2[indice]}`);
}
//Recordatorio recorrer objetos
const automovil ={
    tipo: "coche",
    anyo: 2022,
    marca:"Citroen",
    modelo:"C1",
    manual: true
}
for (let propiedad in automovil){
    console.log(`${propiedad}: ${automovil[propiedad]}`);  
}


console.log("*******BUCLE FOR OF**************");

for (let nota of notas2){
    console.log(`${nota}`);
}
//Recordatorio recorrer objetos
//Esto da error!!
/*for (let propiedad of automovil){
    console.log(propiedad);  
}*/
for(let[prop, valor] of Object.entries(automovil)){
    console.log(`${prop} --> ${valor}`);
}

console.log("******MÉTODO FOREACH***************");
animales.forEach(function(mascota){
    console.log(`${mascota.nombre} es un/a ${mascota.tipo}`)
    }
);
console.log("******forEach con arrow function***************");
animales.forEach(mascota => console.log(`${mascota.nombre} es un/a ${mascota.tipo}`));


console.log("----forEach con indice------");
notas2.forEach(function(elemento,indice){
    console.log((`La nota ${indice} de "notas2" es: ${elemento}`));
});

console.log("******MÉTODO MAP***************");
// =forEach pero permite crear un array nuevo
const nuevoAnimales = animales.map(function(mascota){
    return `${mascota.nombre} es un/a ${mascota.tipo}`;
    }
);
console.log(nuevoAnimales);
//Ejemplo con forEach
const nuevoAnimales2 = animales.forEach(function(mascota){
    return`${mascota.nombre} es un/a ${mascota.tipo}`;
    }
);
console.log("Ahora con forEach");
console.log(nuevoAnimales2);

//NO es necesario asignar el resultado a una variable.
animales.map(function(mascota){
    console.log(`${mascota.nombre} es un/a ${mascota.tipo}`);
    }
);

//map con función flecha
const notas3 = [3,1,7,6.5,8,10];
console.log(notas3);
//console.log(notas3.map(x=>x/2);
const mitad = notas3.map(x=>x/2);
console.log(mitad);

/*
//Bucles con propiedad length de arrays
const alumnoDAW = [
    {nombre: 'alumno1', nia: 11111111111, curso: 1},
    {nombre: 'alumno2', nia: 22222222222, curso: 1},
    {nombre: 'alumno3', nia: 33333333333, curso: 2},
    {nombre: 'alumno4', nia: 44444444444, curso: 2},
];
for(let i = 0; i< alumnoDAW.length ; i++){
    console.log(alumnoDAW[i]);
    console.log(alumnoDAW[i].nombre);
}
*/