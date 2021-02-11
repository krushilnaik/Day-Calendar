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
for (var _i = 0, timeKeys_1 = timeKeys; _i < timeKeys_1.length; _i++) {
    var time = timeKeys_1[_i];
    var hour = Number(time.slice(time.indexOf("-") + 1));
    var timeType = "past";
    if (thisHour == hour) {
        timeType = "present";
    }
    else if (thisHour < hour) {
        timeType = "future";
    }
    var rowTemplate = "\n\t\t<div id=\"" + time + "\" class=\"row time-block\">\n\t\t\t<div class=\"col-1 hour\">" + (hour % 12 || 12) + (hour < 12 ? "AM" : "PM") + "</div>\n\t\t\t<textarea class=\"col-10 task " + timeType + "\">" + (localStorage.getItem(time) || "") + "</textarea>\n\t\t\t<button class=\"col-1 saveBtn btn\"><i class=\"fas fa-save\"></i></button>\n\t\t</div>\n\t";
    container.innerHTML += rowTemplate;
    // let currentBlock: HTMLElement = document.getElementById(time);
    // let currentButton: HTMLButtonElement = currentBlock.querySelector("button");
    // let textarea: HTMLTextAreaElement = currentBlock.querySelector("textarea");
    // console.log(currentBlock);
    // console.log(currentButton);
    // console.log(textarea);
    // currentButton.addEventListener("click", function (event) {
    // 	event.preventDefault();
    // 	localStorage.setItem(time, textarea.value);
    // 	console.log(`Task ${localStorage.getItem(time)} saved to localStorage.`);
    // });
}
var _loop_1 = function (button) {
    var timeblock = button.closest("div");
    var textarea = timeblock.querySelector("textarea");
    button.addEventListener("click", function () {
        localStorage.setItem(timeblock.id, textarea.value);
        console.log(timeblock.id + ": task '" + localStorage.getItem(timeblock.id) + "' saved to localStorage.");
    });
};
// Add all the event listeners afterward
// for some reason they're not registering in the previous for loop
for (var _a = 0, _b = document.querySelectorAll("button"); _a < _b.length; _a++) {
    var button = _b[_a];
    _loop_1(button);
}
