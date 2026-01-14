let niño ={
    nombre: "manolo",
    edad: 5
}
console.log(niño);
niño.nota = 10;
console.log(niño);
delete niño.nota;
//clave que quiero
console.log(niño["edad"]);
console.log(niño);

//instanceof para saber con que esta creado
// 1. Creamos las variables
let miMapa = new Map();         // Esto es un Map
let niño = { nombre: "Alex" };  // Esto es un Object

// 2. Usamos el detector (instanceof)

console.log(miMapa instanceof Map); 
// -> true (¡Sí! Fue creado con "new Map")

console.log(niño instanceof Map);   
// -> false (No, es un objeto normal)

console.log(niño instanceof Object); 
// -> true (Sí, es un objeto genérico)

//This y funciones dentro de objetos 
let alumno = {
    nombre: "Alex",
    merienda: "bocadillo de salchichón",
    
    // Método (función dentro del objeto)
    presentarse: function() {
        // Aquí "this" significa "alumno"
        console.log("Hola, soy " + this.nombre);
    },

    comer: function() {
        // Queremos acceder a la propiedad merienda DE ESTE objeto
        console.log("Me estoy comiendo un " + this.merienda);
    }
};

alumno.presentarse(); // Imprime: Hola, soy Alex
alumno.comer();       // Imprime: Me estoy comiendo un bocadillo de salchichón