// import moment from 'moment';

var currentDay = document.getElementById("currentDay");
var timetable = document.querySelector(".container");

var today = moment().format("dddd, MMMM Do");
var thisHour = moment().hour()
console.log(thisHour);

currentDay.innerText = today;
