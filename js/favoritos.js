// Esta función se exporta para ser llamada desde main.js
export function cargarFavoritos() {
  // Obtiene el contenedor donde se mostrarán los favoritos
  const contenedor = document.getElementById("favoritos-contenedor");

  // Lee los datos guardados en localStorage (o un array vacío si no hay nada)
  const favs = JSON.parse(localStorage.getItem("favoritos") || "[]");

  // Limpia el contenedor antes de volver a cargar la lista
  contenedor.innerHTML = "";

  // Recorre los elementos guardados como favoritos y los muestra en pantalla
  favs.forEach((f, i) => {
    const div = document.createElement("div"); // Crea un nuevo div
    div.innerHTML = `
      ${f}
      <button onclick="eliminarFavorito(${i})">❌</button>
    `;
    contenedor.appendChild(div); // Lo agrega al contenedor
  });
}

// Esta función elimina un favorito por su índice
window.eliminarFavorito = function (index) {
  const favs = JSON.parse(localStorage.getItem("favoritos") || "[]");

  favs.splice(index, 1); // Elimina el elemento del array

  localStorage.setItem("favoritos", JSON.stringify(favs)); // Guarda la lista actualizada

  cargarFavoritos(); // Recarga la lista visualmente
}
