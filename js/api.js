export async function obtenerFestivos() {
  try {
    const respuesta = await fetch('https://date.nager.at/api/v3/PublicHolidays/2025/CO'); // CO = Colombia
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Error al obtener los festivos:", error);
    return [];
  }
}
