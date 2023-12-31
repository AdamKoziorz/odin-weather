import { getForecast, getAstronomy } from './weatherapi'
import { updateView, showError } from './view'

const search = document.getElementById('searchLocation');

async function update(location) {
  try {
      const data = await getForecast(location);
      const isNight = await getAstronomy(location);
      updateView(data, isNight);
  } catch(err) {
      showError();
  }
}

search.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      await update(search.value);
      search.value = "";
    }
  });

export default update;
