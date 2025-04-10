export async function obtenerFestivos() {
    const url = "https://api.api-ninjas.com/v1/publicholidays?country=US";
    const response = await fetch(url);
    return await response.json();
  }
  