// let date = new Date();
// let newYear = new Date(2020, 0, 1, 0, 0, 0, 0);
// let result = newYear - date;
// console.log("hgjhj", newYear);
// console.log("hg", date);
// console.log("jhj", result);
// let month = Math.floor(result / 2592000000);
// if (month === 0) {
//     console.log("jhgjgkhhkjhk");
// } else {
//     console.log("month", month);
// }
// let day = Math.floor(result / 86400000);
// console.log("day", day);
// let hours = Math.floor((result -(day * 86400000)) / 3600000);
// console.log("hours", hours);
// let minutes = Math.floor((result -(day * 86400000) - (hours * 3600000)) / 60000);
// console.log("minutes", minutes);
// let secunds = Math.floor((result -(day * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);
// console.log("seconds", secunds);

let wrap = document.querySelector(".wrapper");
const mon = document.querySelectorAll("[data-type=\"month\"]");
const day = document.querySelector("[data-type=\"day\"]");
const h = document.querySelector("[data-type=\"hours\"]");
const min = document.querySelector("[data-type=\"minutes\"]");
const sec = document.querySelector("[data-type=\"seconds\"]");

let newYear = new Date(2020, 0, 1).getTime();
let yearTime = 365 * 24 * 60 * 60 * 1000;
setInterval(function () {
    let str = "До Нового года осталось: ";
    let now = new Date().getTime();
    let diff = newYear - now;
    let month = Math.floor(diff / 2592000000);

    if(month === 0) {
        wrap.style.width = "405px";
        mon[0].style.display = "none";
        mon[1].style.display = "none";
    }
    mon[1].innerText = month;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    day.innerText = days;
    let hours = Math.floor(diff / (1000 * 60 * 60))-(days * 24);
    h.innerText = hours;
    let minutes = Math.floor(diff / (1000 * 60)) - (days * 24 * 60) - (hours * 60);
    min.innerText = minutes;
    let seconds = Math.floor(diff / 1000) - (days * 24 * 60 *60) - (hours * 60 * 60) - (minutes * 60);
    sec.innerText = seconds;
}, 1000);



