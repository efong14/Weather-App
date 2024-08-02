import { getWeather } from './Fetch';
const weatherDOM = (function () {
  const city = document.getElementById('city');
  const unit = document.getElementById('unit');
  const search = document.getElementById('search');
  const result = document.getElementById('result');

  let unitType = unit.textContent == 'Celsius' ? 'metric' : 'us';

  async function weatherSearch(e) {
    e.preventDefault();
    const weatherTemp = await getWeather(city.value, unitType);
    result.textContent = weatherTemp;
  }
  search.onclick = weatherSearch;
})();

export { weatherDOM };
