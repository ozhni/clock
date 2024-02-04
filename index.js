"use strict";

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);

  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  const sec = currentDate.getSeconds();

  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minDeg = (min / 60) * 360;
  minuteEl.style.transform = `rotate(${minDeg}deg)`;

  const secDeg = (sec / 60) * 360;
  secondEl.style.transform = `rotate(${secDeg}deg)`;
}
updateClock();
