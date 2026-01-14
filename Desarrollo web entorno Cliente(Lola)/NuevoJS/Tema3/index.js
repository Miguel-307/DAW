console.log('JS tema3');
// * ! Arrays
//Creacion de arrays vacios, si en cualquiera le metes algo ya sale que tiene
/*
let array1 = new Array();
let array2=Array();
let array3=[];
 */

let edades = [18,21,34,12,92]; //crear
edades[1]=0;//modificar
console.log(edades); //imprimir

// * puede haber algunos espacios vacios 
edades = [18,21,34,,92]; 
console.log(edades);

// * ! Bidimensionales 
/* tablaNotas[0][0] = 1; // Fila 0 - Columna 0
tablaNotas[0][1] = 2; // Fila 0 - Columna 1
tablaNotas[0][2] = 3; // Fila 0 - Columna 2
tablaNotas[1][0] = 4; // Fila 1 - Columna 0
tablaNotas[1][1] = 5; // Fila 1 - Columna 1
tablaNotas[1][2] = 6; // Fila 1 - Columna 2 
 */
console.log('-----------------------------------------')
// * como lo recorremos sin formato array , es decir , texto
let precios = [69.99,12.49,,99.90];
for (let i=0; i<precios.length; i++) {
console.log(`El precio ${i} es: ${precios[i]}`);
}
console.log('-----------------------------------------')
console.log('sin indefinidos');
 
//* * For IN
//Otra manera y los indefinidos no salen
for (let i in precios) {
console.log(`El precio ${i} es: ${precios[i]}`);
}

//* * For of
console.log('-----------------------------------------')
console.log('con indefinidos');
for(let precio of precios){
    console.log(precio);
}
console.log('-----------------------------------------')
// * Modificacion de array 
//añadir ultimo
let elementos = ["a",7,true];
elementos.push("xyz"); 
console.log(elementos);

//añadir Primero
let elemento = ["a",7,true];
elemento.unshift("el primero"); 
console.log(elemento);

//quedarte con un numero especifico 
let elementos1 = ["a",7 ,true,90.54,"Lucía",12];
elementos1.length = 2;
console.log(elementos1)
// Resultado ["a",7] 

//* Eliminacion especificos boolean no sirve no existen
let elementos2 = ["a",7,false,90.54,"Lucía",12];
let eliminados2 = elementos2.splice(1,2);
console.log(eliminados2);
// elementos -> ["a",7,true,12]
// eliminados -> [90.54,"Lucía"] 

//*Copiar
let original = ["a",7,true,90.54,"Lucia",12];
let completo = original.slice();
let parcial = original.slice(2,4); 
console.log(original,completo,parcial)

//*Buscar elementos
let pajar = ["a",7,true,50.54,7,"Marcos"];
let aguja=7;

let resultado = pajar.indexOf(aguja);
console.log(resultado);
// resultado -> 1
aguja = 8;
resultado = pajar.indexOf(aguja);
console.log(resultado);
// resultado -> -1
aguja=7;
resultado = pajar.indexOf(aguja,2);
console.log(resultado);
// resultado -> 4 

//*Organizar
let vector1 = [8,4,5,7,1];
vector1.sort();
// vector->[1,4,5,7, 8] 
let vector2 = ["Casado","casa","prueba","zancos","ñam"];
vector2.sort();
// ordenación esperada -> [‘casa’, ‘Casado’, ‘fiam’, prueba’, ‘zancos’]
// ordenación obtenida -> [‘Casado’, ‘casa’, ‘prueba’, ‘zancos’, ‘fiam’] 


//* Objetos
const conjunto = new Set(); 
var conjunto1 = new Set([34,1,"Girasol",25.9]);
var conjunto2 = new Set("cadena"); 

//recorrido for of no se repiten
let conjuntos = new Set(["primero","segundo","tercero","primero"]) 
for(Parte of conjuntos){
    console.log(Parte);
}

//*Añadir 
//add no mete repetidos
var conjunto3 = new Set();
conjunto3.add(7);
conjunto3.add("Samuel").add(69).add("moteros"); 

//* Eliminar
conjunto3.delete(69); 

//*Tamaño
conjunto1.since;
//*Buscar
conjuntos.has(9);

//*Union
let array1 = [10,20,30,40,50];
let array2 = [30,50,60,70,80];
let array3 = [60,70,80,90,100];
var union = new Set([...array1,...array2,...array3]); 


//*Mapas
const telefonos = new Map([
[615885225,"Elena"],
[663998541,"Quirós"],
[656232511,"Marta"],
[696585537,"David"]
]); 
console.log(telefonos);

//rrecorer
for (persona of telefonos){
    console.log(persona);
}
//añadiendo .key coges el valor y .values el valor 
for (let telefono of telefonos.keys())
console.log(telefono); 

for (let persona of telefonos.values())
console.log(persona); 

//*añadir 
telefonos.set(615885225,"Elena").set(777777777,"Quirós"); 

//*eliminar
telefonos.delete(777777777); 

//*Buscar 
telefonos.has(666555222)