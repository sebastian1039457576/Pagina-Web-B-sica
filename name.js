// Función para mostrar la hora actual en tiempo real
function mostrarHora() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const reloj = document.getElementById("reloj");

    reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

// Función para validar el formulario de inicio de sesión
function validarFormulario() {
    const usuario = document.querySelector('input[name="usuario"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (usuario === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    return true;
}

// Función para resaltar el menú activo
function resaltarMenu() {
    const secciones = document.querySelectorAll('nav ul li a');
    secciones.forEach((seccion) => {
        seccion.addEventListener('click', function() {
            secciones.forEach((item) => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });
}

// Función principal (main)
function main() {
    // Mostrar hora en tiempo real
    setInterval(mostrarHora, 1000);

    // Validar formulario de inicio de sesión
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
        }
    });

    // Resaltar menú activo
    resaltarMenu();
}

// Ejecutar la función principal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', main);
