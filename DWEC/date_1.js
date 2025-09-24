// Función que convierte string dd/mm/aaaa a objeto Date
function conf_Fecha(fechaStr) {

    const partes = fechaStr.split('/');
    if (partes.length !== 3) return null; // formato incorrecto

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; //meses van de 0 a 11
    const anio = parseInt(partes[2], 10);

    const fecha = new Date(anio, mes, dia);


    
    // Validar que la fecha creada coincide con lo que se pidió (día, mes, año)
    if (
        fecha.getFullYear() !== anio ||
        fecha.getMonth() !== mes ||
        fecha.getDate() !== dia
    ) {
        return null; // fecha inválida
    }
    return fecha;
}




// Función que pide una fecha válida, solo devuelve null si el usuario cancela
function pedirFecha(mensaje) {

    while (true) {
        let entrada = prompt(mensaje);
        if (entrada === null) {
            // Usuario canceló, devolvemos null para detener el programa
            return null;
        }
        const fechaValida = conf_Fecha(entrada);
        if (fechaValida !== null) {
            return fechaValida;
        }
        alert("Formato o fecha inválida. Por favor, indica una fecha válida en formato dd/mm/aaaa.");
    }
}




// Función para calcular diferencia en años, meses y días
function diferenciaFechas(fecha1, fecha2) {
    // Asegurar que fecha1 <= fecha2
    if (fecha1 > fecha2) [fecha1, fecha2] = [fecha2, fecha1];

    let anios = fecha2.getFullYear() - fecha1.getFullYear();
    let meses = fecha2.getMonth() - fecha1.getMonth();
    let dias = fecha2.getDate() - fecha1.getDate();

    if (dias < 0) {
        meses--;
        // Obtener los días del mes anterior a fecha2
        const ultimoDiaMesAnterior = new Date(fecha2.getFullYear(), fecha2.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anios--;
        meses += 12;
    }

    return { anios, meses, dias };
}




// Pedimos la primera fecha
let fecha1 = pedirFecha("Indica una fecha (dd/mm/aaaa): ");

if (fecha1 === null) {
    // Usuario canceló, no hacemos nada más
    document.body.innerHTML += "No se ha introducido ninguna fecha.<br>";

} else {

    document.body.innerHTML += "Primera fecha introducida: " + fecha1.toLocaleDateString() + "<br>";

    // Pedimos la segunda fecha
    let fecha2 = pedirFecha("Indica una segunda fecha (dd/mm/aaaa): ");


    if (fecha2 === null) {

        document.body.innerHTML += "No se ha introducido la segunda fecha.<br>";

    } else {

        document.body.innerHTML += "Segunda fecha introducida: " + fecha2.toLocaleDateString() + "<br>";

        // Calculamos la diferencia en días
        let diferencia = Math.abs(fecha1 - fecha2);
        let diferencia_dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

        // Calcular diferencia en años, meses y dias
        const diff = diferenciaFechas(fecha1, fecha2);

        document.body.innerHTML += "<br>Entre " + fecha1.toLocaleDateString() + " y " + fecha2.toLocaleDateString() + " hay " + diferencia_dias + " días:<br>";

        // Mostrar diferencia en años, meses y dias
        document.body.innerHTML += `${diff.anios} años, ${diff.meses} meses y ${diff.dias} días.<br>`;
    }
}
