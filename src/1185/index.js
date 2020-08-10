
const log = require('../log');

var dayOfTheWeek = function (day, month, year) {
    let date = new Date(year, month - 1, day);
    let dict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dict[date.getDay()];
};

let year = 2020, month = 8, day = 10;

log.info(`day:${year}-${month}-${day}`);

let week = dayOfTheWeek(day, month, year);

log.info(`week is ${week}`);