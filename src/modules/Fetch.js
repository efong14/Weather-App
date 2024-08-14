async function getWeather(place, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=${unit}&key=AM5W9GAD6WKBH43YHULT2AMJ3&contentType=json`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    const temp = [
      weatherData.currentConditions.temp,
      weatherData.currentConditions.conditions,
      weatherData.currentConditions.icon,
    ];
    return temp;
  } catch (error) {
    alert('Please input name of city');
  }
}
export { getWeather };
