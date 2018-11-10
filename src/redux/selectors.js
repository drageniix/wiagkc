const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const getOrdinal = n =>
    n > 0
        ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : '';

export const getLongDate = unix => {
    const date = new Date(unix * 1000);
    const month = months[date.getMonth()];
    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const ordinal = getOrdinal(day);
    const year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${dayOfWeek}, ${month} ${day}${ordinal} ${year}, ${hours}:${minutes} ${ampm}`;
};

export const getShortDate = unix => {
    const date = new Date(unix * 1000);
    const month = months[date.getMonth()].slice(0, 3);
    const day = date.getDate();
    const ordinal = getOrdinal(day);
    return `${month} ${day}${ordinal}`;
};
