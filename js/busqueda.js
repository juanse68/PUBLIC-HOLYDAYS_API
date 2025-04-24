import { obtenerFestivos } from './api.js';

export async function cargarBusqueda() {
  // Obtiene el contenedor de la pestaña de búsqueda
  const contenedor = document.getElementById("buscar");

  // Inserta un input para buscar y un div para mostrar resultados
  contenedor.innerHTML = `
    <input type="text" id="buscador" placeholder="Buscar festivo..." />
    <input type="date" id="filtro-fecha" />
    <div id="resultados"></div>
  `;

  // Espera a que se carguen los festivos desde la API
  const datos = await obtenerFestivos();

  // Obtiene referencias a los elementos HTML
  const input = document.getElementById("buscador");
  const inputFecha = document.getElementById("filtro-fecha");
  const resultados = document.getElementById("resultados");

  // Función para aplicar los filtros
  function aplicarFiltros() {
    resultados.innerHTML = ""; // Limpia los resultados anteriores
    const filtroTexto = input.value.toLowerCase();
    const filtroFecha = inputFecha.value;

    // Filtra los datos basados en el texto y la fecha
    const filtrados = datos.filter(d => {
      const coincideTexto = d.localName.toLowerCase().includes(filtroTexto);
      const coincideFecha = filtroFecha ? d.date === filtroFecha : true;
      return coincideTexto && coincideFecha;
    });

    // Muestra los resultados filtrados
    filtrados.forEach(f => {
      const div = document.createElement("div");
      div.textContent = `${f.localName} - ${f.date}`;
      resultados.appendChild(div);
    });
  }

  // Escucha los cambios en el input de texto y la fecha
  input.addEventListener("input", aplicarFiltros);
  inputFecha.addEventListener("change", aplicarFiltros);
}
