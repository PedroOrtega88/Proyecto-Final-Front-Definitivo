Proyecto de Películas
Este documento proporciona una visión general del proyecto de películas, detallando su desarrollo, estructura de archivos, tecnologías utilizadas y otros aspectos importantes.

Estructura de archivos
La estructura de archivos del proyecto es la siguiente:

css
Copy code
.
├── public
│   └── img
│
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── CommentsPage.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── routes
│   │   └── movieRoutes.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
└── package.json
En la carpeta public/img se encuentran las imágenes utilizadas en el proyecto. En src/components se encuentran los componentes de React utilizados para construir la interfaz de usuario. src/routes contiene las rutas de la aplicación. App.js es el archivo principal de la aplicación y index.js es el punto de entrada de React. App.css contiene los estilos de la aplicación.

Tecnologías utilizadas
El proyecto utiliza las siguientes tecnologías:

React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Librería para manejar la navegación en la aplicación.
Fetch API: Interfaz JavaScript para realizar solicitudes HTTP.
Base de datos
Para proporcionar los datos de las películas, se utilizó un servidor backend conectado a una base de datos.

Modelo de película
Se definió un modelo de película que incluye información como título, descripción, puntuación, trailer, imagen, etc.

Rutas
Se implementaron rutas utilizando React Router para facilitar la navegación entre las diferentes páginas de la aplicación.

Controladores
Se crearon controladores en el backend para manejar las solicitudes relacionadas con las películas, como obtener la lista de películas, obtener detalles de una película específica, etc.

Componentes
Se desarrollaron diversos componentes de React para construir la interfaz de usuario, incluyendo el encabezado, la lista de películas, los detalles de una película, páginas de comentarios, formularios de inicio de sesión y registro, entre otros.

Estilos
Los estilos de la aplicación se definieron en el archivo App.css para garantizar una presentación visual atractiva y coherente en toda la aplicación.

Despliegue
El backend de node se desplego en la pagina web Railway con la siguiente dirección :'https://proyecto-final-production-4c19.up.railway.app/peliculas/all', respecto al front de react, se desplego en Netlify, mostrando problemas de fetch que no he sido capaz de solventar, seguire investigando para averiguar cual es la causa del error, pese a aportar .env y puertos.

Navegación
La aplicación cuenta con un menú de navegación en el encabezado para facilitar el acceso a las diferentes secciones de la aplicación, como la lista de películas, los detalles de una película, etc.

Este proyecto se ira mejorando en el futuro añadiendo mas peliculas a la BBDD y agregando nuevas funcionalidades y correccion de errores que han ido surgiendo durante el desarrollo, sirviendo de  aprendizaje para mi.