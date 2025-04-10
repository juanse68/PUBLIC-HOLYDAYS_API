const contenedor = document.getElementById("favoritos");

function cargarFavoritos() {
  const favs = JSON.parse(localStorage.getItem("favoritos") || "[]");
  contenedor.innerHTML = "<h2>Favoritos</h2>";
  favs.forEach((f, i) => {
    const div = document.createElement("div");
    div.innerHTML = `${f} <button onclick="eliminarFavorito(${i})">❌</button>`;
    contenedor.appendChild(div);
  });
}

window.eliminarFavorito = function (index) {
  const favs = JSON.parse(localStorage.getItem("favoritos") || "[]");
  favs.splice(index, 1);
  localStorage.setItem("favoritos", JSON.stringify(favs));
  cargarFavoritos();
}

document.addEventListener("DOMContentLoaded", cargarFavoritos);
