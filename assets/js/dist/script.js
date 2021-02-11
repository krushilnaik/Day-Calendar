// import moment from 'moment';
// import 'jquery';
var currentDay = document.getElementById("currentDay");
var container = document.querySelector(".container");
var today = moment().format("dddd, MMMM Do");
var thisHour = Number(moment().format("HH"));
currentDay.innerText = today;
var timeKeys = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
// clear out the container and re-render it
container.innerHTML = "";
var _loop_1 = function (time) {
    var hour = Number(time.slice(time.indexOf("-") + 1));
    var timeType = "past";
    if (thisHour == hour) {
        timeType = "present";
    }
    else if (thisHour < hour) {
        timeType = "future";
    }
    var timeblock = $("<div id=\"" + time + "\" class=\"row time-block\">").get()[0];
    timeblock.innerHTML = "\n\t\t<div class=\"col-1 hour\">" + (hour % 12 || 12) + (hour < 12 ? "AM" : "PM") + "</div>\n\t\t<textarea class=\"col-10 task " + timeType + "\">" + (localStorage.getItem(time) || "") + "</textarea>\n\t\t<button class=\"col-1 saveBtn btn\"><i class=\"fas fa-save\"></i></button>\n\t";
    timeblock.lastElementChild.addEventListener("click", function () {
        localStorage.setItem(time, timeblock.querySelector("textarea").value);
        console.log("Task " + localStorage.getItem(time) + " saved to localStorage.");
    });
    container.appendChild(timeblock);
};
for (var _i = 0, timeKeys_1 = timeKeys; _i < timeKeys_1.length; _i++) {
    var time = timeKeys_1[_i];
    _loop_1(time);
}
