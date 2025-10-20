
import miFuncion, { ahorro,mostrarInfo, nombreCliente, tipoCliente as nivel, verificarSaldo, Cliente } from "./cliente.js";

import { Empresa } from './empresa.js';


console.log(nombreCliente, nivel);
console.log(mostrarInfo(nombreCliente,nivel));
console.log(verificarSaldo(nombreCliente, ahorro));

const cliente = new Cliente(nombreCliente, nivel, ahorro);
console.log(cliente.mostrarInfo());

const empresa = new Empresa('Botica Mariano', 'Silver', 25000, 'ParaFarmacia');
console.log(empresa);
console.log(empresa.mostrarInfo());

//usamos un alias para la función
miFuncion();


/**************************************************
 **************IMPORTAR TODO**************************
 ************************************************/
/*
 import * as Cliente from "./cliente.js";
 import { Empresa } from './empresa.js';

console.log(Cliente.nombreCliente, Cliente.tipoCliente);
console.log(Cliente.mostrarInfo(Cliente.nombreCliente,Cliente.tipoCliente));

console.log(Cliente.verificarSaldo(Cliente.nombreCliente, Cliente.ahorro));

const cliente = new Cliente.Cliente(Cliente.nombreCliente, Cliente.nivel, Cliente.ahorro);
console.log(cliente.mostrarInfo());

const empresa = new Empresa('Botica Mariano', 25000, 'Silver', 'ParaFarmacia');
console.log(empresa);
console.log(empresa.mostrarInfo());
*/
