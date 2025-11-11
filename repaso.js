// UDAD1: INTRODUCCIÓN AL DESARROLLO WEB

```javascript
// 6. HERRAMIENTAS PARA DESARROLLO WEB
// 6.1. Editores de texto e IDEs (Snippets - Abrebiatura)
// Ejemplo de uso común para depuración (Snippet: cl para console.log)
console.log("Revisando el flujo del código.");
```


// UDAD2: JS: MANEJO DE LA SINTAXIS / USO DATOS PRIMITIVOS

// 2. CÓMO AÑADIR CÓDIGO JS EN HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo JS</title>
</head>
<body>
    <!-- 2.2. Incluir JS a través de un archivo externo: 
    Las etiquetas <script> src = “…”</script> con la ruta RELATIVA del fichero las 
    pondremos justo antes de la etiqueta </body> -->
    <script src="app.js"></script>
</body>
</html>
```

// Código JavaScript (`app.js`)

//javascript
// 3. SINTAXIS DEL LENGUAJE

// 3.4. El punto y coma NO es obligatorio, a excepción de que queramos separar instrucciones
let i=0; let j=2;

// 5. VARIABLES Y CONSTANTES

// 5.1. Declaración de variables
// Declaración con let (recomendado tras ES6)
let nombre = "Juan"; 
var edad = 30;       // Uso de var (anterior a ES6)

// Declarar varias variables en una sola sentencia
let a = 10, b = 20;  

// Si declaramos una variable y no le asignamos valor, es “undefined”
let noAsignada;
console.log(noAsignada); // undefined

// 5.5. Declaración de constantes
// Deben inicializarse obligatoriamente
const TASA_IVA = 0.21;
// Los arrays y objetos declarados con const SÍ pueden ser modificados internamente
const listaNumeros = [];
listaNumeros.push(4); 

// 6. INSTRUCCIONES DE SALIDA
// 6.1. window.alert() - Muestra una ventana emergente
alert("¡Atención! Proceso finalizado."); 

// 6.2. window.confirm() - Muestra Aceptar/Cancelar y devuelve un booleano (true/false)
let confirmacion = confirm("¿Desea continuar?"); 

// 6.3. window.prompt() - Muestra ventana para recoger información (siempre como String)
let datoUsuario = prompt("Introduzca su edad:", "18"); 

// 6.6. console.log() - Muestra información en la consola
console.log("Debugging: Valor de la variable 'datoUsuario' es:", datoUsuario); 

// 7. ESTRUCTURAS DE CONTROL DE CÓDIGO
let calificacion = 75;

// 7.1. Estructuras de control de selección (if)
if (calificacion >= 50) {
    console.log("Aprobado.");
} 

// 7.1.2. SECUENCIA CONDICIONAL COMPUESTA IF…ELSE
if (calificacion >= 50) {
    console.log("Aprobado.");
} else {
    console.log("Suspendido."); 
}

// 7.1.3. SECUENCIA CONDICIONAL IF…ELSE…IF
if (calificacion >= 90) {
    console.log("Sobresaliente");
} else if (calificacion >= 70) {
    console.log("Notable");
} else if (calificacion >= 50) {
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}

// 7.1.4. SECUENCIA SWITCH…CASE
let opcion = "A";
switch (opcion) {
    case "A":
        console.log("Seleccionaste la Opción A");
        break; // Permite salir de la estructura
    case "B":
        console.log("Seleccionaste la Opción B");
        break;
    default:
        console.log("Opción no reconocida."); // Indica cualquier valor no recogido
}

// 7.1.5. OPERADOR TERNARIO
// Sintaxis: (condición) ? código_si_true : código_si_false
let esSocio = true;
let mensajeTernario = esSocio ? "Acceso permitido" : "Acceso denegado"; 

// Ternario anidado
let autenticado = true;
let saldo = 500;
let estado = autenticado ? (saldo > 0 ? "Comprando" : "Sin Saldo") : "Debe Iniciar Sesión";
console.log(estado);


// 7.2.1. BUCLE FOR
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
}

// Uso de break (salida forzada del bucle)
for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break; // Sale del for
    }
}

// Uso de continue (salta la iteración actual)
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue; // No ejecuta el console.log si es par
    }
}

// 7.2.2. BUCLE WHILE - La condición se evalúa ANTES
let contador = 0;
while (contador < 3) {
    console.log(`Contador while: ${contador}`);
    contador++; // Si la condición no cambia, es un BUCLE INFINITO
}

// 7.2.3. BUCLE DO…WHILE - Se ejecuta al menos una vez
let j = 10;
do {
    console.log(`Contador do...while: ${j}`); 
    j++;
} while (j < 5); 

// 8. FUNCIONES

// 8.1. Function declaration (Función tradicional)
function calcularArea(base, altura) {
    return base * altura; // Devuelve un resultado
}

// 8.1. Function expression (Función anónima asignada a una variable)
const saludoAnonimo = function() {
    console.log("¡Hola desde una función anónima!");
};

// 8.5. Arrow Function (Función Flecha)
// Función flecha con más de una sentencia (usa llaves y return)
const procesarDatos = (dato) => {
    let resultado = dato.toUpperCase();
    return resultado;
};

// Función flecha con una sola sentencia (implica return, sin llaves)
const cuadrado = num => num * num; 

console.log(cuadrado(3));

// 9. STRING
const producto = "Laptop";
const precio = 1200;

// 9.2. Concatenación tradicional con +
const mensaje1 = "El producto " + producto + " cuesta " + precio + " euros.";

// 9.2. Template String (comillas invertidas `backtick` y ${expresión})
const mensaje2 = `El producto ${producto} cuesta ${precio} euros.`;

// 9.3. Secuencias de escape
const textoLargo = "Línea 1.\n\tLínea 2 con tabulación."; 

// 13. CONVERSIÓN DE TIPOS
let cadenaNum = "123.45";

// 13.2. Conversión con métodos/funciones
// Convertir a Number
let numEntero = parseInt(cadenaNum); // Convierte a entero, trunca los decimales
let numDecimal = parseFloat(cadenaNum); // Devuelve valor numérico con decimales

// Convertir a String
let numeroOriginal = 500;
let cadenaNueva = String(numeroOriginal); // Usando función String()
```

