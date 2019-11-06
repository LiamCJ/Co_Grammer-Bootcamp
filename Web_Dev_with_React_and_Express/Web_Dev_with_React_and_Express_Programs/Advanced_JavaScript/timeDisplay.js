function timeDisplay() {
    var hrs = new Date().getHours(); //getting the Hours
    var mins = new Date().getMinutes(); //getting the Minutes
    var secs = new Date().getSeconds(); //getting the Seconds
    var time = ('0' + hrs).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + secs).slice(-2) // i used this in order to put a zero in front of the the single digit numbers
    document.getElementById("time").innerHTML = time //displaying the time
}
setInterval(timeDisplay, 1000); //displaying the time every second so that it appears to be moving