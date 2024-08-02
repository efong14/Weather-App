async function getWeather(place, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=${unit}&key=AM5W9GAD6WKBH43YHULT2AMJ3&contentType=json`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    const temp = weatherData.currentConditions.temp;
    return temp;
  } catch (error) {
    console.log('Please input name of city');
  }
}
export { getWeather };