***

## UDAD3: JS: PROGRAMACIÓN CON OBJETOS

```javascript
// 2. OBJETOS
// 2.1.1. OBJECT LITERAL
const mascota = { // Las propiedades y métodos van entre llaves
    nombre: "Fido",
    tipo: "Perro",
    edad: 4,
    
    // Método (función)
    ladrar: function() {
        // Uso de this para referenciar las propiedades del objeto actual
        console.log(`${this.nombre} dice: ¡Guau!`); 
    }
};

mascota.ladrar(); 
console.log(mascota.tipo); // Acceso con sintaxis del punto

// Añadir propiedad después de la declaración
mascota.color = "Marrón";

// Borrar propiedad con la palabra reservada delete
delete mascota.edad; 

// 2.2.3. DESTRUCTURING DE OBJETOS
const configuracion = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true
};

// Destructuring: extrae tema e idioma del objeto configuracion
const { tema, idioma } = configuracion; 
console.log(tema); 

// 2.9. Get y Set
const producto = {
    _precioBase: 100, // Propiedad interna
    
    // GET: propiedad computada (se accede como una propiedad normal)
    get precioIVA() {
        return this._precioBase * 1.10; 
    },
    
    // SET: modifica el valor de una propiedad a través de una función
    set precioBase(nuevoValor) {
        if (nuevoValor > 0) {
            this._precioBase = nuevoValor;
        }
    }
};

console.log(producto.precioIVA); // Accede al getter
producto.precioBase = 150;     // Llama al setter 

// 3. CLASES

// 3.1. Crear una clase
class Usuario { // Nombre de la clase con la inicial en mayúscula
    constructor(email, rol) { // Método constructor
        this.email = email;
        this.rol = rol;
    }
    
    // Método de la clase
    mostrarRol() {
        console.log(`El usuario ${this.email} tiene el rol: ${this.rol}`);
    }
}

// Creación de objetos a partir de la clase (instancia)
const admin = new Usuario("admin@app.com", "administrador"); 
admin.mostrarRol();


// 3.4. Heredar una clase
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
}

class Empleado extends Persona { // extends para herencia
    constructor(nombre, puesto) {
        super(nombre); // super para llamar al constructor del padre
        this.puesto = puesto;
    }
    
    // Polimorfismo: redefinición del método
    saludar() {
        super.saludar(); // Usa super para llamar al método del padre
        console.log(`Y mi puesto es ${this.puesto}.`);
    }
}

const empleado1 = new Empleado("Laura", "Desarrolladora");
empleado1.saludar(); 

// 4. ARRAY OBJECT

// 4.1. Declaración, modificación y acceso a los datos
const carrito = ["Leche", "Pan", 5.5, true]; 

// Acceder a un elemento por índice (empieza en 0)
console.log(carrito); 

// Añadir elemento al final con push()
carrito.push("Café"); 

// Eliminar el último con pop()
carrito.pop();       

// Añadir al inicio con unshift()
carrito.unshift("Queso"); 

// Eliminar elementos intermedios con splice(inicio, numElementosAEliminar)
carrito.splice(1, 1); // Elimina un elemento en la posición 1


const productos = [
    { id: 1, nombre: "Teclado", precio: 50 },
    { id: 2, nombre: "Ratón", precio: 20 },
    { id: 3, nombre: "Monitor", precio: 200 }
];

// 4.4. Métodos de array - findIndex
const indiceMonitor = productos.findIndex(p => p.nombre === "Monitor"); 

// 4.4. Métodos de array - filter
const productosCaros = productos.filter(p => p.precio > 60); 

// 4.4. Métodos de array - map
const soloNombres = productos.map(p => p.nombre.toUpperCase()); 


const colores = ["Rojo", "Verde", "Azul"];

// 4.5. Recorrer un array - FOR...OF (Itera sobre los VALORES)
for (const color of colores) {
    console.log(`Color: ${color}`);
}

// 4.5. Recorrer un array - FOR EACH (Método propio de arrays)
colores.forEach((item, index) => { 
    console.log(`Posición ${index}: ${item}`);
});
```

