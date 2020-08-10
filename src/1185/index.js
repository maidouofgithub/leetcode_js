
const log = require('../log');

var dayOfTheWeek = function (day, month, year) {
    let date = new Date(year, month - 1, day);
    let dict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dict[date.getDay()];
};

var dayOfTheWeek2 = function (day, month, year) {
    if (month == 1 || month == 12) {
        month += 12;
        year--;
    }
    let week = (day + 2 * month + 3 * (month + 1) / 5 + year + year / 4 - year / 100 + year / 400) % 7;
    log.info(week);
    let dict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dict[week];
}

let year = 2020, month = 8, day = 10;

log.info(`day:${year}-${month}-${day}`);

let week = dayOfTheWeek(day, month, year);

log.info(`week is ${week}`);

let week2 = dayOfTheWeek2(10, 8, 2020);
log.info(`week is ${week2}`);