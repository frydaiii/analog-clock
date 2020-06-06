'use strict';

const SECOND = document.getElementsByClassName("second-arm")[0];
const MINUTE = document.getElementsByClassName("minute-arm")[0];
const HOUR = document.getElementsByClassName("hour-arm")[0];
const DIGITALCLOCK = document.getElementsByTagName("h1")[0];

SECOND.style.transition = "transform .5s ease-in-out";
MINUTE.style.transition = "transform .5s ease-in-out";
HOUR.style.transition = "transform .5s ease-in-out";

let date = new Date();

let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

SECOND.style.transform = "rotate(" + seconds*6 + "deg)";
MINUTE.style.transform = "rotate(" + minutes*6 + "deg)";
HOUR.style.transform = "rotate(" + seconds*30 + "deg)";

let dayOfTheWeek = function(n) {
    switch (n) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
           return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
      }
}

let runTheDate = function() {
    DIGITALCLOCK.innerText = dayOfTheWeek(date.getDay()) + " "
    + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}
runTheDate();

let runTheClock = function() {
    seconds += 1;
    minutes += 1/60;
    hours += 1/3600;

    SECOND.style.transform = "rotate(" + seconds*6 + "deg)";
    MINUTE.style.transform = "rotate(" + minutes*6 + "deg)";
    HOUR.style.transform = "rotate(" + hours*30 + "deg)";
}

let intervalDate = setInterval(runTheDate, 3600000);
let inervalClock = setInterval(runTheClock, 1000);