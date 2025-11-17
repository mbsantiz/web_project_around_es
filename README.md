Tripleten web_project_around
Around the U.S

Autor: Marcos Santiz
Enlace: https://mbsantiz.github.io/web_project_around/

Proyecto 8 del BootCamp Software Developer

📝 Descripción del Proyecto

Este proyecto es una aplicación web estática que presenta una página con tarjetas de destinos, un perfil editable y elementos interactivos como botones de "Me gusta" y eliminación de tarjetas.

Los usuarios pueden:

Editar su información personal.

Indicar que les gusta un destino.

Eliminar tarjetas.

Expandir imágenes en un popup.

✨ Características principales
👤 Edición de perfil

Los usuarios pueden modificar su nombre y su descripción mediante un popup.

❤️ Botones de “Me gusta”

Cada tarjeta cuenta con un botón interactivo que alterna entre los estados "like" y "unlike".

🗑️ Botón de eliminar tarjetas

Se agregó un botón de basurero en la parte superior derecha de cada tarjeta.
Características:

Ícono ubicado 18 px desde la parte superior y 15 px desde la derecha.

Posicionado correctamente gracias a position: relative en el contenedor.

El botón elimina la tarjeta del DOM.

🖼️ Vista ampliada de la imagen

Al hacer clic en una imagen, se abre un popup mostrando la imagen ampliada. Se corrigió el cierre del modal, que antes no respondía.

💅 Estilos visuales modernos

Se utilizaron imágenes de alta calidad, estilos responsivos y una organización clara de bloques BEM.

🧩 Cambios técnicos clave implementados
✔️ Corrección del popup que no cerraba

Se ajustó la lógica del evento click verificando:

Click en botón close

Click en overlay

Prevención de burbujeo desde el contenido interno

✔️ Implementación del botón de eliminar

Se agregó:

Contenedor .elements\_\_delete-button

Imagen del ícono dentro del botón

Posicionamiento absoluto sobre la imagen

Evento JS para eliminar el elemento padre

✔️ Justificación de position: relative

El contenedor .elements\_\_image-container utiliza position: relative para permitir que:

El botón de eliminar (position: absolute)

El ícono de corazón

Se posicionen dentro del contenedor sin salirse del card.

✔️ Optimización de la clase
.elements\_\_delete-button img {
width: 100%;
height: 100%;
pointer-events: none;
}

Explicación:

El ícono escala exactamente al tamaño del botón.

pointer-events: none asegura que el click llegue al botón y no a la imagen.

📁 Estructura del Proyecto
/around-the-us/
├── /images/ # Imágenes, íconos y recursos gráficos
│ ├── close.svg
│ ├── heart.svg
│ ├── hearthfilled.png
│ └── delete-icon.png
├── /pages/
│ └── index.css # Estilos principales
├── /script/
│ └── script.js # Lógica JS
├── favicon.ico
├── index.html
└── README.md

🛠️ Tecnologías Utilizadas

HTML5 – estructura semántica del sitio

CSS3 – diseño visual, BEM y responsive

JavaScript – manejo de:

popups

edición de perfil

likes

eliminación de tarjetas

interacción con DOM
