function currentTime(){
const time = new Date();
var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();

if(hour < 10){
    hour = "0" + hour;
    }
    if(minute < 10){
    minute = "0" + minute;
    }
    if(second < 10){
    second = "0" + second;
    }
    
document.getElementById("hours").innerHTML = hour;
document.getElementById("mins").innerHTML = " : " + minute;
document.getElementById("secs").innerHTML = " : " + second;

}
setInterval(currentTime,500);







