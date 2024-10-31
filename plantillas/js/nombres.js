///v Nombres
let nombres = ["Sara", "Jose Alfredo", "Ximena", "Juan", "Natalia Elizabeth", "Ana"];

// Función para contar vocales
let contarVocales = (nombre) => {
    let vocales = nombre.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
    return vocales ? vocales.length : 0;
};

// Función para invertir un nombre
let invertirNombre = (nombre) => nombre.split("").reverse().join("");

// Función para verificar si es palíndromo
let esPalindromo = (nombre) => {
    let nombreLimpio = nombre.toLowerCase().replace(/\s+/g, '');
    let nombreInvertido = nombreLimpio.split("").reverse().join("");
    return nombreLimpio === nombreInvertido ? "Sí" : "No";
};

// Función para generar la tabla
let generarTabla = () => {
    // Crear elementos de la tabla
    let tabla = document.createElement("table");
    let cabecera = document.createElement("thead");
    let cuerpo = document.createElement("tbody");

    // Crear la fila de encabezados
    let filaEncabezados = document.createElement("tr");
    ["Nombre", "Vocales", "Invertido", "Palíndromo"].forEach((titulo) => {
        let th = document.createElement("th");
        th.textContent = titulo;
        filaEncabezados.appendChild(th);
    });
    cabecera.appendChild(filaEncabezados);

    // Llenar la tabla con los datos
    nombres.forEach((nombre) => {
        let fila = document.createElement("tr");

        // Columna nombre
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = nombre;
        fila.appendChild(celdaNombre);

        // Columna vocales
        let celdaVocales = document.createElement("td");
        celdaVocales.textContent = contarVocales(nombre);
        fila.appendChild(celdaVocales);

        // Columna invertido
        let celdaInvertido = document.createElement("td");
        celdaInvertido.textContent = invertirNombre(nombre);
        fila.appendChild(celdaInvertido);

        // Columna palíndromo
        let celdaPalindromo = document.createElement("td");
        celdaPalindromo.textContent = esPalindromo(nombre);
        fila.appendChild(celdaPalindromo);

        cuerpo.appendChild(fila);
    });

    // Agregar la cabecera y el cuerpo a la tabla
    tabla.appendChild(cabecera);
    tabla.appendChild(cuerpo);

    // Insertar la tabla en el contenedor
    let contenedor = document.getElementById("tabla-container");
    contenedor.innerHTML = ""; // Limpiar cualquier tabla anterior
    contenedor.appendChild(tabla);
};

// Función para ocultar la tabla
let ocultarTabla = () => {
    let contenedor = document.getElementById("tabla-container");
    contenedor.innerHTML = ""; // Vaciar el contenedor para ocultar la tabla
};

// Variable para contar clics
let contadorClics = 0;

// Evento para mostrar la tabla al hacer clic dos veces
document.getElementById("mostrarTabla").addEventListener("click", () => {
    contadorClics++;
    if (contadorClics === 2) {
        generarTabla();
        contadorClics = 0; // Reiniciar el contador
    }
});

// Evento para ocultar la tabla cuando se presiona el botón de ocultar
document.getElementById("ocultarTabla").addEventListener("click", () => {
    ocultarTabla();
});