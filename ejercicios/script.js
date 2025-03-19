/* script.js - Funcionalidad para la sección de Ejercicios Resueltos */

document.addEventListener("DOMContentLoaded", function () {
    // Agregar mensaje en el header
    const headerParagraph = document.querySelector("header p");
    if (headerParagraph) {
        headerParagraph.innerHTML += " | Explora el contenido de HTB - Nibbleblog";
    }

    // Función para el menú desplegable
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    }
});
