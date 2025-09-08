# ZAPATOS - "SUEÑA EN GRANDE Y LLEGA LEJOS"

## Temática: Ecommerce de moda
El propósito de la página es el de hacer ahorrar dinero al usuario mientras adquiere un producto de calidad.

EL público objetivo de esta página web es todo público con tendencia a compras rápidas en línea que gustan del calzado de moda y buscan comprar con confianza. Ya sean jóvenes o adultos mayores porque ésta página esta pensada para ser de uso simple, óptima y moderna.

El público tiene características como la adquisición de productos premium a un precio razonable sin dejar de lado el toque moderno y elegante.

### Los colores utilizados como:

- #222222 Negro suave: transmite elegancia y minimalismo.
- #555555 Gris oscuro: transmite limpieza y profesionalismo.
- #0f75e2 Azul medio oscuro: Confianza, seguridad y fiabilidad.
- #007BFF Azul vibrante:Confianza, seguridad y frescura.
- #F9F9F9 Gris blanco: Limpieza, simplicidad y neutralidad.
- #E0E0E0 Gris claro medio: Neutralidad y orden.
- #C4C4C4 Gris claro medio: Neutro y discreto.

Transmiten el lenguaje premium y elegante que se quiere hacer llegar al usuario, haciendolo sentir seguro, moderno y que esta adquiriendo un estatus alto.

### Tipografia:
#### Google Fonts
Título - Poppins: Aporta profesionalismo, claridad y elegancia en su modernidad geométrica la cual llama la atención juvenil, aporta accesibilidad visual.

Texto y Texto secundario - Inter: Es muy legible y funcional no destaca pero si facilita la lectura para aportar al minimalismo que se quiere transmitir.

### Estrategia UX implementada:
El primer vistazo que da el usuario a la página es al encabezado o al hero section, por lo que con una frase llamativa como "Donde sueñes llegar, tus pasos sabran como hacerlo." y acompañándola con mensajes breves capta la atención inmediata del usuario, y al combinarlas con los CTAs sobresalientes le damos la ayuda que el usuario necesita para tomar acción.
**El usuario necesita navegar de forma dinámica y rápida por lo que los colores de los CTAs son visibles y transmiten confianza con contrastes aceptables.**
La navegación sencilla y dinámica hacen que el uso del sitio web sea amigable y rápida. Para que el usuario no pierda el tiempo con demasiadas opciones de las cuales elegir le damos unas cuántos productos visibles con un enlace para ver mas categorías o más productos relacionados.

### Implementación del Formulario de Contacto:
El servicio del Formulario utilizado fue uno que ha sido recomendado llamado **Getform.io**.
Para configurar éste servicio es necesario crear una cuenta en https://getform.io/. Después de crear la cuenta se crea una form con un nombre a elegir. 
GetForm.io nos crea un enlace a nuestra cuenta "https://getform.io/f/bolodqra".
Se agrega el enlace en nuestra form dentro de la etiqueta con el atributo "action" en HTML de esta forma: **`<form action="https://getform.io/f/bolodqra" method="POST">`**.
Y con ésto ya podemos recibir los emails en nuestra cuenta de Getform.io.

### Proceso de Diseño:
1. Primero: fue el pensar en las secciones cada una por separado, con sus distintos elementos ubicados de manera estratégica y visual.

2. Segundo: diseñar las secciones como un boceto a papel para visualizar el resultado final, hubieron varios bocetos para cada sección y al final se utilizaron partes de cada boceto.

3. Tercero: ver en línea las diferentes plataformas que son retail para asi entender el posicionamiento de elementos clave en la página web como lo son los CTAs.

4. Cuarto: entender el significado de los colores utilizados para proyectar la imagen de marca, junto a ésto **se investigó sobre la accesibilidad (A11y)**, sobre el diseño UX/UI: como no saturar con mucha información al usuario y que tome una decisión rápida basada en la información que queremos que vea, y cómo las tipografías también aportan a la imagen de marca. Se investigó sobre cómo agregar imágenes con CDNs en tiempo real según el tipo de dispositivo del cual se accede a la página cargando así las imágenes más optimizadas para dicho dispositivo.

5. Quinto: el inicio de la estructura HTML utilizando las etiquetas correspondientes para cada elemento llevando así un proceso semántico. Después se fue creando el CSS para darle diseño a cada elemento de la página web, tomando en cuenta el diseño MOBILE FIRST para después ir diseñando el comportamiento de varios de los elementos de las diferentes secciones para pantallas mas grandes. También se agrego un poco de código javascript para el comportamiento smooth al hacer scroll.

6. Sexto: por último se realizaron pruebas con el navegador de google para chequear el contraste presionando las teclas CTRL + SHIFT + C para activar el CONTRAST CHECKER y verificar que se cumplan los estándares de contraste mínimo según (A11y) para una buena práctica de accesibilidad.
Se utilizó https://validator.w3.org para validar el archivo HTML y verificar el buen uso de las etiquetas para cada caso y garantizar accesibilidad y semántica.
Se utilizó https://jigsaw.w3.org/css-validator/ para validar el archivo CSS y garantizar la interoperabilidad (interoperabilidad web se refiere a la capacidad de las páginas web de funcionar correctamente en diferentes navegadores, sistemas operativos y dispositivos, siguiendo los estándares web).

7. Séptimo: se agrega el archivo css de diseño para dispositivos mas grandes, pequeñas modificaciones a la estructura general del HTML/CSS y se agrega el archivo README.md.

### Desafíos y Soluciones:
Un desafío encontrado en este proyecto fue hacer que el header se quede visible al hacer scroll en dispositivos como tablet y pc. Pero la solución fue que al llegar a cierto tamaño de pantalla el header debia tener una **position=fixed con un z-index=100** para asegurar que el header este por encima de todos los demas elementos y el contenido debia estar a cierta distancia del header para que sea visible en todo momento después de haber hecho click en los enlaces de su sección correspondiente.

Cargar imágenes através de un cdn para mostrar las imágenes adecuadas para cada tamaño de dispositivo. La solución fue agregar un ancho máximo a las imágenes.

Mostrar la imagen del hero section como una prioridad de carga para no tener retrasos y mejorar el rendimiento de carga de la imagen.

La solución fue agregar al header `<link rel="preload" as="image">` junto con el enlace al cdn utilizado y agregar en la etiqueta img `<fetchpriority="high">` como atributo para decirle al navegador que tiene que cargar la imagen con alta prioridad.