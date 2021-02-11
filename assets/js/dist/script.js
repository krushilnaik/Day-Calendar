// import moment from 'moment';
var currentDay = document.getElementById("currentDay");
var container = document.querySelector(".container");
var today = moment().format("dddd, MMMM Do");
var thisHour = moment().format("HH");
console.log(thisHour);
currentDay.innerText = today;
var timeKeys = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
container.innerHTML = "";
for (var _i = 0, timeKeys_1 = timeKeys; _i < timeKeys_1.length; _i++) {
    var time = timeKeys_1[_i];
    var hour = Number(time.slice(time.indexOf("-") + 1));
    console.log("for loop hour", hour);
    var timeType = "past";
    if (thisHour == hour) {
        timeType = "present";
    }
    else if (thisHour < hour) {
        timeType = "future";
    }
    var rowTemplate = "\n\t\t<div id=\"" + time + "\" class=\"row time-block\">\n\t\t\t<div class=\"col-1 hour\">" + (hour % 12 || 12) + (hour > 8 && hour < 12 ? "AM" : "PM") + "</div>\n\t\t\t<textarea class=\"col-10 task " + timeType + "\"></textarea>\n\t\t\t<button class=\"col-1 saveBtn btn\"><i class=\"fas fa-save\"></i></button>\n\t\t</div>\n\t";
    container.innerHTML += rowTemplate;
}
