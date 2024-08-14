import { getWeather } from './Fetch';

const weatherDOM = (function () {
  const city = document.getElementById('city');
  const unit = document.getElementById('unit');
  const search = document.getElementById('search');
  const location = document.getElementById('location');
  const result = document.getElementById('result');
  const condition = document.getElementById('condition');

  let unitType = 'metric';

  async function weatherSearch(e) {
    e.preventDefault();
    const weatherTemp = await getWeather(city.value, unitType);
    showResult(weatherTemp, city.value);
  }

  function showResult(weather, name) {
    location.textContent = name[0].toUpperCase() + name.slice(1);
    result.textContent = weather[0] + unit.textContent;
    condition.textContent = weather[1];
    addIcon(weather[2]);
  }

  function addIcon(condition) {
    document.getElementById('iconContainer').textContent = '';
    const myIcon = new Image();
    myIcon.src = `    https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/4th%20Set%20-%20Monochrome/${condition}.png?raw=true`;
    // myIcon.src = `../icons/${condition}.png`;
    document.getElementById('iconContainer').appendChild(myIcon);
  }

  function toggle(e) {
    e.preventDefault();
    if (unit.textContent == '°C') {
      unit.textContent = '';
      unit.textContent = '°F';
      unitType = 'us';
    } else {
      unit.textContent = '';
      unit.textContent = '°C';
      unitType = 'metric';
    }
  }

  async function showDefault() {
    const weatherTemp = await getWeather('manila', 'metric');
    showResult(weatherTemp, 'manila');
  }

  window.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
      e.preventDefault();
      search.click();
    }
  });

  unit.onclick = toggle;
  search.onclick = weatherSearch;
  showDefault();
})();

export { weatherDOM };
