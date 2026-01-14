//Texto por consola 
console.log("Aqui esta el texto que saldra por consola ");

console.log("-----------linea divisora-----------");

//Estructura if
condicionIF = false;
if(condicionIF){
    console.log("Si el if esta en true sale esto por consola");
}
//estructura del else si falla el if sale por defecto el else 
else{
    console.log('En este caso salio el else ya que no cumplio la condicion ');
}

/**Esto es un tipo de comentario el cual ocupa mas lineas */

console.log("-----------linea divisora-----------");


//Variables no hace falta poner que tipo es el js ya lo asocia
miString1 ="Esta es una variable de tipo string1 ";
miString2 ="Esta es una variable de tipo string2";

// para unirlo en una pues se pone +
mistringUnido = miString1 + miString2
console.log(mistringUnido);

// queremos añadir variables   en un string se pone +
PesoMiguel = 56;
StringVariable="Miguel Pesa : " + PesoMiguel ;
console.log(StringVariable);


//tipos de boolean

console.log("-----------linea divisora-----------");

console.log(`1 - ¿true?: ${Boolean(true)}`);
console.log(`2 - ¿false?: ${Boolean(false)}`);
console.log(`3 - ¿1?: ${Boolean(1)}`);
console.log(`4 - ¿0?: ${Boolean(0)}`);
console.log(`5 - ¿"texto"?: ${Boolean("texto")}`);
console.log(`6 - ¿""?: ${Boolean("")}`); // Corregido para que se entienda
console.log(`7 - ¿Infinity?: ${Boolean(Infinity)}`);
console.log(`8 - ¿NaN?: ${Boolean(NaN)}`);


console.log("-----------linea divisora-----------");
console.log(`Tipo de true: ${typeof true}`);
console.log(`Tipo de 444: ${typeof 444}`);
console.log(`Tipo de 55.5: ${typeof 55.5}`);
console.log(`Tipo de 111n: ${typeof 111n}`);
console.log(`Tipo de "texto": ${typeof "texto"}`);
console.log(`Tipo de undefined: ${typeof undefined}`);
console.log(`Tipo de null: ${typeof null}`);
console.log(`Tipo de NaN: ${typeof NaN}`);
// Nota: 'variable' no existe, pero typeof no da error, devuelve 'undefined'
console.log(`Tipo de una variable no inicializada: ${typeof variable}`);

console.log("-----------linea divisora-----------");

//Var y let
var miVariable = "Soy visible fuera del bloque.";
let otraVariable = "No soy visible fuera del bloque."; 
console.log(miVariable);
console.log(otraVariable);

//Const esta variable no puede cambiar es siempre la misma 
//si se intenta cambiar sa error
const IVA =0.21; 


// tipos de console
console.log("Versión LOG de un mensaje por consola.");
console.info("%cVersión INFO del mensaje número %d por consola.","font-weight: bold;",2);
console.warn("Version WARN de un mensaje por consola.");
console.error("Version ERROR de un mensaje por consola."); 

console.log("-----------linea divisora-----------");
// este mensaje va a salir nada mas entres a la pagina web  verdad o falso
let mensaje = '¿Estás seguro de querer eliminar?';
let respuesta = confirm(mensaje);
// Aqui dice que es verdad  que se hizo y cuando pulse si o no saldra true o false 
console.log( `Respuesta del cuadro de diálogo: ${respuesta}`); 


console.log("-----------linea divisora-----------");
//Ahora mensaje de entrada cpn pront escribes 
let mensaje2 = 'Para eliminar escriba ELIMINAR';
let respuesta2 = prompt(mensaje2);
console.log(`El usuario escribió: ${respuesta2}.`);



const Pl = 3.14159;
alert(`Recuerda usar esta aproximación de N en tus cálculos: S(PIY)`); 

console.log("-----------linea divisora-----------");
// OPERACIONES AND (&&) - "Y"
console.log('AND &&');
console.log(`1 = ${true && true}`);       // true
console.log(`2 = ${true && false}`);      // false
console.log(`3 = ${false && true}`);      // false
console.log(`4 = ${false && (3 == 4)}`);  // false
console.log(`5 = ${'Gato' && 'Perro'}`);  // "Perro" (¡Ojo a esto!)
console.log(`6 = ${false && 'Gato'}`);    // false
console.log(`7 = ${'Gato' && false}`);    // false

// OPERACIONES OR (||) - "O"
console.log('or ||');
console.log(`8 = ${true || true}`);       // true
console.log(`9 = ${false || true}`);      // true
console.log(`10 = ${true || false}`);     // true
console.log(`11 = ${false || (3 == 4)}`); // false
console.log(`12 = ${'Gato' || 'Perro'}`); // "Gato" (¡Ojo a esto!)
console.log(`13 = ${false || 'Gato'}`);   // "Gato"
console.log(`14 = ${'Gato' || false}`);   // "Gato"

// OPERACIONES NOT (!) - "NO"
console.log("not !");
console.log(`15 = ${!true}`);             // false
console.log(`16 = ${!false}`);            // true
console.log(`17 = ${!'Gato'}`);           // false
console.log("-----------linea divisora-----------");

//condicion if else 
let edad =21;
let condicional = (edad >= 18) ? "mayor" : "menor";
console.log(`El usuario es ${condicional} de edad.`); //"El usuario es mayor de edad." 



console.log("-----------linea divisora-----------");
//SWITCH 
console.log("Menú abierto");
let letra_pulsada = 'c';
switch (letra_pulsada) {
case 'a':
console.log("Abrir archivo");
break;
case 'c':
console.log("Copiar");
break;
case 'p':
console.log("Pegar");
break;
default:
console.log("Opción incorrecta");
break;}
console.log("Menú cerrado"); 

console.log("-----------linea divisora-----------");


//WHILE

let pases = 0;
while (pases < 11) {
console.log(`Pase número ${pases}`);
pases++;

} 

console.log("-----------linea divisora-----------");

//Do-while
console.log("--- Primeros 10 números pares ---");
let contador = 0;
let numero = 1;
do {
if (numero%2 == 0) {
console.log(`PAR: ${numero}`);
contador++;
}
numero++;
 } while (contador<10); 


 //for 
 console.log("-----------linea divisora-----------");  


 const TABLA = 9;
for (let contador2=1; contador2<=10; contador2++) {
console.log(`${TABLA} x ${contador2} = ${TABLA*contador2}`);
} 