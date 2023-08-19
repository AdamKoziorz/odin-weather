import OvercastIcon from '../assets/icons/weather-cloudy.svg';
import PartlyCloudyIcon from '../assets/icons/weather-partly-cloudy.svg';
import PartlyCloudyNightIcon from '../assets/icons/weather-night-partly-cloudy.svg';
import RainIcon from '../assets/icons/weather-rainy.svg';
import PouringIcon from '../assets/icons/weather-pouring.svg';
import MixedPrecipIcon from '../assets/icons/weather-snowy-rainy.svg';
import SunnyIcon from '../assets/icons/weather-sunny.svg';
import ClearIcon from '../assets/icons/weather-night.svg';
import MistIcon from '../assets/icons/weather-fog.svg';
import WarningIcon from '../assets/icons/weather-cloudy-alert.svg';
import SnowIcon from '../assets/icons/weather-snowy.svg';
import HeavySnowIcon from '../assets/icons/weather-snowy-heavy.svg';
import HailIcon from '../assets/icons/weather-hail.svg';
import RainThunderIcon from '../assets/icons/weather-lightning-rainy.svg';

import RainBackground from '../assets/images/raining_background.gif';
import PartCloudBackground from '../assets/images/cloudy_background.gif';
import OvercastBackground from '../assets/images/overcast_background.gif';
import SnowyBackground from '../assets/images/snowy_background.gif';
import DefaultBackground from '../assets/images/default_background.gif';
import ClearBackground from '../assets/images/clear_background.gif';
import SunnyBackground from '../assets/images/sunny_background.gif';

const body = document.body;
const currentIcon = document.querySelector('.i_icon');
const descriptionSpan = document.querySelector('.i_description');
const locationSpan = document.querySelector('.i_location');
const dateSpan = document.querySelector('.i_date');
const timeSpan = document.querySelector('.i_time');
const temperatureSpan = document.querySelector('.i_temperature');
const attributionText = document.querySelector('.attribution-text');

function setAesthetic(description, isNight) {
    // Set Icons
    switch (description) {
        case "Cloudy":
        case "Overcast":
            currentIcon.src = OvercastIcon;
            body.style.abckgroundImage = `url(${OvercastBackground})`;
            attributionText.innerText = "Background: agilefoolhardyjoey";
            break;
        case "Partly cloudy":
            currentIcon.src = isNight ? PartlyCloudyNightIcon : PartlyCloudyIcon;
            body.style.backgroundImage = isNight ? `url(${ClearBackground})` : `url(${PartCloudBackground})`;
            attributionText.innerText = "Background: u/kmm625";
            break;
        case "Patchy light drizzle":
        case "Light drizzle":
        case "Patchy light rain":
        case "Light rain":
        case "Moderate rain at times":
        case "Moderate rain":
        case "Light rain shower":
        case "Rain":
        case "Freezing drizzle":
            currentIcon.src = RainIcon;
            body.style.backgroundImage = `url(${RainBackground})`;
            attributionText.innerText = "Background by Daydreamer94";
            break;
        case "Heavy rain at times":
        case "Heavy rain":
        case "Moderate or heavy rain shower":
        case "Torrential rain shower":
        case "Heavy freezing drizzle":
            currentIcon.src = PouringIcon;
            body.style.backgroundImage = `url(${RainBackground})`;
            attributionText.innerText = "Background by Daydreamer94";
            break;
        case "Light sleet showers":
        case "Moderate or heavy sleet showers":
        case "Light snow showers":
        case "Moderate or heavy snow showers":
            currentIcon.src = MixedPrecipIcon;
            break;
        case "Light sleet":
        case "Moderate or heavy sleet":
        case "Ice pellets":
        case "Light showers of ice pellets":
        case "Moderate or heavy showers of ice pellets":
            currentIcon.src = HailIcon;
            break;
        case "Patchy light rain with thunder":
        case "Moderate or heavy rain with thunder":
            currentIcon.src = RainThunderIcon;
            body.style.backgroundImage = `url(${RainBackground})`;
            attributionText.innerText = "Background by Daydreamer94";
            break;
        case "Sunny":
            currentIcon.src = SunnyIcon;
            body.style.backgroundImage = `url(${SunnyBackground})`;
            attributionText.innerText = "Background by 1041uuu";
            break;
        case "Clear":
            currentIcon.src = ClearIcon;
            body.style.backgroundImage = `url(${ClearBackground})`;
            attributionText.innerText = "Background by 1041uuu";
            break;
        case "Mist":
        case "Fog":
        case "Freezing fog":
            currentIcon.src = MistIcon;
            break;
        case "Patchy rain possible":
        case "Patchy snow possible":
        case "Patchy sleet possible":
        case "Patchy freezing drizzle possible":
        case "Thundry outbreaks possible":
            currentIcon.src = WarningIcon;
            body.style.abckgroundImage = `url(${OvercastBackground})`;
            attributionText.innerText = "Background: agilefoolhardyjoey";
            break;
        case "Patchy light snow":
        case "Light snow":
        case "Moderate snow":
        case "Patchy light snow with thunder":
            currentIcon.src = SnowIcon;
            body.style.backgroundImage = `url(${SnowyBackground})`;
            attributionText.innerText = "Background by Ryan Haight";
            break;
        case "Blowing snow":
        case "Patchy heavy snow":
        case "Heavy snow":
        case "Blizzard":
        case "Moderate or heavy snow with thunder":
            currentIcon.src = HeavySnowIcon;
            body.style.backgroundImage = `url(${SnowyBackground})`;
            attributionText.innerText = "Background by Ryan Haight";
            break;
        default:
            currentIcon.src = "";
            body.style.backgroundImage = `url(${DefaultBackground})`;
            attributionText.innerText = "";
    }

    if (isNight) {
        body.style.backgroundBlendMode = "multiply";
    } else {
        body.style.backgroundBlendMode = "normal";
    }
}

function updateView(data, isNight) {
    setAesthetic(data.description, isNight);
    descriptionSpan.innerText = data.description;
    locationSpan.innerText = data.location;
    dateSpan.innerText = data.date;
    timeSpan.innerText = data.time;
    temperatureSpan.innerText = data.temperature;
}

export { updateView };