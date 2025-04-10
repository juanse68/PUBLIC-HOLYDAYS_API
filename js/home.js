import { obtenerFestivos } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("home");
  contenedor.innerHTML = "<h2>Festivos en Austria 2025</h2>";

  const festivos = await obtenerFestivos();
  festivos.forEach(f => {
    const div = document.createElement("div");
    div.className = "festivo";
    div.innerHTML = `
      <strong>${f.localName}</strong> - ${f.date}
      <button class="btn-fav" data-nombre="${f.localName} - ${f.date}">⭐</button>
    `;
    contenedor.appendChild(div);
  });

  // Escuchar todos los botones "⭐"
  contenedor.addEventListener("click", e => {
    if (e.target.classList.contains("btn-fav")) {
      const texto = e.target.dataset.nombre;
      let favs = JSON.parse(localStorage.getItem("favoritos") || "[]");
      if (!favs.includes(texto)) {
        favs.push(texto);
        localStorage.setItem("favoritos", JSON.stringify(favs));
        alert("Agregado a favoritos");
      } else {
        alert("Ya está en favoritos");
      }
    }
  });
});