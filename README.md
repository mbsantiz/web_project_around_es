Tripleten — web_project_around
Around the U.S
Autor: Marcos Santiz
Enlace: https://mbsantiz.github.io/web_project_around/
Proyecto 12 del Bootcamp Software Developer

📝 Descripción del Proyecto
Este proyecto es una aplicación web interactiva que simula una red social de tarjetas de destinos turísticos conectada a un servidor real mediante una API REST.
En esta versión (Proyecto 12) se conectó la aplicación a un servidor real, implementando operaciones CRUD completas mediante fetch y Promises. Se agregaron nuevas funcionalidades como confirmación de eliminación, actualización de avatar y mejoras de UX en los formularios.
La aplicación permite:

Editar información del perfil y guardarla en el servidor.
Agregar nuevas tarjetas dinámicamente y persistirlas en el servidor.
Dar "like" y quitar "like" a tarjetas sincronizando con el servidor.
Eliminar tarjetas con confirmación previa.
Actualizar la foto de perfil desde un enlace.
Visualizar imágenes ampliadas.
Validar formularios en tiempo real.

✨ Características principales
👤 Edición de perfil
Los usuarios pueden modificar su nombre y descripción mediante un popup editable.

Apertura y cierre de popup
Validación en tiempo real
Actualización guardada en el servidor mediante PATCH
Botón guardar activo únicamente cuando el formulario es válido
Reset automático del estado de validación al abrir el popup
Indicador de carga "Guardando..." mientras se procesa la solicitud

🖼️ Actualización de foto de perfil
Los usuarios pueden cambiar su foto de perfil desde un enlace.

Ícono de lápiz visible al pasar el cursor sobre la foto
Efecto de opacidad al hacer hover
Popup con formulario para ingresar el enlace
Actualización guardada en el servidor mediante PATCH
Indicador de carga "Guardando..." mientras se procesa

➕ Agregar nuevos lugares
Se implementó un formulario para agregar nuevas tarjetas dinámicamente.

Creación de cards a partir de un <template>
Inserción dinámica al inicio de la lista
Guardado en el servidor mediante POST
Validación activa antes de permitir guardar
Limpieza automática del formulario al cerrar
Indicador de carga "Guardando..." mientras se procesa

❤️ Botón de "Me gusta"
Cada tarjeta incluye un botón interactivo de like sincronizado con el servidor.

Alterna entre estado activo e inactivo
Cambia dinámicamente el ícono del corazón
Like guardado en el servidor mediante PUT
Dislike guardado en el servidor mediante DELETE
Funciona de manera independiente en cada tarjeta

🗑️ Eliminación de tarjetas
Cada tarjeta incluye un botón para eliminarla con confirmación previa.

Popup de confirmación "¿Estás seguro?" antes de eliminar
Eliminación en el servidor mediante DELETE
Eliminación del elemento del DOM solo si el servidor confirma
Manejo independiente por instancia de tarjeta

🖼️ Vista ampliada de imágenes
Al hacer clic en una imagen:

Se abre un popup con la imagen ampliada
Se muestra el título como descripción
Se puede cerrar mediante botón, overlay o tecla ESC

🌐 Conexión con la API
La aplicación se conecta al servidor mediante la clase Api:

Base URL: https://around-api.es.tripleten-services.com/v1
Autenticación: Token personal en el header authorization
Carga inicial: Promise.all() para cargar usuario y tarjetas en paralelo
Manejo de errores: .catch() en todas las solicitudes

Endpoints utilizados
MétodoEndpointDescripciónGET/users/meObtener información del usuarioPATCH/users/meActualizar perfilPATCH/users/me/avatarActualizar foto de perfilGET/cardsObtener tarjetas inicialesPOST/cardsAgregar nueva tarjetaDELETE/cards/:idEliminar tarjetaPUT/cards/:id/likesDar likeDELETE/cards/:id/likesQuitar like

🧠 Arquitectura Orientada a Objetos
📦 Clase Api (nueva)
Responsable de:

Centralizar todas las solicitudes al servidor
Manejar headers de autorización en cada solicitud
Retornar Promises para cada operación
Rechazar Promises con Promise.reject() si el servidor devuelve error

📦 Clase Card
Responsable de:

