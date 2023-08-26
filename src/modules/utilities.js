function formatDate(datetime) {
  const dateParts = datetime.split("-");
  const year = dateParts[0];
  let month = dateParts[1];
  let day = dateParts[2].slice(0, 2);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month = months[month - 1];
  day = day.replace(/^0+/, "");

  return `${month} ${day}, ${year}`;
}
  
function formatTime12(datetime) {
  const timeParts = datetime.split(" ")[1].split(":");
  let hour = timeParts[0];
  const minutes = timeParts[1];
  const suffix = parseInt(hour, 10) < 12 ? "AM" : "PM";
  
  hour = hour === "0" ? "12" : hour;
  hour = parseInt(hour, 10) < 13 ? hour : `${parseInt(hour, 10) - 12}`;
  return `${hour}:${minutes} ${suffix}`;
}
  
function formatTime24(time) {
  const [noperiod, period] = time.split(" ");
  let [hours] = noperiod.split(":").map(Number);
  const minutes = noperiod.split(":")[1]
    ? parseInt(noperiod.split(":")[1], 10)
    : 0;
  
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }
  
  return { hours, minutes };
}
  
function createLocation(city, region, country) {
  let location = "";
  if (city) {
    location += `${city}, `;
  }
  if (region) {
    location += `${region}, `;
    }
  if (country) {
    location += country;
  }
  return location;
}
  
function padZeroToTime(time) {
  const hour = parseInt(time.split(":")[0], 10);
  if (hour < 10) {
    return `0${time}`;
  }
  return time;
}
  
function isNight(time, sunrise, sunset) {
  const time24 = formatTime24(time);
  const sunrise24 = formatTime24(sunrise);
  const sunset24 = formatTime24(sunset);
  
  const timeMins = time24.hours * 60 + time24.minutes;
  const sunriseMins = sunrise24.hours * 60 + sunrise24.minutes;
  const sunsetMins = sunset24.hours * 60 + sunset24.minutes;
  
  return !(timeMins >= sunriseMins && timeMins <= sunsetMins);
}
  
export { formatDate, formatTime12, createLocation, isNight, padZeroToTime };
  