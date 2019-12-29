
const time = new Date();

function currentTime(){
var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();
document.getElementById("hours").innerHTML = hour;
document.getElementById("mins").innerHTML = minute;
document.getElementById("secs").innerHTML = second;
}
setInterval(currentTime,500);

window.onload = currentTime;






