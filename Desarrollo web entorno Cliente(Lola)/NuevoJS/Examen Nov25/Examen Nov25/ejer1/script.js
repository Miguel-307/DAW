const input = document.getElementById("taskInput")
const boton = document.getElementById("addTask")
const lista = document.getElementById("taskList")
let memoria=[];
boton.addEventListener("click" ,() =>{
    let valor = input.value ;
    if (memoria.includes(valor)){
        alert("Hay uno ya")
    }else{
    let li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);
    memoria.push(valor);
    }
})