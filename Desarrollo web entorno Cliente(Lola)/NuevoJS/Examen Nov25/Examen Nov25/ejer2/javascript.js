let tegnologias=[
  { "lenguaje": "JavaScript", "framework": "React", "ambito": "Frontend" },
  { "lenguaje": "JavaScript", "framework": "Vue", "ambito": "Frontend" },
  { "lenguaje": "JavaScript", "framework": "Angular", "ambito": "Frontend" },
  { "lenguaje": "Python", "framework": "Django", "ambito": "Backend" },
  { "lenguaje": "Python", "framework": "Flask", "ambito": "Backend" },
  { "lenguaje": "PHP", "framework": "Laravel", "ambito": "Backend" }
];

// El array 'tegnologias' ya está definido en tu archivo
const contenedorLista = document.querySelector('.framework-lista');
const radios = document.querySelectorAll('input[name="tipo-ambito"]');

function mostrarFrameworks(ambitoSeleccionado) {
    // 1. Limpiar lista
    contenedorLista.innerHTML = "";

    // 2. Filtrar array (Uso de .filter)
    const filtrados = tegnologias.filter(t => t.ambito === ambitoSeleccionado);

    // 3. Bucle para renderizar (Uso de .forEach)
    filtrados.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("framework-elemento"); // Clase del estilos.css
        li.textContent = `${item.lenguaje} - ${item.framework}`;
        contenedorLista.appendChild(li);
    });
}

// 4. Eventos de cambio (Uso de .target)
radios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        mostrarFrameworks(e.target.value);
    });
});

// Render inicial (Frontend por defecto según el HTML)
mostrarFrameworks("Frontend");