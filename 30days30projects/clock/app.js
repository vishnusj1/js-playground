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