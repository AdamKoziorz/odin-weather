import { formatDate, formatTime } from './utilities'

function extractForecastData(raw_data) {
    return {
        "description": raw_data.current.condition.text,
        "location": raw_data.location.name,
        "date": formatDate(raw_data.location.localtime),
        "time": formatTime(raw_data.location.localtime),
        "temperature": raw_data.current.temp_c + "°C",
    }
}

async function getForecastData(region) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=567d5d6aedf54166a62222242231408&q=${region}&days=3`, {mode: 'cors'});
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(`fail: ${err}`);
    }
}

async function getForecast(region) {
    const rawData = await getForecastData(region);
    const cleanData = extractForecastData(rawData);

    console.log(cleanData);
    return cleanData;
}

export { getForecast };