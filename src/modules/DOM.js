import { getWeather } from './Fetch';

const weatherDOM = (function () {
  const city = document.getElementById('city');
  const unit = document.getElementById('unit');
  const search = document.getElementById('search');
  const result = document.getElementById('result');
  const condition = document.getElementById('condition');

  let unitType = 'metric';

  async function weatherSearch(e) {
    e.preventDefault();
    const weatherTemp = await getWeather(city.value, unitType);
    result.textContent = weatherTemp[0] + unit.textContent;
    condition.textContent = weatherTemp[1];
    addIcon(weatherTemp[2]);
  }

  function addIcon(condition) {
    const myIcon = new Image();
    myIcon.src = `../icons/${condition}.png`;
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

  window.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
      e.preventDefault();
      search.click();
    }
  });

  unit.onclick = toggle;
  search.onclick = weatherSearch;
})();

export { weatherDOM };
