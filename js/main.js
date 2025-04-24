// Importa las funciones de cada sección
import { cargarHome } from './home.js';
import { cargarBusqueda } from './busqueda.js';
import { cargarFavoritos } from './favoritos.js';
import { cargarInfoExtra } from './extras.js';

// Espera a que todo el contenido del DOM se haya cargado
document.addEventListener("DOMContentLoaded", () => {
  // Muestra la sección inicial (por ejemplo, 'home')
  cargarHome(); // Carga la sección de Inicio

  // Función para mostrar las secciones activas
  function mostrarSeccion(id) {
    // Elimina la clase 'activa' de todas las secciones
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));

    // Añade la clase 'activa' a la sección seleccionada
    document.getElementById(id).classList.add('activa');

    // Carga los contenidos dinámicamente dependiendo de la sección
    switch(id) {
      case 'home':
        cargarHome(); // Sección de inicio
        break;
      case 'buscar':
        cargarBusqueda(); // Sección de búsqueda
        break;
      case 'favoritos':
        cargarFavoritos(); // Sección de favoritos
        break;
      case 'registro':
        // Aquí puedes cargar tu formulario de registro si tienes alguno
        break;
      case 'info-extra':
        cargarInfoExtra(); // Sección de información extra
        break;
      default:
        break;
    }
  }

  // Menú inferior: configura las funciones al hacer clic en cada botón
  document.querySelector(".menu-inferior").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.getAttribute('onclick').split("'")[1];
      mostrarSeccion(id); // Muestra la sección correspondiente
    }
  });

  // Establece el comportamiento inicial para la sección activa
  mostrarSeccion('home'); // Sección de inicio cargada por defecto
});
