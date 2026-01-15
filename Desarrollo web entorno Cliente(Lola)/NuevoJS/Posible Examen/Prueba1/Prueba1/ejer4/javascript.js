let tegnologias=[
  { "lenguaje": "JavaScript", "framework": "React", "ambito": "Frontend" },
  { "lenguaje": "JavaScript", "framework": "Vue", "ambito": "Frontend" },
  { "lenguaje": "JavaScript", "framework": "Angular", "ambito": "Frontend" },
  { "lenguaje": "Python", "framework": "Django", "ambito": "Backend" },
  { "lenguaje": "Python", "framework": "Flask", "ambito": "Backend" },
  { "lenguaje": "PHP", "framework": "Laravel", "ambito": "Backend" }
];

const contenedorLista = document.querySelector('.framework-lista');//coge el valor 
const radios = document.querySelectorAll('input[name="tipo-ambito"]');


function renderizarFrameworks(ambitoSeleccionado) {

    contenedorLista.innerHTML = "";

    // 2. Filtrar datos (Ejercicio 4. Realiza el filtrado)
    const datosFiltrados = tegnologias.filter(item => item.ambito === ambitoSeleccionado);

    // 3. Crear elementos dinámicos
    datosFiltrados.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('framework-elemento'); // Clase definida en tu CSS
        li.textContent = `${item.lenguaje} - ${item.framework}`;
        contenedorLista.appendChild(li);
    });
}

// Inicialización: Ver qué radio está marcado al cargar
const radioInicial = document.querySelector('input[name="tipo-ambito"]:checked');
if (radioInicial) {
    renderizarFrameworks(radioInicial.value);
}

// Gestión de eventos (Ejercicio 4. Gestiona eventos)
radios.forEach(radio => {
    radio.addEventListener('change', (evento) => {
        renderizarFrameworks(evento.target.value);
    });
});