Generar la estructura de una tarjeta desde un template
Asignar datos dinámicamente (imagen, título e \_id)
Manejar eventos internos (like, delete, click en imagen)
Sincronizar likes con el servidor
Ejecutar callbacks para eliminar y abrir popup de imagen

📦 Clase Section
Responsable de:

Recibir datos dinámicos del servidor mediante renderItems(items)
Insertar elementos individuales en el contenedor con addItem()

📦 Clase Popup
Responsable de:

Abrir y cerrar cualquier popup
Manejar el cierre con tecla Escape
Manejar el cierre al hacer clic en el overlay
Configurar los event listeners base

📦 Clase PopupWithForm (actualizada)
Responsable de:

Manejar el submit de formularios mediante un callback
Recopilar los valores de todos los inputs
Resetear el formulario automáticamente al cerrar
Cambiar el texto del botón con editButton(text) para indicar carga

📦 Clase PopupWithConfirmation (nueva)
Responsable de:

Mostrar un popup de confirmación antes de eliminar una tarjeta
Ejecutar el callback de confirmación al hacer clic en "Sí"
Extender la clase Popup con herencia

📦 Clase PopupWithImage (extiende Popup)
Responsable de:

Mostrar una imagen ampliada con su leyenda en el popup

📦 Clase UserInfo
Responsable de:

Leer los datos actuales del perfil con getUserInfo()
Actualizar el nombre y trabajo en pantalla con setUserInfo()

📦 Clase FormValidator
Responsable de:

Validar campos en tiempo real
Mostrar y ocultar mensajes de error
Activar y desactivar el botón submit
Resetear el estado del formulario

❌ Cierre inteligente de popups
Todos los popups pueden cerrarse mediante:

Botón "X"
Click en el área de overlay
Tecla ESC

🎨 Mejoras UI/UX

Indicador "Guardando..." en todos los formularios mientras se procesa la solicitud
Ícono de edición visible al hacer hover sobre la foto de perfil
Popup de confirmación antes de eliminar tarjetas
Foto de perfil actualizable desde un enlace

🧩 Cambios técnicos clave (Proyecto 12)

✔️ Creación de la clase Api para centralizar solicitudes al servidor
✔️ Conexión de perfil, tarjetas y likes con el servidor
✔️ Uso de Promise.all() para carga inicial en paralelo
✔️ Creación de PopupWithConfirmation para confirmar eliminación
✔️ Método editButton() en PopupWithForm para indicar carga
✔️ Actualización de foto de perfil con hover y popup
✔️ Manejo de errores con .catch() en todas las solicitudes
✔️ Cierre de popups al hacer clic en el overlay

📁 Estructura del Proyecto
/web_project_around/
├── .editorconfig
├── .gitignore
├── .prettierignore
├── favicon.ico
├── README.md
└── src/
├── index.html
├── blocks/
│ ├── cover.css
│ ├── elements.css
│ ├── footer.css
│ ├── form.css
│ ├── header.css
│ ├── media.css
│ ├── page.css
│ └── popupimage.css
├── components/
│ ├── Api.js
│ ├── Card.js
│ ├── FormValidator.js
│ ├── Popup.js
│ ├── PopupWithConfirmation.js
│ ├── PopupWithForms.js
│ ├── PopUpWithImage.js
│ ├── Section.js
│ ├── UserInfo.js
│ ├── utils.js
│ └── validate.js
├── images/
│ └── (todas las imágenes)
├── page/
│ ├── index.css
│ └── index.js
└── vendor/
├── fonts.css
├── normalize.css
└── fonts/
├── Inter-Black.woff2
├── Inter-Regular.woff2
├── Inter-SemiBold.woff2
└── inter.css
🛠️ Tecnologías utilizadas
HTML5

Estructura semántica
Formularios accesibles
Uso de <template>

CSS3

Metodología BEM
Responsive design
Grid & Flexbox
Estados visuales (hover, focus, error, disabled)
Efectos de hover en foto de perfil

JavaScript (Vanilla ES6 Modules)

Programación Orientada a Objetos
Herencia de clases (extends, super)
Fetch API y Promises
Métodos HTTP: GET, POST, PATCH, PUT, DELETE
Promise.all() para solicitudes en paralelo
Manipulación del DOM
Modularización
Callbacks y acoplamiento débil
Encapsulamiento
Validación dinámica
