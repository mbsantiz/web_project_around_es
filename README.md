Tripleten — web_project_around
Around the U.S

Autor: Marcos Santiz
Enlace: https://mbsantiz.github.io/web_project_around/

Proyecto 10 del Bootcamp Software Developer

📝 Descripción del Proyecto

Este proyecto es una aplicación web interactiva que simula una red de tarjetas de destinos turísticos con edición de perfil, validación de formularios y múltiples ventanas emergentes (popups).

En esta versión (Proyecto 10) se realizó una refactorización completa del código JavaScript aplicando Programación Orientada a Objetos (POO) y modularización por responsabilidades.

La aplicación permite:

Editar información del perfil.

Agregar nuevas tarjetas dinámicamente.

Dar “like” a tarjetas.

Eliminar tarjetas.

Visualizar imágenes ampliadas.

Validar formularios en tiempo real.

✨ Características principales
👤 Edición de perfil

Los usuarios pueden modificar su nombre y descripción mediante un popup editable.

Funciones:

Apertura y cierre de popup

Validación en tiempo real

Actualización inmediata del contenido del perfil

Botón guardar activo únicamente cuando el formulario es válido

Reset automático del estado de validación al abrir el popup

➕ Agregar nuevos lugares

Se implementó un formulario para agregar nuevas tarjetas dinámicamente.

Características:

Creación de cards a partir de un <template>

Inserción dinámica en el DOM

Validación activa antes de permitir guardar

Limpieza automática del formulario al abrir

❤️ Botón de “Me gusta”

Cada tarjeta incluye un botón interactivo de like.

Funciones:

Alterna entre estado activo e inactivo

Cambia dinámicamente el ícono del corazón

Funciona de manera independiente en cada tarjeta

🗑️ Eliminación de tarjetas

Cada tarjeta incluye un botón para eliminarla.

Características:

Posicionado con position: absolute

Eliminación directa del elemento del DOM

Manejo independiente por instancia de tarjeta

🖼️ Vista ampliada de imágenes

Al hacer clic en una imagen:

Se abre un popup con la imagen ampliada

Se muestra el título como descripción

Se puede cerrar mediante botón, overlay o tecla ESC

🧠 Arquitectura Orientada a Objetos

En este proyecto se reorganizó completamente la lógica JavaScript utilizando clases y separación de responsabilidades.

📦 Clase Card

Responsable de:

Generar la estructura de una tarjeta desde un template

Asignar datos dinámicamente (imagen y título)

Manejar eventos internos (like, delete, click en imagen)

Ejecutar una función callback para abrir el popup de imagen

Principios aplicados:

Encapsulamiento

Responsabilidad única

Inversión de control (uso de callback)

📦 Clase FormValidator

Responsable de:

Validar campos en tiempo real

Mostrar y ocultar mensajes de error

Activar y desactivar el botón submit

Resetear el estado del formulario

Cada formulario tiene su propia instancia de FormValidator.

Principios aplicados:

Modularización

Encapsulamiento de lógica interna

Reutilización mediante configuración externa

📦 Archivo utils.js

Contiene funciones auxiliares reutilizables:

openPopup()

closePopup()

Permite desacoplar la lógica de los popups del archivo principal.

🔄 Sistema de Validación

La validación ahora está implementada como clase modular:

Incluye:

Validación en tiempo real usando la API nativa de HTML5

Mensajes de error dinámicos

Desactivación automática del botón si hay campos inválidos

Reset de validación al reabrir el popup

❌ Cierre inteligente de popups

Todos los popups pueden cerrarse mediante:

Botón "X"

Click en overlay

Tecla ESC

El manejo es reutilizable y desacoplado.

🎨 Mejoras UI/UX

Uso de metodología BEM

Inputs con estados visuales claros

Estilos de error sin afectar el layout

Botones desactivados visualmente cuando el formulario es inválido

Responsive design con Grid y Flexbox

🧩 Cambios técnicos clave (Proyecto 10)

✔️ Refactorización completa a clases
✔️ Eliminación de funciones globales
✔️ Uso de <template> para generación de tarjetas
✔️ Separación del código en módulos ES6
✔️ Instancias independientes para cada formulario
✔️ Uso de callbacks para desacoplar componentes

📁 Estructura del Proyecto
/web_project_around/
├── /images/
├── /pages/
│ └── index.css
├── /scripts/
│ ├── Card.js
│ ├── FormValidator.js
│ ├── utils.js
│ └── index.js
├── index.html
├── favicon.ico
└── README.md
🛠️ Tecnologías utilizadas
HTML5

Estructura semántica

Formularios accesibles

Uso de <template>

CSS3

Metodología BEM

Responsive design

Grid & Flexbox

Estados visuales (hover, focus, error)

JavaScript (Vanilla ES6 Modules)

Programación Orientada a Objetos

Manipulación del DOM

Event listeners

Modularización

Callbacks

Encapsulamiento

Validación dinámica

Manejo desacoplado de componentes
