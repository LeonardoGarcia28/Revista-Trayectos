function primeraEstrella() {
    const primeraEstrellaCalificacion = document.getElementById('primeraEstrellaCalificacion');
    const segundaEstrellaCalificacion = document.getElementById('segundaEstrellaCalificacion');
    const terceraEstrellaCalificacion = document.getElementById('terceraEstrellaCalificacion');
    const cuartaEstrellaCalificacion = document.getElementById('cuartaEstrellaCalificacion');
    const quintaEstrellaCalificacion = document.getElementById('quintaEstrellaCalificacion');

    primeraEstrellaCalificacion.style.color = "gold";
    segundaEstrellaCalificacion.style.color = "lightgray";
    terceraEstrellaCalificacion.style.color = "lightgray";
    cuartaEstrellaCalificacion.style.color = "lightgray";
    quintaEstrellaCalificacion.style.color = "lightgray";
}

function segundaEstrella() {
    const primeraEstrellaCalificacion = document.getElementById('primeraEstrellaCalificacion');
    const segundaEstrellaCalificacion = document.getElementById('segundaEstrellaCalificacion');
    const terceraEstrellaCalificacion = document.getElementById('terceraEstrellaCalificacion');
    const cuartaEstrellaCalificacion = document.getElementById('cuartaEstrellaCalificacion');
    const quintaEstrellaCalificacion = document.getElementById('quintaEstrellaCalificacion');

    primeraEstrellaCalificacion.style.color = "gold";
    segundaEstrellaCalificacion.style.color = "gold";
    terceraEstrellaCalificacion.style.color = "lightgray";
    cuartaEstrellaCalificacion.style.color = "lightgray";
    quintaEstrellaCalificacion.style.color = "lightgray";
}

function terceraEstrella() {
    const primeraEstrellaCalificacion = document.getElementById('primeraEstrellaCalificacion');
    const segundaEstrellaCalificacion = document.getElementById('segundaEstrellaCalificacion');
    const terceraEstrellaCalificacion = document.getElementById('terceraEstrellaCalificacion');
    const cuartaEstrellaCalificacion = document.getElementById('cuartaEstrellaCalificacion');
    const quintaEstrellaCalificacion = document.getElementById('quintaEstrellaCalificacion');

    primeraEstrellaCalificacion.style.color = "gold";
    segundaEstrellaCalificacion.style.color = "gold";
    terceraEstrellaCalificacion.style.color = "gold";
    cuartaEstrellaCalificacion.style.color = "lightgray";
    quintaEstrellaCalificacion.style.color = "lightgray";
}

function cuartaEstrella() {
    const primeraEstrellaCalificacion = document.getElementById('primeraEstrellaCalificacion');
    const segundaEstrellaCalificacion = document.getElementById('segundaEstrellaCalificacion');
    const terceraEstrellaCalificacion = document.getElementById('terceraEstrellaCalificacion');
    const cuartaEstrellaCalificacion = document.getElementById('cuartaEstrellaCalificacion');
    const quintaEstrellaCalificacion = document.getElementById('quintaEstrellaCalificacion');

    primeraEstrellaCalificacion.style.color = "gold";
    segundaEstrellaCalificacion.style.color = "gold";
    terceraEstrellaCalificacion.style.color = "gold";
    cuartaEstrellaCalificacion.style.color = "gold";
    quintaEstrellaCalificacion.style.color = "lightgray";
}

function quintaEstrella() {
    const primeraEstrellaCalificacion = document.getElementById('primeraEstrellaCalificacion');
    const segundaEstrellaCalificacion = document.getElementById('segundaEstrellaCalificacion');
    const terceraEstrellaCalificacion = document.getElementById('terceraEstrellaCalificacion');
    const cuartaEstrellaCalificacion = document.getElementById('cuartaEstrellaCalificacion');
    const quintaEstrellaCalificacion = document.getElementById('quintaEstrellaCalificacion');

    primeraEstrellaCalificacion.style.color = "gold";
    segundaEstrellaCalificacion.style.color = "gold";
    terceraEstrellaCalificacion.style.color = "gold";
    cuartaEstrellaCalificacion.style.color = "gold";
    quintaEstrellaCalificacion.style.color = "gold";
}

document.getElementById('primeraEstrellaCalificacion').addEventListener('click', primeraEstrella);
document.getElementById('segundaEstrellaCalificacion').addEventListener('click', segundaEstrella);
document.getElementById('terceraEstrellaCalificacion').addEventListener('click', terceraEstrella);
document.getElementById('cuartaEstrellaCalificacion').addEventListener('click', cuartaEstrella);
document.getElementById('quintaEstrellaCalificacion').addEventListener('click', quintaEstrella);

function limpiarCalificacion() {
    const primeraEstrellaCalificacion = document.getElementById('primeraEstrellaCalificacion');
    const segundaEstrellaCalificacion = document.getElementById('segundaEstrellaCalificacion');
    const terceraEstrellaCalificacion = document.getElementById('terceraEstrellaCalificacion');
    const cuartaEstrellaCalificacion = document.getElementById('cuartaEstrellaCalificacion');
    const quintaEstrellaCalificacion = document.getElementById('quintaEstrellaCalificacion');

    primeraEstrellaCalificacion.style.color = "lightgray";
    segundaEstrellaCalificacion.style.color = "lightgray";
    terceraEstrellaCalificacion.style.color = "lightgray";
    cuartaEstrellaCalificacion.style.color = "lightgray";
    quintaEstrellaCalificacion.style.color = "lightgray";
}

document.getElementById('limpiarCalificacion').addEventListener('click', limpiarCalificacion);

function limpiarTextArea() {
    
}

function contadorValidaciones() {
    const inputCodigoProducto = document.getElementById('codigoProducto');
    const inputNombreProducto = document.getElementById('nombreProducto');
    const inputDescripcionProducto = document.getElementById('descripcionProducto');

    let contadorValida = 0;

    if (inputCodigoProducto.value.length >= 5 && inputCodigoProducto.value.length <= 10) {
        contadorValida += 1;
    }

    if (inputNombreProducto.value.length >= 5 && inputNombreProducto.value.length <= 50) {
        contadorValida += 1;
    }

    if (inputDescripcionProducto.value.length >= 25 && inputDescripcionProducto.value.length <= 1000) {
        contadorValida += 1;   
    }

    const progresoPrimero = document.getElementById('primer-progreso');
    const progresoSegundo = document.getElementById('segundo-progreso');
    const progresoTercer = document.getElementById('tercer-progreso');

    progresoPrimero.style.display = contadorValida >= 1 ? "block" : "none";
    progresoPrimero.style.backgroundColor = contadorValida >= 1 ? "green" : "transparent";
    progresoSegundo.style.display = contadorValida >= 2 ? "block" : "none";
    progresoSegundo.style.backgroundColor = contadorValida >= 1 ? "green" : "transparent";
    progresoTercer.style.display = contadorValida >= 3 ? "block" : "none";
    progresoTercer.style.backgroundColor = contadorValida >= 1 ? "green" : "transparent";
}

document.getElementById('codigoProducto').addEventListener('input', contadorValidaciones);
document.getElementById('nombreProducto').addEventListener('input', contadorValidaciones);
document.getElementById('descripcionProducto').addEventListener('input', contadorValidaciones);

contadorValidaciones();