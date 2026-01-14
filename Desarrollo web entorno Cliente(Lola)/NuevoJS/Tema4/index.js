//Funciones en js
//estructura principal 
function mandaralerta(){
alert("alerta de seguridad");
}
//mandaralerta();

//con parametros 
num1=1
num2=2
function sumar(nume1,nume2){
    return num1+num2;
}
//console.log(sumar(num1,num2));

//ahora con array
array3=[3,4,5];
function multiplo(Array){
    let total = 1;
for (numero of Array){

    console.log(total);
    total =total *numero;
}

return total;
}
//console.log(multiplo(array3));

//maps
let mapa =new Map();
mapa.set("Hola","Adios")
mapa.set("Comer","Cagar")
//console.log(mapa.size);
//console.log(mapa.get("Hola"));
mapa.delete("Comer");
//console.log(mapa.size);