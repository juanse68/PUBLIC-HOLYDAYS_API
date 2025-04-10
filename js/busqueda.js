import { obtenerFestivos } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("buscar");
  contenedor.innerHTML = `
    <input type="text" id="buscador" placeholder="Buscar festivo..." />
    <div id="resultados"></div>
  `;

  const datos = await obtenerFestivos();
  const input = document.getElementById("buscador");
  const resultados = document.getElementById("resultados");

  input.addEventListener("input", () => {
    resultados.innerHTML = "";
    const filtro = input.value.toLowerCase();
    datos.filter(d => d.localName.toLowerCase().includes(filtro))
         .forEach(f => {
           const div = document.createElement("div");
           div.textContent = `${f.localName} - ${f.date}`;
           resultados.appendChild(div);
         });
  });
});
