Tripleten web_project_around

Around the U.S

Autor: Marcos Santiz
Enlace: [https://mbsantiz.github.io/web_project_around/](https://mbsantiz.github.io/web_project_around/)

Proyecto 9 del BootCamp Software Developer

---

📝 Descripción del Proyecto

Este proyecto es una aplicación web interactiva que simula una red de tarjetas de destinos turísticos con edición de perfil, validación de formularios y múltiples ventanas emergentes (popups).

La aplicación permite al usuario interactuar con tarjetas, editar su perfil y agregar nuevos lugares utilizando formularios con validación en tiempo real.

---

✨ Características principales

👤 Edición de perfil

Los usuarios pueden modificar su nombre y descripción mediante un popup editable.

Funciones:

- Apertura y cierre de popup
- Validación de campos en tiempo real
- Actualización inmediata del perfil en pantalla
- Botón guardar activo solo cuando el formulario es válido

---

➕ Agregar nuevos lugares

Se implementó un formulario para agregar nuevas tarjetas.

Características:

- Crear nuevas cards dinámicamente
- Mostrar imagen y título
- Reset automático del formulario al abrir
- Validación activa antes de permitir guardar

---

❤️ Botón de “Me gusta”

Cada tarjeta incluye un botón de like interactivo.

Funciones:

- Alterna entre like y unlike
- Cambia visualmente el ícono del corazón
- Funciona de forma independiente por tarjeta

---

🗑️ Eliminación de tarjetas

Cada card incluye botón de eliminar.

Características:

- Ubicado en la esquina superior derecha
- Posicionado con `position: absolute`
- Elimina la tarjeta directamente del DOM

---

🖼️ Vista ampliada de imágenes

Al hacer clic en cualquier imagen:

- Se abre popup con imagen ampliada
- Se muestra título como descripción
- Popup se puede cerrar de múltiples formas

---

🧠 Validación de formularios

Se implementó sistema de validación modular en `validate.js`.

Incluye:

- Validación en tiempo real
- Mensajes de error dinámicos
- Desactivación automática del botón guardar
- Estilos visuales de error
- Botón inactivo si el formulario es inválido

---

🔄 Reset de validación al abrir popup

Cada vez que se abre un popup:

- Se limpian errores anteriores
- Se reinicia estado del botón guardar
- Inputs vuelven a estado inicial

Esto mejora la experiencia del usuario y evita errores persistentes.

---

❌ Cierre inteligente de popups

Todos los popups se pueden cerrar con:

- Botón "X"
- Click fuera del formulario (overlay)
- Tecla **ESC**

Funciona para:

- Edit profile
- New place
- Image preview

---

🎨 Mejoras visuales UI/UX

Se agregaron mejoras de diseño:

- Inputs con padding superior e inferior
- Línea decorativa debajo de inputs
- Color azul al hacer focus en inputs
- Mensajes de error sin mover el botón guardar
- Mejor alineación visual de formularios

---

🧩 Cambios técnicos clave implementados

✔️ Sistema modular de validación

Archivo:

```
validate.js
```

Funciones:

- enableValidation()
- resetValidation()
- showInputError()
- hideInputError()
- toggleButtonState()

Permite reutilizar validación en cualquier formulario.

---

✔️ Manejo global de popups

Funciones reutilizables:

```
openPopup()
closePopup()
```

Eventos globales:

- Escape para cerrar popup activo
- Click overlay para cerrar
- Reset de validación al abrir

---

✔️ Creación dinámica de tarjetas

Las tarjetas se generan con JavaScript.

Funciones:

- createCard()
- Inserción dinámica en el DOM
- Listeners independientes por tarjeta

---

✔️ Justificación de position: relative

El contenedor:

```
.elements__image-container
```

usa:

```
position: relative
```

Permite posicionar:

- Botón eliminar (absolute)
- Botón like
- Elementos overlay dentro de la card

---

📁 Estructura del Proyecto

```
/around-the-us/
├── /images/              # Imágenes e íconos
├── /pages/
│   └── index.css         # Estilos principales
├── /scripts/
│   ├── index.js          # Lógica principal
│   └── validate.js       # Validación modular
├── index.html
├── favicon.ico
└── README.md
```

---

🛠️ Tecnologías utilizadas

HTML5

- Estructura semántica
- Formularios accesibles

CSS3

- Metodología BEM
- Responsive design
- Flexbox & Grid
- Estados visuales (hover, focus, error)

JavaScript (Vanilla)

- Manipulación del DOM
- Event listeners
- Creación dinámica de elementos
- Validación modular
- Manejo de popups
- UX interactiva
