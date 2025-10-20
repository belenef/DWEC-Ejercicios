
 const nombreCliente = 'Natalia Escrivá';
 const tipoCliente = 'VIP';
 const ahorro = 200;
 //export default ahorro;
 
//Permitimos su importación desde otros ficheros js

 export{
    nombreCliente,
    tipoCliente,
    ahorro, 
    mostrarInfo,
    verificarSaldo
}



  function mostrarInfo(nombre, tipo){
    return `Cliente: ${nombre}; Tipo: ${tipo}`;
}

 export function verificarSaldo(nombre,ahorro){
    if (ahorro > 0){
        return `El cliente ${nombre} tiene un saldo de ${ahorro}€`;
    }else{
        return `El cliente ${nombre} NO tiene saldo`;
    }
}

//Instanciamos una clase
 export  class Cliente{
    constructor(nombre, tipo, ahorro){
        this.nombre = nombre;
        this.tipo = tipo;
        this.ahorro = ahorro;
    }
    mostrarInfo(){
        return `Cliente: ${this.nombre}; Tipo: ${this.tipo}; Saldo: ${this.ahorro}`;
    }
}

//Export default: podemos declararla sin nombre, el alias del fichero app.js la invocará
export default function funcionExportDefault(){
    console.log('Ejemplo de export default');
}