***

## UDAD4: JS: MANEJO BOM/DOM

```javascript
// 2. OBJETO WINDOW

// 2.2.3. MÉTODOS RELACIONADOS CON TEMPORIZADORES

// setTimeout: Ejecuta la función una vez pasado el tiempo (en milisegundos)
const temporizadorSaludo = setTimeout(() => {
    console.log("¡Han pasado 2 segundos!");
}, 2000); 

// clearTimeout: Cancela la ejecución antes de que ocurra
clearTimeout(temporizadorSaludo); 

// setInterval: Repite la función cada intervalo de tiempo
let contadorIntervalo = 0;
const intervalo = setInterval(() => {
    contadorIntervalo++;
    console.log(`Ejecución número ${contadorIntervalo}`);
    
    if (contadorIntervalo === 5) {
        clearInterval(intervalo); // Cancela la repetición
    }
}, 1000);

// 3. DOM: OBJETO DOCUMENT

// 3.1. Selección de los elementos del DOM

// Selección por ID (Selector Moderno - querySelector)
const elementoPorId = document.querySelector("#idPrincipal"); 

// Selección por Clase (Selector Moderno - querySelector)
const primerCard = document.querySelector(".card"); 

// Selección de VARIOS elementos (devuelve un NodeList)
const todosLosEnlaces = document.querySelectorAll("nav a"); 

// Selección por ID (Método Antiguo)
const formularioAntiguo = document.getElementById("miFormulario"); 


// 3.2. Modificar textos o imágenes 
const encabezado = document.querySelector('h1');

// textContent - Modificar texto plano literal (recomendado)
encabezado.textContent = "El nuevo título de la web.";

// innerHTML - Modificar contenido HTML
encabezado.innerHTML = "Título con un <span style='color: red;'>span</span>.";

// Modificar atributos de una imagen (ej. src)
const imagen = document.querySelector("img");
imagen.src = "ruta/a/nueva_imagen.jpg";
imagen.alt = "Descripción de la imagen";


// 3.3. Modificar CSS con JavaScript
const miDiv = document.querySelector(".contenedor");

// 3.3.1. Propiedad style: Modificar estilos (usando Lower Camel Case)
miDiv.style.backgroundColor = "blue";
miDiv.style.padding = "20px";
miDiv.style.justifyContent = "center"; 

const boton = document.querySelector("#miBoton");

// 3.3.4. classList.add() - Añadir una o varias clases
boton.classList.add("activo", "resaltado"); 

// 3.3.4. classList.remove() - Eliminar una clase
boton.classList.remove("resaltado");

// 3.3.5. classList.toggle() - Si tiene la clase la quita, si no la tiene la añade
boton.classList.toggle("activo"); 

// 3.6. Crear elementos en el DOM
const navegacion = document.querySelector('nav');

// 1. Crear el elemento
const nuevoEnlace = document.createElement('a');

// 2. Asignar atributos y contenido
nuevoEnlace.textContent = "Nuevo Servicio";
nuevoEnlace.href = "/servicios";

// 3.6.1. appendChild() - Insertar el elemento al final de su padre
navegacion.appendChild(nuevoEnlace);

// 3.6.2. insertBefore() - Crear elemento en ubicación concreta
const primerElemento = navegacion.firstElementChild;
const enlacePrioritario = document.createElement('a');
enlacePrioritario.textContent = "URGENTE";

// Lo inserta ANTES del primerElemento
navegacion.insertBefore(enlacePrioritario, primerElemento); 
```

