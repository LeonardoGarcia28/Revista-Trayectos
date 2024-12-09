/** Side Bar */

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        sidebar.classList.remove('open');
    }
});

/** Notificaciones */

const notificationIcon = document.getElementById('iconoCampanaHeader');
const notificacionIconArrow = document.getElementById('flechaDesplegableNotificaciones');
const notificationSidebar = document.getElementById('notificacionesSidebar');
const notificationClose = document.getElementById('notificacionClose');
const overlayNotificacion = document.getElementById('overlayNotificacion');

notificationIcon.addEventListener('click', () => {
    notificationSidebar.classList.toggle('open');
    overlayNotificacion.classList.toggle('open');
});
notificacionIconArrow.addEventListener('click', () => {
    notificationSidebar.classList.toggle('open');
    overlayNotificacion.classList.toggle('open');
});
notificationClose.addEventListener('click', () => {
    notificationSidebar.classList.remove('open');
    overlayNotificacion.classList.remove('open');
});
overlayNotificacion.addEventListener('click', () => {
    notificationSidebar.classList.remove('open');
    overlayNotificacion.classList.remove('open');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        notificationSidebar.classList.remove('open');
        overlayNotificacion.classList.remove('open');
    }
});

/** Informacion de usuario */

const userIcon = document.getElementById('iconoUsuarioHeader');
const userIconArrow = document.getElementById('flechaDesplegableUsuario');
const userInfoSidebar = document.getElementById('usuarioInformacionSidebar');
const userInfoClose = document.getElementById('cerrarInformacionUsuario');
const overlayUsuario = document.getElementById('overlayUsuario');

userIcon.addEventListener('click', () => {
    userInfoSidebar.classList.toggle('open');
    overlayUsuario.classList.toggle('open');
});
userIconArrow.addEventListener('click', () => {
    userInfoSidebar.classList.toggle('open');
    overlayUsuario.classList.toggle('open');
});
userInfoClose.addEventListener('click', () => {
    userInfoSidebar.classList.remove('open');
    overlayUsuario.classList.remove('open');
});
overlayUsuario.addEventListener('click', () => {
    userInfoSidebar.classList.remove('open');
    overlayUsuario.classList.remove('open');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        userInfoSidebar.classList.remove('open');
        overlayUsuario.classList.remove('open');
    }
});

/** Favoritos */

const favoritosIcon = document.getElementById('iconoCorazonHeader');
const favoritosIconArrow = document.getElementById('flechaDesplegableFavoritos');
const favoritosSidebar = document.getElementById('favoritosSidebar');
const favoritosClose = document.getElementById('favoritosClose');
const overlayFavoritos = document.getElementById('overlayFavoritos');

favoritosIcon.addEventListener('click', () => {
    favoritosSidebar.classList.toggle('open');
    overlayFavoritos.classList.toggle('open');
});
favoritosIconArrow.addEventListener('click', () => {
    favoritosSidebar.classList.toggle('open');
    overlayFavoritos.classList.toggle('open');
});
favoritosClose.addEventListener('click', () => {
    favoritosSidebar.classList.remove('open');
    overlayFavoritos.classList.remove('open');
});
overlayFavoritos.addEventListener('click', () => {
    favoritosSidebar.classList.remove('open');
    overlayFavoritos.classList.remove('open');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        favoritosSidebar.classList.remove('open');
        overlayFavoritos.classList.remove('open');
    }
});