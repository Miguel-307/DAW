// 1. Creamos el mapa vacío
let mapa = new Map();

// 2. Añadimos las localidades (Clave: Código Postal, Valor: Ciudad)
mapa.set("41700", "Dos Hermanas");
mapa.set("21440", "Lepe");
mapa.set("11160", "Barbate");
mapa.set("1138", "Tarifa");   // ¡OJO! Este tiene 4 dígitos (Error)
mapa.set("41015", "Sevilla");
mapa.set("410137", "Svilla");
mapa.set("41013", "Sevlla");

// 3. Definimos la función de limpieza
function checkMap(unMapa) {
    // Recorremos el mapa usando [clave, valor]
    for (let [clave, valor] of unMapa) {
        
        // Comprobamos si la longitud NO es 5
        if (clave.length != 5) {
            // Si es incorrecto, lo borramos del mapa
            unMapa.delete(clave); 
            console.log(` Se ha eliminado: ${valor} (CP: ${clave}) por longitud incorrecta.`);
        }
    }
}

// 4. Llamamos a la función pasando el mapa "por referencia"
checkMap(mapa);

// 5. Mostramos el resultado final
console.log("--- Mapa Final ---");
console.info(mapa);