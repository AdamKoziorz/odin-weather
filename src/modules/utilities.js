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

function formatTime(datetime) {
    const timeParts = datetime.split(" ")[1].split(":");
    let hour = timeParts[0];
    const minutes = timeParts[1];
    const suffix = (parseInt(hour) < 13) ? "AM" : "PM";

    hour = (hour === "0") ? "12" : hour;
    hour = (parseInt(hour) < 13) ? hour : `${parseInt(hour) - 12}`;
    console.log(hour + ":" + minutes + " " + suffix);
    return hour + ":" + minutes + " " + suffix;
}

export { formatDate, formatTime };