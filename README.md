# Tripleten — web_project_around

## Around the U.S

**Autor:** Marcos Santiz  
**Enlace:** https://mbsantiz.github.io/web_project_around/

Proyecto 11 del Bootcamp Software Developer

---

## 📝 Descripción del Proyecto

Este proyecto es una aplicación web interactiva que simula una red de tarjetas de destinos turísticos con edición de perfil, validación de formularios y múltiples ventanas emergentes (popups).

En esta versión (Proyecto 11) se realizó una segunda refactorización del código JavaScript, profundizando en la Programación Orientada a Objetos mediante la creación de nuevas clases especializadas y el uso de herencia, acoplamiento débil y separación de responsabilidades.

La aplicación permite:

- Editar información del perfil.
- Agregar nuevas tarjetas dinámicamente.
- Dar "like" a tarjetas.
- Eliminar tarjetas.
- Visualizar imágenes ampliadas.
- Validar formularios en tiempo real.

---

## ✨ Características principales

### 👤 Edición de perfil

Los usuarios pueden modificar su nombre y descripción mediante un popup editable.

- Apertura y cierre de popup
- Validación en tiempo real
- Actualización inmediata del contenido del perfil
- Botón guardar activo únicamente cuando el formulario es válido
- Reset automático del estado de validación al abrir el popup
- Pre-llenado del formulario con los datos actuales del perfil

### ➕ Agregar nuevos lugares

Se implementó un formulario para agregar nuevas tarjetas dinámicamente.

- Creación de cards a partir de un `<template>`
- Inserción dinámica al inicio de la lista
- Validación activa antes de permitir guardar
- Limpieza automática del formulario al cerrar

### ❤️ Botón de "Me gusta"

Cada tarjeta incluye un botón interactivo de like.

- Alterna entre estado activo e inactivo
- Cambia dinámicamente el ícono del corazón
- Funciona de manera independiente en cada tarjeta

### 🗑️ Eliminación de tarjetas

Cada tarjeta incluye un botón para eliminarla.

- Posicionado con `position: absolute`
- Eliminación directa del elemento del DOM
- Manejo independiente por instancia de tarjeta

### 🖼️ Vista ampliada de imágenes

Al hacer clic en una imagen:

- Se abre un popup con la imagen ampliada
- Se muestra el título como descripción
- Se puede cerrar mediante botón, overlay o tecla ESC

---

## 🧠 Arquitectura Orientada a Objetos

En este proyecto se amplió la arquitectura de clases añadiendo nuevas clases especializadas con herencia y acoplamiento débil.

### 📦 Clase Card

Responsable de:

- Generar la estructura de una tarjeta desde un template
- Asignar datos dinámicamente (imagen y título)
- Manejar eventos internos (like, delete, click en imagen)
- Ejecutar un callback para abrir el popup de imagen

### 📦 Clase Section

Responsable de:

- Recibir un array de datos y una función `renderer`
- Renderizar todos los elementos iniciales en la página con `renderItems()`
- Insertar elementos individuales en el contenedor con `addItem()`
- No contiene marcado propio — recibe los elementos ya construidos

### 📦 Clase Popup

Responsable de:

- Abrir y cerrar cualquier popup mediante `open()` y `close()`
- Manejar el cierre con la tecla Escape mediante `_handleEscClose()`
- Configurar los event listeners base con `setEventListeners()`

Principios aplicados:

- Clase base reutilizable mediante herencia
- Encapsulamiento de lógica de apertura/cierre

### 📦 Clase PopupWithImage _(extiende Popup)_

Responsable de:

- Mostrar una imagen ampliada con su leyenda en el popup
- Sobreescribir `open(link, name)` para asignar imagen y caption antes de abrir

### 📦 Clase PopupWithForm _(extiende Popup)_

Responsable de:

- Manejar el submit de formularios mediante un callback
- Recopilar los valores de todos los inputs con `_getInputValues()`
- Resetear el formulario automáticamente al cerrar el popup
- Sobreescribir `setEventListeners()` para agregar el listener de submit
- Sobreescribir `close()` para limpiar el formulario

### 📦 Clase UserInfo

Responsable de:

- Almacenar referencias a los elementos del perfil en el DOM
- Leer los datos actuales del perfil con `getUserInfo()`
- Actualizar el nombre y trabajo en pantalla con `setUserInfo()`

### 📦 Clase FormValidator

Responsable de:

- Validar campos en tiempo real
- Mostrar y ocultar mensajes de error
- Activar y desactivar el botón submit
- Resetear el estado del formulario

---

## 🔄 Sistema de Validación

La validación está implementada como clase modular con instancias independientes por formulario:

- Validación en tiempo real usando la API nativa de HTML5
- Mensajes de error dinámicos
- Desactivación automática del botón si hay campos inválidos
- Reset de validación al reabrir el popup

---

## ❌ Cierre inteligente de popups

Todos los popups pueden cerrarse mediante:

- Botón "X"
- Click en el área de overlay
- Tecla ESC

El manejo está encapsulado en la clase `Popup` y heredado por todas las clases hijas.

---

## 🎨 Mejoras UI/UX

- Uso de metodología BEM
- Inputs con estados visuales claros
- Estilos de error sin afectar el layout
- Botones desactivados visualmente cuando el formulario es inválido
- Responsive design con Grid y Flexbox

---

## 🧩 Cambios técnicos clave (Proyecto 11)

- ✔️ Creación de la clase `Section` para renderizar listas de elementos
- ✔️ Creación de la clase base `Popup` con lógica de apertura/cierre
- ✔️ Creación de `PopupWithImage` como clase hija de `Popup`
- ✔️ Creación de `PopupWithForm` como clase hija de `Popup`
- ✔️ Creación de la clase `UserInfo` para manejo del perfil
- ✔️ Uso de herencia con `extends` y `super`
- ✔️ Acoplamiento débil entre clases mediante callbacks
- ✔️ `index.js` reducido a solo instancias y event listeners
- ✔️ Eliminación de funciones globales y lógica dispersa

---

## 📁 Estructura del Proyecto

```
/web_project_around/
├── /images/
├── /pages/
│   └── index.css
├── /scripts/
│   ├── Card.js
│   ├── FormValidator.js
│   ├── Section.js
│   ├── Popup.js
│   ├── PopupWithImage.js
│   ├── PopupWithForm.js
│   ├── UserInfo.js
│   ├── utils.js
│   └── index.js
├── index.html
├── favicon.ico
└── README.md
```

---

## 🛠️ Tecnologías utilizadas

**HTML5**

- Estructura semántica
- Formularios accesibles
- Uso de `<template>`

**CSS3**

- Metodología BEM
- Responsive design
- Grid & Flexbox
- Estados visuales (hover, focus, error, disabled)

**JavaScript (Vanilla ES6 Modules)**

- Programación Orientada a Objetos
- Herencia de clases (`extends`, `super`)
- Manipulación del DOM
- Event listeners
- Modularización
- Callbacks y acoplamiento débil
- Encapsulamiento
- Validación dinámica
