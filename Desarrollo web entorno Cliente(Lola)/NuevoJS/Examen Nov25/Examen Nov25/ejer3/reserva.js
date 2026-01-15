const form = document.getElementById("reserva-form");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // ¡Importante! Evita recarga del formulario [cite: 1416, 1506]

    // 1. Captura de valores y divs de error
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pasaporte = document.getElementById("pasaporte").value.trim();
    const fecha = document.getElementById("fecha").value;
    const noches = parseInt(document.getElementById("noches").value);
    const habitacion = document.getElementById("habitacion").value;

    // Limpiar errores previos
    document.querySelectorAll(".error").forEach(div => div.textContent = "");
    resultadoDiv.textContent = "";

    let esValido = true;

    // 2. Validaciones (Basadas en 'Formulario inválido.png')
    // Nombre: Al menos dos palabras
    if (nombre.split(" ").length < 2) {
        document.getElementById("error-nombre").textContent = "Ingrese un nombre válido (letras y al menos dos palabras).";
        esValido = false;
    }

    // Email: Regex estándar
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("error-email").textContent = "Email inválido.";
        esValido = false;
    }

    // Pasaporte: Letra + 7 números (Ej: X1234567)
    const pasaporteRegex = /^[A-Z]\d{7}$/i;
    if (!pasaporteRegex.test(pasaporte)) {
        document.getElementById("error-pasaporte").textContent = "Formato inválido. Ejemplo: X1234567";
        esValido = false;
    }

    // Fecha: Posterior a hoy
    const hoy = new Date();
    const fechaReserva = new Date(fecha);
    if (!fecha || fechaReserva <= hoy) {
        document.getElementById("error-fecha").textContent = "La fecha debe ser posterior a hoy.";
        esValido = false;
    }

    // Noches: entre 1 y 30
    if (isNaN(noches) || noches < 1 || noches > 30) {
        document.getElementById("error-noches").textContent = "Número de noches entre 1 y 30.";
        esValido = false;
    }

    // Habitación: seleccionada
    if (!habitacion) {
        document.getElementById("error-habitacion").textContent = "Seleccione un tipo de habitación.";
        esValido = false;
    }

    // 3. Lógica de Éxito (Basado en 'Formulario válido.png')
    if (esValido) {
        const precios = { individual: 80, doble: 120, suite: 200 };
        const total = precios[habitacion] * noches;
        resultadoDiv.textContent = `Estimado/a ${nombre}, el precio total de su reserva es: $${total.toFixed(2)}`;
    }
});