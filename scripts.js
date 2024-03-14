//alert("Hola este es mi javascript, bienvenidos a mi pagina web");
//console.log("Hola Mundo");

function mostrarMensaje(seccion) {
    alert('Has hecho clic en ' + seccion);
}

document.addEventListener('DOMContentLoaded', function() {
    const enlacesNavegacion = document.querySelectorAll('header nav ul li a');

    enlacesNavegacion.forEach(function(enlace) {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();
            mostrarMensaje(enlace.textContent);
        });
    });
});
