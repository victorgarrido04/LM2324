let calificaciones = [];

function agregarCalificacion() {
    const calificacionInput = document.getElementById("calificacionInput").value;
    const errorMensaje = document.getElementById("errorMensaje");
    
    // Validar si la calificación es un número válido entre 0 y 10
    if (calificacionInput >= 0 && calificacionInput <= 10) {
        calificaciones.push(parseFloat(calificacionInput));
        errorMensaje.textContent = "";
        document.getElementById("calificacionInput").value = "";
    } else {
        errorMensaje.textContent = "La calificación debe estar entre 0 y 10.";
    }
}

function borrarCalificaciones() {
    calificaciones = [];
    document.getElementById("resultado").textContent = "";
}

function calcularNotaMedia() {
    const resultadoElement = document.getElementById("resultado");
    
    if (calificaciones.length === 0) {
        resultadoElement.textContent = "No hay calificaciones para calcular.";
    } else {
        const sumaCalificaciones = calificaciones.reduce((a, b) => a + b, 0);
        const notaMedia = sumaCalificaciones / calificaciones.length;
        resultadoElement.textContent = "La nota media es: " + notaMedia.toFixed(2);
    }
}
