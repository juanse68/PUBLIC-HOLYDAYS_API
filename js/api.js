fetch('https://date.nager.at/api/v3/PublicHolidays/2025/ES')
  .then(response => response.json())
  .then(data => {
    console.log('Feriados:', data);
  })
  .catch(error => {
    console.error('Error al obtener los feriados:', error);
  });