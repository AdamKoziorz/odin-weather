import { getForecast } from './weatherapi';

import OvercastIcon from '../assets/icons/weather-cloudy.svg';
import PartlyCloudyIcon from '../assets/icons/weather-partly-cloudy.svg';

import RainBackground from '../assets/images/raining_background.gif';
import CloudBackground from '../assets/images/cloudy_background.gif';

const body = document.body;
const currentIcon = document.querySelector('.i_icon');
const descriptionSpan = document.querySelector('.i_description');
const locationSpan = document.querySelector('.i_location');
const dateSpan = document.querySelector('.i_date');
const timeSpan = document.querySelector('.i_time');
const temperatureSpan = document.querySelector('.i_temperature');


// Possibly coupled function - maybe rewrite to not be as coupled
function setIcon(description) {
    // Set Icons
    switch (description) {
        case "Overcast":
            currentIcon.src = OvercastIcon;
            break;
        case "Partly cloudy":
            currentIcon.src = PartlyCloudyIcon;
            break;
        default:
            currentIcon.src = 'none';
    }
}

function setBackground(description) {
    // Set Background
    switch(true) {
        case (description === "Partly cloudy" || description === "Overcast"):
            body.style.backgroundImage = `url(${CloudBackground})`;
            break;
        case (description === "Rain"):
            body.style.backgroundImage = `url(${RainBackground})`;
            break;
        default:
            body.style.backgroundImage = 'none';
    }
}

async function updateView() {
    const data = await getForecast('Courtice');
    descriptionSpan.innerText = data.description;
    locationSpan.innerText = data.location;
    dateSpan.innerText = data.date;
    timeSpan.innerText = data.time;
    temperatureSpan.innerText = data.temperature;
    setBackground(data.description);
    setIcon(data.description);
}

export { updateView };