
# GetSimple | Shell Reverse

Este directorio contiene documentación detallada sobre la explotación de **GetSimple | Shell Reverse** en entornos controlados y autorizados, como puede ser la plataforma **Hack The Box (HTB)**.

---

## Propósito del Repositorio

Este espacio está dedicado a documentar técnicas esenciales de **hacking ético y pentesting** aplicadas a la explotación de una vulnerabilidad en **GetSimple**. En este repositorio se detalla el proceso de:

- **Reconocimiento**: Identificación de puertos y servicios mediante herramientas como Nmap, WhatWeb y Gobuster.
- **Explotación**: Inyección de comandos para obtener una shell reversa.
- **Escalada de privilegios**: Técnicas para elevar privilegios en el sistema comprometido.

La documentación busca servir como guía paso a paso para quienes deseen aprender y practicar técnicas de ciberseguridad en entornos de laboratorio o de formación, siempre respetando la legalidad y la ética profesional.

---

## Breve Explicación sobre GetSimple y su Vulnerabilidad

**GetSimple** es un sistema de gestión de contenido (CMS) ligero y fácil de usar, orientado a la simplicidad y a la administración sin bases de datos. Sin embargo, muchas de sus implementaciones se quedan con configuraciones predeterminadas y sin las debidas medidas de seguridad, lo que las hace susceptibles a ataques.

En este caso, la vulnerabilidad se explota a través de la inyección de código en áreas como la edición de temas, permitiendo la ejecución de comandos remotos y la obtención de una shell reversa. Esto se debe a la falta de validación y sanitización adecuada de la entrada en las funciones de edición, dejando expuesto el sistema a ataques de ejecución remota de comandos (RCE).

---

## Contenido

```
-GetSimple_Shell_Reverse/
--README.md (esta guía)
--GetSimple_Shell_Reverse.md      (documentación completa de la explotación)
```

---

## Cómo Usar Este Repositorio

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio/GetSimple_Shell_Reverse
```

2. Abre el archivo `GetSimple_Shell_Reverse.md` para consultar la documentación completa sobre el proceso de explotación.

3. Sigue las instrucciones y utiliza las herramientas descritas en un entorno de pruebas autorizado y controlado.

---

⚠️ Consideraciones Éticas y Legales

El uso de las técnicas documentadas en este repositorio **sin autorización explícita** es ilegal y puede acarrear consecuencias graves. **Asegúrate de:**

- Emplear estas técnicas únicamente en sistemas de pruebas o laboratorios personales.
- Contar con el permiso expreso del propietario del sistema.
- Actuar siempre de forma ética y responsable.

Para más información sobre prácticas de hacking ético, revisa los términos en:
✔ [https://www.hackthebox.com/terms](https://www.hackthebox.com/terms)

---

## Contribuciones

Si encuentras errores o deseas mejorar esta documentación, por favor abre un **Issue** o envía un **Pull Request**. Este repositorio es un recurso colaborativo para la comunidad de ciberseguridad y pentesting.

---

## Licencia

Este contenido se encuentra bajo la **Creative Commons Zero v1.0 Universal (CC0)**. Puedes usarlo, modificarlo y compartirlo libremente con fines educativos.

¡Explora, aprende y comparte!
