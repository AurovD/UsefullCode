let date = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const exercises = [{
    name: "Language",
    time: {
        h: 8,
        m: 0
    },
    length: 45
}, {
    name: "HTML",
    time: {
        h: 9,
        m: 15
    },
    length: 45
}, {
    name: "CSS",
    time: {
        h: 12,
        m: 30
    },
    length: 45
}, {
    name: "JavaScript",
    time: {
        h: 14,
        m: 0
    },
    length: 120
}, {
    name: "Design",
    time: {
        h: 17,
        m: 45
    },
    length: 60
}, {
    name: "Math",
    time: {
        h: 20,
        m: 0
    },
    length: 45
}, {
    name: "Java",
    time: {
        h: 22,
        m: 30
    },
    length: 75
}];

const day = document.querySelector("[data-type=\"day\"]");
const month = document.querySelector("[data-type=\"month\"]");
const year = document.querySelector("[data-type=\"year\"]");
const week = document.querySelector("[data-type=\"day_of_week\"]");
const time = document.querySelector("[data-type=\"time\"]");
const cards = document.querySelector("[data-type=\"cards\"]");
const timeline = document.querySelector(".timeline");

function setTime(h, m = 0) {
    let str = "";
    let part = "";
    if (h === 24) {
        h = 0;
    }
    part = (h >= 12) ? " PM" : " AM" ;
    if (h >= 13) {
        h -= 12;
    }
    str = h < 10 ? "0" + h : h;
    str += m < 10 ? ":0" + m : ":" + m;
    str += part;
    return str;
}

day.innerText = date.getDate();
month.innerText = months[date.getMonth()];
year.innerText = date.getFullYear();
week.innerText = daysOfWeek[date.getDay()];

cards.style.width = 290 * exercises.length + "px";
exercises.forEach(function(el, i) {
    if (el.time.h > date.getHours() || 
        (el.time.h === date.getHours() && el.time.m > date.getMinutes())) {
        let card = document.createElement("div");
        card.className = "card";
        let name = document.createElement("h2");
        name.innerText = el.name;
        let time = document.createElement("h5");
        time.innerText = setTime(el.time.h, el.time.m);
        card.appendChild(time);
        card.appendChild(name);
        cards.appendChild(card);
    }
});

let startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime() / 1000;
let endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999).getTime() / 1000;
let pastTime = document.createElement("div");
pastTime.className = "full_line";
timeline.appendChild(pastTime);
let endPoint = endTime - startTime;

setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    time.innerText = setTime(hours, minutes);
    let nowTime = date.getTime() / 1000;
    let nowPoint = nowTime - startTime;
    timeline.firstElementChild.innerText = setTime(hours, minutes);
    pastTime.style.width = (nowPoint * 100) / endPoint + "%";
}, 1000);

exercises.forEach(function(el) {
    let div = document.createElement("div");
    div.style.height = "100%";
    div.style.backgroundColor = "#f09";
    div.style.position = "absolute";
    div.style.top = "0";
    timeline.appendChild(div);
    let width = (el.length * 100) / (24 * 60);
    div.style.width = width + "%";
    let pointTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), el.time.h, el.time.m, 0, 0).getTime() / 1000;
    let point = pointTime - startTime;
    div.style.left = (point * 100) / endPoint + "%";
});
