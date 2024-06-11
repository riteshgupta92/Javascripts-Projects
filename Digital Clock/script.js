let hours = document.getElementById("hrs");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let start = document.getElementById("start-btn");
let stop = document.getElementById("stop-btn");
let reset = document.getElementById("reset-btn");

let id;

const upadateClock = () => {
  let currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minute.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  second.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
};

// if the interval id is already set. If not, start the interval using setInterval.
start.addEventListener("click", () => {
  if (!id) {
    id = setInterval(upadateClock, 1000);
  }
});

// Clear the interval, set id to null, and reset the time display to 00:00:00.
reset.addEventListener("click", () => {
  clearInterval(id);
  id = null;
  hours.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
});

// Clear the interval using clearInterval and set id to null to indicate the timer is stopped.
stop.addEventListener("click", () => {
  clearInterval(id);
  id = null;
});

// Initially start the clock by setting an interval to call updateClock every second.
id = setInterval(upadateClock, 1000);
