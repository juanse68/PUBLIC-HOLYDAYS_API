export async function obtenerFestivos() {
    const url = "https://openholidaysapi.org/PublicHolidays?countryIsoCode=DE&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=DE&subdivisionCode=DE-BE";
    const response = await fetch(url);
    return await response.json();
  }
  