***

## UDAD5: JS: EVENTOS, MODULOS Y LOCALSTORAGE

```javascript
// 1. DOM: EVENTOS

// 1.3. Modelo de eventos W3C (addEventListener)
const botonEnviar = document.querySelector("#enviar");

// Función manejadora (callback)
function manejarEnvio(e) {
    // 1.7. preventDefault() - Evitar el comportamiento por defecto (ej. enviar el formulario)
    e.preventDefault(); 
    
    console.log("Formulario interceptado.");
    
    // e.target hace referencia al elemento que causa el evento
    console.log("Elemento que causó el evento:", e.target); 
}

// addEventListener() - Primer parámetro: nombre del evento, Segundo: función (sin paréntesis)
botonEnviar.addEventListener('click', manejarEnvio); 

// Uso de arrow function como callback
botonEnviar.addEventListener('mouseenter', () => {
    console.log('Ratón ha entrado en el botón.');
});


// 2. MODULOS
// NOTA: La etiqueta <script> en el HTML debe ser: <script type="module" src="app.js"></script>

// ===================================================================
// Fichero: utilidades.js 
// 2.2. Exportar variables
export const IVA = 0.21;
export const VERSION = "1.0.0";

// 2.3. Exportar funciones
export function calcularIVA(monto) {
    return monto * IVA;
}
// ===================================================================
// Fichero: config.js 
// 2.5. Export default - SOLO puede haber uno por fichero
const MAX_INTENTOS = 5;
export default MAX_INTENTOS; 
// ===================================================================

// Fichero: app.js
// 2.2. Importar elementos específicos entre llaves
import { IVA, calcularIVA } from './utilidades.js'; 

// 2.5. Importar default (sin llaves, se le puede asignar un alias)
import intentosMax from './config.js'; 

// 3. LOCALSTORAGE y SESSIONSTORAGE
// 3.1. LocalStorage - Almacena datos SIN caducidad. Solo almacena Strings.

// 1. setItem() - Almacenar un valor (siempre como String)
localStorage.setItem('idiomaPreferido', 'es'); 

// 2. Almacenar un Objeto (debe serializarse con JSON.stringify())
const usuarioData = { id: 101, tema: 'claro' };
localStorage.setItem('usuario', JSON.stringify(usuarioData));

// 3. getItem() - Consultar un valor
const idioma = localStorage.getItem('idiomaPreferido');

// 4. Obtener un objeto guardado (debe des-serializarse con JSON.parse())
const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));

// 5. removeItem() - Eliminar un elemento
// localStorage.removeItem('idiomaPreferido');

// 6. clear() - Eliminar todos los elementos
// localStorage.clear();
```

***

## UDAD6: JS: PROGRAMACIÓN ASÍNCRONA. APIs

