import { obtenerFestivos } from './api.js';


document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("home");
  contenedor.innerHTML = "<h2>Festivos en Austria 2025</h2>";

  const festivos = await obtenerFestivos();
  festivos.forEach(f => {
    const div = document.createElement("div");
    div.className = "festivo";
    div.innerHTML = `<strong>${f.localName}</strong> - ${f.date}`;
    contenedor.appendChild(div);
  });
});
