const input = document.getElementById("taskInput");
const boton = document.getElementById("addTask");
const lista = document.getElementById("taskList");
let memoria = []; 

boton.addEventListener("click", () => {
    let valor = input.value.trim(); // Usamos .trim() para limpiar espacios

    // 1. Validación de vacío
    if (valor === "") return;

    // 2. Lógica de duplicados (Uso de .includes)
    if (memoria.includes(valor)) {
        alert("Tarea duplicada"); // Basado en la imagen 'tarea duplicada.png'
    } else {
        // 3. Renderizado dinámico
        const li = document.createElement("li");
        
        // Creamos el texto de la tarea
        const span = document.createElement("span");
        span.textContent = valor;
        
        // Creamos el botón de eliminar (Clase del style.css)
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "X";
        btnBorrar.classList.add("delete-btn");

        // Evento para borrar (Uso de .target y filtrado de memoria)
        btnBorrar.addEventListener("click", (e) => {
            li.remove();
            memoria = memoria.filter(t => t !== valor);
        });
        li.appendChild(span);
        li.appendChild(btnBorrar);
        lista.appendChild(li);
        
        memoria.push(valor); // Guardamos en memoria
        input.value = ""; // Limpiamos input
    }
});