const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function getTime(){
const currentTime = new Date();

var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();
var currentSecond = currentTime.getSeconds();
if(currentHour < 10){
    currentHour = "0"+currentHour;
}
if(currentMinute < 10){
    currentMinute = "0"+currentMinute;
}
if(currentSecond < 10){
    currentSecond = "0"+currentSecond;
}

hours.textContent =currentHour+":";
minutes.textContent =currentMinute+":";
seconds.textContent = currentSecond;
}

setInterval (getTime, 100);