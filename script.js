/* Seleciona todos los elementos con el atributo href=# y para cada uno le agrega un evento: escucha por clics */
document.querySelectorAll('a[href^="#"').forEach(ira => {

    ira.addEventListener('click', function (e) {

        /* e.preventDefault : previene el salto brusco a las secciones */
        e.preventDefault();

        /* destino : busca los ids que coinciden con los elementos destino y obtiene ese id. */
        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            /* si el destino esta le agrega el efecto smooth al hacer clic */
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});