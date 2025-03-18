# IDOR | Vulnerabilidad Web

Este directorio contiene documentación detallada sobre la explotación de la vulnerabilidad IDOR (Insecure Direct Object Reference) en la plataforma Hack The Box (HTB). Se documenta el proceso de identificación, explotación y mitigación de esta vulnerabilidad en un entorno controlado y legal.

## Propósito del Repositorio

Este espacio está dedicado a documentar técnicas esenciales de hacking ético y pentesting, proporcionando:

- Explicaciones simplificadas sobre la vulnerabilidad IDOR y cómo explotarla.
- Ejemplos prácticos aplicados en un entorno de Hack The Box.
- Guías paso a paso para aprender a identificar y explotar IDOR en aplicaciones web.
- Referencias a recursos adicionales para ampliar el aprendizaje sobre IDOR y otras vulnerabilidades comunes.

Esta documentación está pensada para ser utilizada solo en entornos de pruebas autorizados, como Hack The Box, laboratorios personales o CTFs legales.

## ¿Qué es IDOR?

IDOR (Insecure Direct Object Reference) es una vulnerabilidad en aplicaciones web que ocurre cuando un atacante puede manipular los parámetros de una URL (o de una solicitud) para acceder a objetos a los que no deberían tener acceso. En resumen, permite acceder a información de otros usuarios simplemente modificando un identificador (como un número de usuario o un archivo).

Esta vulnerabilidad ocurre cuando las aplicaciones no validan correctamente los accesos a objetos internos basados en identificadores que se proporcionan en la solicitud, permitiendo que los atacantes alteren esos identificadores para obtener acceso a recursos no autorizados.

### Uso habitual de IDOR en Ciberseguridad

Los atacantes pueden explotar IDOR para obtener acceso no autorizado a datos sensibles, como:

- Información de otros usuarios (perfiles, configuraciones, archivos).
- Funcionalidades restringidas (descarga de archivos o modificación de datos).
- Acceso a servicios internos de la aplicación.

Es fundamental para los pentesters identificar y explotar IDOR durante las pruebas de penetración en aplicaciones web, ya que es una vulnerabilidad común en sitios mal configurados.

## Contenido

📁 IDOR/ (directorio principal)  
├── 📄 README.md (esta guía)  
├── 📄 IDOR_easy.md (documentación detallada sobre la explotación de IDOR en HTB)

## Cómo Usar Este Repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/metahumo/metahumo.github.io.git
cd metahumo.github.io/ejercicios/idor
```

Accede al archivo **IDOR_easy.md** para leer la explicación detallada sobre la explotación del servicio FTP en HTB.

Sigue los pasos indicados y experimenta en un entorno de pruebas como Hack The Box o una máquina virtual segura.

## ⚠️ Consideraciones Éticas y Legales

El uso de técnicas de explotación fuera de entornos controlados sin autorización explícita está prohibido por la ley y puede tener consecuencias legales.

Asegúrate de:

✔ Usarlas únicamente en sistemas en los que tengas permiso expreso.
✔ Seguir principios éticos en hacking y ciberseguridad.
✔ No utilizarlas para actividades malintencionadas o ilegales.

Más información sobre hacking ético en:
🔗 https://www.hackthebox.com/terms

## Contribuciones

Si encuentras errores o quieres añadir contenido, abre un Issue o envía un Pull Request. Este repositorio busca ser un recurso colaborativo en español para quienes aprenden pentesting y ciberseguridad.

## Licencia

Este contenido se encuentra bajo la Creative Commons Zero v1.0 Universal (CC0). Puedes usarlo, modificarlo y compartirlo libremente con fines educativos.

**Nota:** Este repositorio es un recurso educativo, no reemplaza la práctica en plataformas como HTB, TryHackMe o entornos reales de pentesting controlado.

---

¡Explora, aprende y comparte! 
