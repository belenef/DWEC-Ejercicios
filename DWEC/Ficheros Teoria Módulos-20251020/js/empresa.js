import {Cliente} from './cliente.js';

export class Empresa extends Cliente {
    constructor(nombre, ahorro, tipo, categoria){
        super(nombre, ahorro, tipo);
        this.categoria = categoria;
    }
}

