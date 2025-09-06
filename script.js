/* Seleciona todos los elementos con el atributo href=# y para cada uno le agrega un evento: escucha por clics */
document.querySelectorAll('a[href^="#"]').forEach(ira => {

    ira.addEventListener('click', function (e) {

        /* e.preventDefault : previene el salto brusco a las secciones */
        e.preventDefault();

        /* tieneHash: busca los elementos que tiene href como atributo. */
        const tieneHash = this.getAttribute('href');

        /* evaluamos si el href esta vacio O si solamente tiene el # y no un ID valido */
        if(!tieneHash || tieneHash === '#') return;

        const destino = document.querySelector(tieneHash);

        if (destino) {
            /* si el destino tiene un ID valido le agrega el efecto smooth al hacer clic */
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* Menu de hamburguesa */
const mostrar = document.getElementById('nav-hamburguesa');
const mostrarNav = document.getElementById('nav-hamburguesa-mostrar');
let hasMostrar = false;

const navHamburguesaToggle = document.getElementById('nav-hamburguesa-toggle');

/* Agregamos o quitamos la clase .mostrar al elemento que contiene nuestro menu de navegacion */
mostrar.addEventListener('click', (e) => {
    e.stopPropagation();
    mostrarNav.classList.toggle('mostrar');

    mostrar.classList.toggle('rotar-menu');

    if(mostrarNav.classList.contains('mostrar')) {
        navHamburguesaToggle.style.visibility = 'hidden';
    } else {
        navHamburguesaToggle.style.visibility = 'visible';
    }
    
});

/* Al hacer scroll esconderemos el menu quitando las clases .mostrar, .rotar-menu */
window.addEventListener('scroll', () =>{
    if (!hasMostrar){
        hasMostrar = true;

        if (mostrarNav.classList.contains('mostrar')) {
            mostrarNav.classList.remove('mostrar');
            mostrar.classList.remove('rotar-menu');
            navHamburguesaToggle.style.visibility = 'visible';
        }
        
        hasMostrar = false;
    }
    
})

/* si al agrandar la pantalla alcanza los 768px removemos las clases .mostrar, .rotar-menu para permitir la visibilidad del menu completo */
window.addEventListener('resize', () =>{
    if(window.innerWidth >= 768) {
        mostrarNav.classList.remove('mostrar');
        mostrar.classList.remove('rotar-menu');
        navHamburguesaToggle.style.visibility = 'visible';
    }
})

/* Si se hace click fuera del menu y del boton las clases .mostrar, .rotar-menu se quitarán */
document.addEventListener('click', () => {
    if (mostrarNav.classList.contains('mostrar')) {
        mostrarNav.classList.remove('mostrar');
        mostrar.classList.remove('rotar-menu');
        navHamburguesaToggle.style.visibility = 'visible';
    }
})

/* crear funcion para lo repetitivo */

/* transform en Y, y opacity y quitar el transform en otros dispositivos */