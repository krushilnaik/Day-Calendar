// import moment from 'moment';

var currentDay = document.getElementById("currentDay");
var container = document.querySelector(".container");

var today = moment().format("dddd, MMMM Do");
var thisHour = moment().format("HH");
console.log(thisHour);

currentDay.innerText = today;

const timeKeys = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

container.innerHTML = "";

for (const time of timeKeys) {
	let hour = Number(time.slice(time.indexOf("-")+1));
	console.log("for loop hour", hour);

	let timeType = "past";

	if (thisHour == hour) {
		timeType = "present";
	} else if (thisHour < hour) {
		timeType = "future";
	}

	let rowTemplate = `
		<div id="${time}" class="row time-block">
			<div class="col-1 hour">${hour % 12 || 12}${hour > 8 && hour < 12 ? "AM" : "PM"}</div>
			<textarea class="col-10 task ${timeType}"></textarea>
			<button class="col-1 saveBtn btn"><i class="fas fa-save"></i></button>
		</div>
	`;

	container.innerHTML += rowTemplate;
}
