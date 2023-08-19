function formatDate(datetime) {
    const dateParts = datetime.split("-");
    const year = dateParts[0];
    let month = dateParts[1];
    let day = dateParts[2].slice(0, 2);

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    month = months[month - 1];
    day = day.replace(/^0+/, '');

    return month + " " + day + ", " + year;
}

function formatTime12(datetime) {
    const timeParts = datetime.split(" ")[1].split(":");
    let hour = timeParts[0];
    const minutes = timeParts[1];
    const suffix = (parseInt(hour) < 13) ? "AM" : "PM";

    hour = (hour === "0") ? "12" : hour;
    hour = (parseInt(hour) < 13) ? hour : `${parseInt(hour) - 12}`;
    return hour + ":" + minutes + " " + suffix;
}

function formatTime24(time) {
    let [noperiod, period] = time.split(' ');
    let [hours, minutes] = noperiod.split(':').map(Number);

    if ((period === 'PM') && (hours !== 12)) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    return { hours, minutes };
}


function createLocation(city, region, country) {
    let location = "";
    if (city) {
        location += city + ", ";
    }
    if (region) {
        location += region + ", ";
    }
    if (country) {
        location += country;
    }
    return location;
}

function padZeroToTime(time) {
    let hour = parseInt(time.split(':')[0]);
    if (hour < 10) {
        return "0" + time;
    }
    return time;
}

function isNight(time, sunrise, sunset) {
    console.log(time);
    console.log(sunrise);
    console.log(sunset);

    const time_24 = formatTime24(time);
    const sunrise_24 = formatTime24(sunrise);
    const sunset_24 = formatTime24(sunset);

    console.log(time_24);
    console.log(sunrise_24);
    console.log(sunset_24);

    const time_mins = time_24.hours * 60 + time_24.minutes;
    const sunrise_mins = sunrise_24.hours * 60 + sunrise_24.minutes;
    const sunset_mins = sunset_24.hours * 60 + sunset_24.minutes;

    return !(time_mins >= sunrise_mins && time_mins <= sunset_mins);
}


export { formatDate, formatTime12, createLocation, isNight, padZeroToTime };