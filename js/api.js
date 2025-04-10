export async function obtenerFestivos() {
    const url = "https://date.nager.at/api/v3/PublicHolidays/2025/AT";
    const response = await fetch(url);
    return await response.json();
  }
  