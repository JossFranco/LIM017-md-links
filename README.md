# ⚒️ Markdown Links

## 1. Introducción

**MD-Links** Es una librería que permite validar URL dentro de archivos Markdown(.md), esta librería nos permitirá obtener los estados de los enlaces tales como enlaces totales, únicos y enlaces rotos.

![md-links](https://github.com/JossFranco/LIM017-md-links/blob/dev/imagenes/links.jpg)
 
 ## 2.instrucciones de uso 🛠️

 Las siguientes instrucciones le permitirán instalar la biblioteca en su computadora para el desarrollo.

 ### 2.1 Instalación 🧰

 La instalación se puede realizar por npm:

 ```
$ npm i md-links-jossf
```
#### 2.2 Interfaz de Linea de Comando (CLI) ⚙️

Se ejecuta de la siguiente manera a través del terminal:

```sh
$ md-links <path> [options]
```

 Ejemplo: 

 ```sh
$ md-links carpeta_de_prueba
href: https://www.geeksforgeeks.org/how-to-run-node-js-program-as-an-executable/
text: a link
file: C:\Users\Joss\Documents\GitHub\LIM017-md-links\exampleFile
```
### 2.2.1 Opciones ⚗️

* ### `--validate`

Al pasar la opción `--validate`, el módulo hará una petición HTTP para averiguar si el link funciona o no; si el link resulta en una redirección a una URL que responde "ok" se considerara una URL valida, en caso de que un links no se redireccione a una URL considerara que el links esta roto por lo tanto devolverá como mensaje "fail".

Ejemplo:

```sh
$ md-Links ./exampleFile --validate
 href: https://www.youtube.com/watch?v=RqQ1d1qEWlE
 text: Curso para principiantes de Java Script
 file: C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile\\folder.md
 status: 200
 ok: OK
```
```sh
href: https://nodej.org/api/fs.html#fs_fs_readfile_options_callback
text: Broken
file: C:\Users\Joss\Documents\GitHub\LIM017-md-links\exampleFile\README.md
status: Fail: Your request failed
ok: fail
```
Los valores de retorno son:

 *  `href`: URL encontrada.
 *  `text`: Texto que aparecía dentro del link.
 *  `file`: Ruta del archivo donde se encontró el link.
 *  `status`: Código de respuesta HTTP.
 *  `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

* ### `--stats`

Si pasamos la opción `--stats` nos retornara las estadisticas (total de los links y los links únicos) de las carpetas u archivos ingresados.

Ejemplo:

```sh
$ md-Links ./exampleFile --stats

Total: 12
Unique: 4
```
Los valores de retorno son:

 *  `Total`: total de links encontrados en archivos Markdown.
 * `Unique`: total de links únicos.

* ### `--validate --stats o --stats --validate`

También podemos combinar `--stats` y `--validate`  nos retornará las estadísticas (total de links, links únicos y links rotos ) de la carpeta u archivo ingresado.


Ejemplo:

```sh
$ md-links exampleFile --validate --stats
Total: 12
Unique: 4
Broken: 3
```
Los valores de retorno son:

* `Total`: total de links encontrados en archivos Markdown.
* `Unique`: total de links únicos.
* `Broken`: total de links rotos.

## 3. Proceso de desarrollo:
Diagrama de flujo API
![Diagrama de flujo API](https://github.com/JossFranco/LIM017-md-links/blob/main/DiagramaDeFlujo/Diagrama%20API.png)
Diagrama de flujo CLI
![Diagrama de flujo CLI](https://github.com/JossFranco/LIM017-md-links/blob/main/DiagramaDeFlujo/Diagrama%20CLI.png)

## 4. Liberías empleadas 📚

- [File-Sytem](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#file-system)
- [Path module](https://nodejs.org/dist/latest-v17.x/docs/api/path.html)
- [Node-fetch](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#file-system)
- [Marked](https://www.npmjs.com/package/marked)
- [chalk](https://www.npmjs.com/package/chalk/v/4.1.0) 
- [jest](https://jestjs.io/docs/api) 


## Author ✒️
[Joseline Franco Herrera](https://github.com/JossFranco)


