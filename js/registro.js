document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("registro");
    contenedor.innerHTML = `
      <h2>Registro</h2>
      <form id="formRegistro">
        <input placeholder="Nombre" name="nombre" required><br>
        <input placeholder="Apellido" name="apellido" required><br>
        <input type="email" placeholder="Correo" name="email" required><br>
        <input type="password" placeholder="Contraseña" name="pass" required><br>
        <input type="date" name="fechaNac" required><br>
        <input placeholder="País" name="pais" required><br>
        <select name="genero">
          <option value="">Género</option>
          <option>Femenino</option>
          <option>Masculino</option>
          <option>Otro</option>
        </select><br>
        <button type="submit">Registrar</button>
      </form>
    `;
  
    document.getElementById("formRegistro").addEventListener("submit", e => {
      e.preventDefault();
      const datos = Object.fromEntries(new FormData(e.target));
      localStorage.setItem("usuario", JSON.stringify(datos));
      alert("¡Registro guardado!");
    });
  });
  