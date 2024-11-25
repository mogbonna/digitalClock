// let clock = document.querySelector(".container");

// function getCurrentTime() {
//   let date = new Date();
//   return date.toLocaleTimeString();
// }

// setInterval(() => {
//   clock.innerHTML = getCurrentTime();
// }, 1000);

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = String(currentTime.getSeconds()).padStart(2, "0");
}, 1000);
