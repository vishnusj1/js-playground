const secondHand = document.querySelector(".sec-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const atm = new Date();
    const seconds = atm.getSeconds();
    const min = atm.getMinutes();
    const hour = atm.getHours();
    console.log(hour, `:`, min, `:`, seconds);
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minDegree = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    const hourDegree = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}
setInterval(setDate, 1000)

//code for digital clock

const dHour = document.querySelector(".hour");
const dMin = document.querySelector(".min");
const dSec = document.querySelector(".second");

function setDigital() {
    const atm = new Date();
    const seconds = atm.getSeconds();
    const min = atm.getMinutes();
    const hour = atm.getHours();
    const dSecRead = seconds;
    dSec.textContent = dSecRead;
    const dMinRead = min;
    dMin.textContent = dMinRead + ':';

    const dHourRead = hour;
    dHour.textContent = dHourRead + ":";
}
setInterval(setDigital, 1000)

//select inputs

const input = document.querySelectorAll('.settings input');

function handleUpdate() {
    console.log(this.value)
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

input.forEach(input => input.addEventListener('change', handleUpdate));
input.forEach(input => input.addEventListener('mousemove', handleUpdate));