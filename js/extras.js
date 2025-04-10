import { obtenerFestivos } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("info-extra");
  contenedor.innerHTML = "<h2>Próximo festivo</h2>";

  const hoy = new Date();
  const festivos = await obtenerFestivos();

  const proximo = festivos.find(f => new Date(f.date) > hoy);
  if (proximo) {
    const fecha = new Date(proximo.date);
    const diff = Math.ceil((fecha - hoy) / (1000 * 60 * 60 * 24));
    contenedor.innerHTML += `<p>El próximo festivo es <strong>${proximo.localName}</strong> en <strong>${diff}</strong> días (${proximo.date})</p>`;
  } else {
    contenedor.innerHTML += "<p>No hay más festivos este año.</p>";
  }
});
