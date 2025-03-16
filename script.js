// script.js - Funcionalidad básica

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.textContent = "Ocultar detalles";
            } else {
                content.style.display = "none";
                this.textContent = "Mostrar detalles";
            }
        });
    });
});
