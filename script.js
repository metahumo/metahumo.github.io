// Genera dinámicamente la lista de ejercicios
document.addEventListener("DOMContentLoaded", function() {
    const ejercicios = [
        { nombre: "HTB - Nibbleblog", enlace: "HTB_Nibbleblog.md" },
        { nombre: "Ejercicio de SQL Injection", enlace: "sql_injection.md" },
        { nombre: "Ejercicio de Fuerza Bruta", enlace: "fuerza_bruta.md" }
    ];

    const listaEjercicios = document.getElementById("ejercicios-container");

    ejercicios.forEach(ejercicio => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = ejercicio.nombre;
        link.href = ejercicio.enlace;
        link.target = "_blank"; // Abre en nueva pestaña
        li.appendChild(link);
        listaEjercicios.appendChild(li);
    });
});

