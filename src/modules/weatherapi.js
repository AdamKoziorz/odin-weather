import { formatDate, formatTime12, createLocation, isNight, padZeroToTime } from './utilities'

function transformForecastData(raw_data) {
    return {
        "description": raw_data.current.condition.text,
        "location": createLocation(raw_data.location.name, raw_data.location.region, raw_data.location.country),
        "date": formatDate(raw_data.location.localtime),
        "time": formatTime12(raw_data.location.localtime),
        "temperature": Math.round(raw_data.current.temp_c) + "°C",
    }
}

function transformAstronomyData(raw_data) {
    console.log(padZeroToTime(formatTime12(raw_data.location.localtime)));
    console.log(raw_data.astronomy.astro.sunrise);
    console.log(raw_data.astronomy.astro.sunset);

    return isNight(padZeroToTime(formatTime12(raw_data.location.localtime)),
                           raw_data.astronomy.astro.sunrise,
                           raw_data.astronomy.astro.sunset);
}

async function getForecastData(region) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=567d5d6aedf54166a62222242231408&q=${region}&days=3`, {mode: 'cors'});
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Place does not exist');
    }
    return data;
}

async function getAstronomyData(region) {
    const response = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=567d5d6aedf54166a62222242231408&q=${region}&dt=`, {mode:'cors'});
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Place does not exist');
    }
    return data;
}

async function getForecast(region) {
    try {
        const rawData = await getForecastData(region);
        const cleanData = transformForecastData(rawData);
        return cleanData;
    } catch(err) {
        console.log("FAIL");
    }

}

async function getAstronomy(region) {
    try {
        const rawData = await getAstronomyData(region);
        console.log(rawData);
        const cleanData = transformAstronomyData(rawData);
        return cleanData;
    } catch(err) {
        console.log("FAIL");
    }
}


export { getForecast, getAstronomy };