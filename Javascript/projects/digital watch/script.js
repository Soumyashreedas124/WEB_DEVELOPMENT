//update clock
function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minute = now.getMinute();
    const second = now.getsecond();

}
const hourHand = document.querySelector("#hour");



const hourHandRotate = (hour/12) * 360 + (minutes/60) * 30 + 90 ;