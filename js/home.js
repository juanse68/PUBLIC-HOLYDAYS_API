// Importa la función para obtener los feriados desde la API
import { obtenerFestivos } from './api.js';

// Esta función se exporta para que pueda ser llamada desde main.js
export async function cargarHome() {
  // Obtiene el elemento donde se mostrará la sección "Inicio"
  const contenedor = document.getElementById("home");

  // Inserta un título dentro del contenedor
  contenedor.innerHTML = "<h2>Festivos en Colombia 2025</h2>";

  // Llama a la función que obtiene los datos de la API
  const festivos = await obtenerFestivos();

  // Recorre cada feriado y lo muestra como una tarjeta
  festivos.forEach(f => {
    const div = document.createElement("div"); // Crea un div para cada feriado
    div.className = "festivo"; // Le da una clase CSS

    // Inserta el nombre y la fecha del feriado, y un botón para agregar a favoritos
    div.innerHTML = `
      <strong>${f.localName}</strong> - ${f.date}
      <button class="btn-fav" data-nombre="${f.localName} - ${f.date}">⭐</button>
    `;

    // Agrega el div al contenedor principal
    contenedor.appendChild(div);
  });

  // Escucha los clics en cualquier botón con clase "btn-fav" dentro del contenedor
  contenedor.addEventListener("click", e => {
    if (e.target.classList.contains("btn-fav")) {
      // Obtiene el texto que representa al feriado
      const texto = e.target.dataset.nombre;

      // Lee el array de favoritos desde localStorage, o usa uno vacío si no hay nada
      let favs = JSON.parse(localStorage.getItem("favoritos") || "[]");

      // Si el feriado no está ya en favoritos, lo agrega
      if (!favs.includes(texto)) {
        favs.push(texto); // Agrega el nuevo favorito
        localStorage.setItem("favoritos", JSON.stringify(favs)); // Guarda el array actualizado
        alert("Agregado a favoritos"); // Muestra una alerta
      } else {
        alert("Ya está en favoritos"); // Si ya estaba, muestra otra alerta
      }
    }
  });
}
