import {
  formatDate,
  formatTime12,
  createLocation,
  isNight,
  padZeroToTime,
} from "./utilities";

const API_KEY = "567d5d6aedf54166a62222242231408";
const API_BASE_URL = "https://api.weatherapi.com/v1";

function transformForecastData(rawData) {
  return {
    description: rawData.current.condition.text,
    location: createLocation(
      rawData.location.name,
      rawData.location.region,
      rawData.location.country,
    ),
    date: formatDate(rawData.location.localtime),
    time: formatTime12(rawData.location.localtime),
    temperature: `${Math.round(rawData.current.temp_c)}°C`,
  };
}

function transformAstronomyData(rawData) {
  return isNight(
    padZeroToTime(formatTime12(rawData.location.localtime)),
    rawData.astronomy.astro.sunrise,
    rawData.astronomy.astro.sunset,
  );
}

async function getForecastData(region) {
  const response = await fetch(
    `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${region}&days=3`,
    { mode: "cors" },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Place does not exist");
  }
  return data;
}

async function getAstronomyData(region) {
  const response = await fetch(
    `${API_BASE_URL}/astronomy.json?key=${API_KEY}&q=${region}&dt=`,
    { mode: "cors" },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Place does not exist");
  }
  return data;
}

async function getForecast(region) {
  const rawData = await getForecastData(region);
  const cleanData = transformForecastData(rawData);
  return cleanData;
}

async function getAstronomy(region) {
  const rawData = await getAstronomyData(region);
  const cleanData = transformAstronomyData(rawData);
  return cleanData;
}

export { getForecast, getAstronomy };