```javascript
// 1. CALLBACKS Y PROMISES

// 1.3. Promise - Estructura para controlar tareas asíncronas

// Creación de una Promesa
function conectarBBDD() {
    return new Promise((resolve, reject) => {
        // resolve: si la operación finaliza con éxito (fulfilled)
        // reject: si la operación falla (rejected)
        const conexionExitosa = true; 
        
        if (conexionExitosa) {
            resolve("Conexión a la BBDD establecida."); 
        } else {
            reject("Error de credenciales o red."); 
        }
    });
}

// Consumo de la Promesa
conectarBBDD()
    .then(mensaje => { // .then() se ejecuta si resolve es invocado
        console.log("Éxito:", mensaje); 
    })
    .catch(error => { // .catch() se ejecuta si reject es invocado
        console.error("Fallo:", error);
    });
    
// 3. MANEJO DE ERRORES

// 3.1. try() & catch() - Permite gestionar excepciones sin detener la ejecución
try { 
    // Código que puede generar un error (ej. ReferenceError)
    let resultado = 10 / variableInexistente; 
} catch (e) { // Se captura el error (e)
    console.error("Error detectado en el bloque try:", e.message); 
}

// Este código se ejecuta incluso si el try falló
console.log("Este mensaje siempre se ejecuta."); 

// 4. ASYNC AWAIT

// Función auxiliar que devuelve una promesa
function simularEspera(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje), 2000);
    });
}

// La función "padre" debe llevar la palabra reservada 'async'
async function ejecutarTareas() {
    console.log("Inicio de tarea asíncrona...");
    
    // 'await' detiene la ejecución del bloque async hasta que la promesa se resuelve
    const resultado = await simularEspera("¡Datos obtenidos después de la espera!"); 
    
    console.log(resultado); 
    console.log("Fin de la tarea.");
}

ejecutarTareas();

// 4.2. Async await con fetch()
async function consumirAPI(url) {
    try {
        // await 1: Espera la respuesta HTTP
        const respuesta = await fetch(url); 
        
        // await 2: Espera la conversión de la respuesta a JSON
        const datos = await respuesta.json(); 

        console.log("Datos obtenidos:", datos);
        
    } catch (error) {
        // Uso de try...catch para manejar fallos de red o API no disponible
        console.error("Fallo en la conexión:", error);
    }
}

// Ejemplo consumiendo una API
consumirAPI('https://jsonplaceholder.typicode.com/todos/1'); 

// -----------------------------------------------------------------------------------------
// PRACTICA CARRITO_COMPRA - VERSION COMENTADA

let articulosCarrito = []; //Se guardan los articulos de dentro del carrito en un array

cargarLocalStorage(); // Cargar carrito desde localStorage al arrancar
guardarLocalStorage(); // se coloca al final de las funciones que modifican el carrito
// Guardar carrito en localStorage
function guardarLocalStorage() {
    try {
        // NOTA: articulosCarrito es un array de objetos.
        // La variable 'articulosCarrito' se serializa a JSON porque localStorage solo almacena Strings.
        localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito)); // setItem(‘clave’, valor)
    } catch (e) {
        // La estructura try...catch se utiliza para gestionar excepciones o errores del sistema.
        console.error('Error guardando carrito en localStorage', e);
    }
}

// Cargar carrito desde localStorage
function cargarLocalStorage() {
    try {
        const stored = localStorage.getItem('articulosCarrito'); // getItem(‘clave’) consulta el valor.
        if (stored) {
            // Se utiliza JSON.parse() para deserializar la cadena JSON de vuelta a un objeto/array.
            articulosCarrito = JSON.parse(stored);
            carritoHTML(); // Se asume que esta función actualiza el DOM/Vista.
        }
        // Si no existe, getItem devuelve null, y la aplicación continúa sin error.
    } catch (e) {
        // Captura errores de lectura o de la función JSON.parse.
        console.error('Error cargando carrito desde localStorage', e);
    }
}

// Muestra el carrito en el HTML
function carritoHTML() {
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        contenedor_carrito.appendChild(row);
    });
}

// 2. MANEJO DEL FORMULARIO Y MENSAJES DE ERROR

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    if(document.querySelector('.error')) return;
    const div = document.createElement('div');
    div.classList.add('error', 'mt-10');
    div.textContent = mensaje;
    document.querySelector('form').insertBefore(div, document.getElementById('resultado'));
    setTimeout(() => {
        div.remove();
    }, 3000);
}
mostrarError('Todos los campos son OBLIGATORIOS');



// Manejo del formulario y mensajes de error
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Eliminar mensaje de error anterior si existe
    const prevError = document.querySelector('.error');
    if(prevError) prevError.remove();

    // Obtener valores del formulario
    const gama = document.getElementById('gama').value;
    const year = document.getElementById('year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value;

    // Validar campos
    if(gama === '' || year === '' || !tipo) {
        mostrarError('Todos los campos son OBLIGATORIOS');
        return;
    }

    // Si todo está bien, calcular seguro
    const poliza = new Poliza(gama, year, tipo);
    poliza.calcularSeguro();
    poliza.mostrarInfoHTML();
});