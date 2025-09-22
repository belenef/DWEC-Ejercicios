/***********************************************
***********Métodos de los arrays****************
************************************************/

console.log("\n**********ARRAY METHODS**********");

//instanceof --> Indica la clase a la que pertenece
console.log("\n-----------instanceof----------");
console.log(`El array "notas2" es de tipo ${typeof(notas2)} y ...\n
pertenece a la clase Array?? ${notas2 instanceof Array}`);

console.log("----------includes------------");
//includes --> True si el elemento se encuentra en el array
//SOLO PARRA ARRAYS CON INDICE, NO PARA ARRAYS CON OBJETOS
const pares = [2,4,2,6,8,2,10,8,6,12,10,2];
console.log(pares.includes(8));//true
console.log(pares.includes(30));//false
//comparación con forEach...
pares.forEach(numero => {
    if (numero === 8){
        console.log('forEach: 8 sí está en el array');
    }
})

//some --> True si el elemento se encuentra en el array
//PARA ARRAYS CON OBJETOS
console.log("----------some----------------");
const carroCompra = [
    {articulo: "raton", pvp: 15},
    {articulo: "teclado", pvp: 20},
    {articulo: "altavoces", pvp: 50},
    {articulo: "hub USB", pvp: 15}
];
const existe = carroCompra.some(art => art.articulo === 'raton');
console.log(`¿He añadido el ratón al carrito? ${existe}`);

//Ejemplo con array sin objetos ----> MEJOR REDUCE
const existe2 = pares.some(mes => {
    return mes === 2
});
console.log(existe2);

console.log("----------every------------");
//every --> devuelve true si TODOS los elementos cumplen la condición
const result3 = carroCompra.every(prod => prod.pvp < 100);
console.log(result3);//true


//findIndex --> devuelve el primer índice del array que contiene el elemento
//Si no lo encuentra, devuelve -1
console.log("-----------findIndex---------");
//Ejemplo con forEach
pares.forEach((numero, indice) => {
    if (numero === 8) {
        console.log(`forEach: Encontrado en el indice ${indice}`);
    }
});
//Ejemplo con findIndex
const indice = pares.findIndex(num => num === 8);
console.log(`findIndex: Encontrado en el indice ${indice}`);
const mayor10 = pares.findIndex(num => num > 10);
console.log(`findIndex: El primer num mayor que 10 está en la posic: ${mayor10}`);
const indice2 = carroCompra.findIndex(art => art.pvp === 150);
console.log(`findIndex: Encontrado en el indice ${indice2}`);

console.log("-----------indexOf---------");
//indexOf --> Devuelve el índice de un elemento
const semana = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
console.log(semana.indexOf("lunes"));//0

console.log("-----------lastIndexOf---------");
//lastIndexOf --> Devuelve el índice de un elemento (desde el final)
const pares2 = [2,4,2,6,8,2,10,8,6,12,10,2];
console.log(pares2.lastIndexOf(2));//11
//Desde la posición 5, busca el primer 2 (hacia la izq)
console.log(pares2.lastIndexOf(2,5));//5

console.log("----------find------------------"); 
//find --> nuevo array con el resultado de la búsqueda
const result = carroCompra.find(producto => producto.pvp === 15);
console.log(result);
//mismo ejemplo con forEach
let result2 = '';
carroCompra.forEach((prod, index) => {
    if (prod.pvp === 15){
        result2 = carroCompra[index];
    }
});
console.table(result2);

console.log("-----------filter------------");
//Ejemplo 1:
const notas4 = [2,1,,9,8.5,6.12,5,2,5,,7];
const aprobados = notas2.filter(x => x >= 5);
console.log(aprobados);
//Ejemplo 2:
const carritoFinal = carroCompra.filter(prod => prod.articulo !== "altavoces");
console.table(carritoFinal);

console.log("----------reduce-----------");
//Ejemplo con array de números
const hastaCinco = [1,2,3,4,5];
const suma = hastaCinco.reduce((acum,elemento)=>acum + elemento,0);
console.log(suma);//15
//Ejemplo con array de objetos
let total = carroCompra.reduce((total, articulo) => total + articulo.pvp ,0);
console.log(`Total compra: ${total}€`);
//comparado con forEach
let totalCompra = 0;
carroCompra.forEach(articulo => totalCompra += articulo.pvp);
console.log(`Total compra: ${totalCompra}€`);

console.log("--------slice------------");

//slice --> permite copiar elementos seguidos --> genera otro array
const meses = ["enero","feb","mar","abril","mayo","junio","julio","ago","sept","oct","nov","dic"];
const anyo = meses.slice();
console.log(anyo);
const trim1 = meses.slice(0,3);
console.log(trim1);
const trim4 = meses.slice(9);
console.log(trim4);


console.log("--------join------------");

//join --> convierte un array en un string
console.log(trim1.join());
console.log(trim4.join("; "));
console.log(trim1.join(" <-> "));

console.log("--------toString------------");
console.log(trim1.toString());


console.log("--------concat------------");
//concat --> concatena arrays --> genera otro array
//Ejemplo1
const planetas1 = new Array("Mercurio","Venus","Tierra","Marte");
const planetas2 = new Array("Júpiter","Saturno","Urano","Neptuno");
const planetas = planetas1.concat(planetas2);
console.log(planetas);
//Ejemplo2
const diasSemana1 = ['Lunes','Martes','Miércoles'];
const diasSemana2 = ['Jueves','Viernes'];
const finDeSemana = ['Sábado','Domingo'];
const semanaConcat = diasSemana1.concat(diasSemana2, finDeSemana);
console.log(semanaConcat);
//Ejemplo3: Añadimos un elemento a la vez que concatenamos
const semanaConcat2 = diasSemana1.concat(diasSemana2,'Fin de Semana');
console.log(semanaConcat2);

console.log("--------Spread Operator------------");
//Ejemplo1
const semanaRestOperator = [...diasSemana1,...diasSemana2,...finDeSemana];
console.log(semanaRestOperator);
//Ejemplo2: Añadimos un elemento a la vez que concatenamos
//Añade otro elemento al array
const semanaRestOperator2 = [...diasSemana1,...diasSemana2,'Fin de Semana'];
console.log(semanaRestOperator2);
//Añade otro array de elementos
const semanaRestOperator3 = [...diasSemana1,...diasSemana2,...'Fin de Semana'];
console.log(semanaRestOperator3);


console.log("--------reverse------------");
//reverse --> invierte el orden de los elementos de un array
const week = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
console.log(week.reverse());

console.log("--------sort------------");
//sort --> ordena los elementos de un array según tabla Unicode
console.log(week.sort());
const impares2 = [1,3,5,7,9,7,5,3,1,11,13,15];
console.log(impares2.sort());
const animales2 = ["Ñu","Águila","boa","oso","mariposa","Nutria"];
console.log(animales2.sort());
function ordena(a,b){
    //LocalCompare --> num negativo si a<b, 0 si a=b, num posit si a>b
    //"es" equivale a español
    return a.localeCompare(b,"es");
}
console.log(ordena("a","b"));//-1
//función anónima arrow Compara
animales2.sort((a,b) => a.localeCompare(b,"es"));
console.log(animales2);
//Ordenamos ahora un array numérico...
//impares2.sort((a,b) => a.localeCompare(b,"es"));DA ERROR!!
impares2.sort((a,b) => a - b);
console.log(impares2);












