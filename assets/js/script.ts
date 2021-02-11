// import moment from 'moment';
// import 'jquery';

var currentDay = document.getElementById("currentDay");
var container = document.querySelector(".container");

var today = moment().format("dddd, MMMM Do");
var thisHour = Number(moment().format("HH"));

currentDay.innerText = today;

const timeKeys = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

// clear out the container and re-render it
container.innerHTML = "";

for (const time of timeKeys) {
	let hour = Number(time.slice(time.indexOf("-")+1));
	let timeType = "past";

	if (thisHour == hour) {
		timeType = "present";
	} else if (thisHour < hour) {
		timeType = "future";
	}

	let rowTemplate = `
		<div id="${time}" class="row time-block">
			<div class="col-1 hour">${hour % 12 || 12}${hour < 12 ? "AM" : "PM"}</div>
			<textarea class="col-10 task ${timeType}">${localStorage.getItem(time) || ""}</textarea>
			<button class="col-1 saveBtn btn"><i class="fas fa-save"></i></button>
		</div>
	`;

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

// Add all the event listeners afterward
// for some reason they're not registering in the previous for loop
for (const button of document.querySelectorAll("button")) {
	let timeblock = button.closest("div");
	let textarea: HTMLTextAreaElement = timeblock.querySelector("textarea");

	button.addEventListener("click", function () {
		localStorage.setItem(timeblock.id, textarea.value);
		console.log(`${timeblock.id}: task '${localStorage.getItem(timeblock.id)}' saved to localStorage.`);
	});
}
