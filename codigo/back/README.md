# Descripcion
Backend creado utilizando como ejemplo la clase del profesor del 48, autor: Daza

### Instalaciones
Ejecutar en Gitbash o Terminal de Visual Studio Code en la misma ruta donde esta el package.json del folder `back`
```
npm install
```

### Correr localmente
Ejecutar en Gitbash o Terminal de Visual Studio Code en la misma ruta donde esta el package.json del folder `back`

```
npm run dev
```

# NOTA: 
Para poder ejecutar se requiere tener una URL de MongoDB configurada en un archivo llamado `.env` (Este archivo NO debe ser subido al repositorio ya que contiene usuario y clave de la base de datos, y eso es informacion que no deberia ser compartida). Crear el archivo con la siguiente estructura

```
DB_URI=[URL DB CON CLAVE]
PORT=3000
ENCRIPTADO_KEY=[VALOR GENERADO POR RANGER ROSA]
ENCRIPTADO_INIT_VECTOR=[VALOR GENERADO POR RANGER ROSA]
```

Por favor reemplazar `[URL DB CON CLAVE]` con la URL de Mongo que contenga el usuario y la clave, incluir el nombre de la base de datos en esta URL, ejemplo:

```
DB_URI=mongodb+srv://usuarioejemplo:claveejemplo@servidor-mongo-ejemplo/base-de-datos-ejemplo?retryWrites=true&w=majority
PORT=3000
ENCRIPTADO_KEY=ABCDEF12345
ENCRIPTADO_INIT_VECTOR=ABC123
```
