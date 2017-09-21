
var timerID = null
var timerRunning = false

function stopclock(){
    if(timerRunning)
    clearTimeout(timerID)
    timerRunning = false
}

function Dgclock(){
    stopclock()
    showtime()
}

function showtime(){
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var timeValue = "" + ((hours > 12) ? hours - 12 : hours)
    var timeValue1 = "" + ((hours < 10) ? "0" : "") + hours
    timeValue  += ((minutes < 10) ? ":0" : ":") + minutes
    timeValue1 += ((minutes < 10) ? ":0" : ":") + minutes
    timeValue  += ((seconds < 10) ? ":0" : ":") + seconds
    timeValue1 += ((seconds < 10) ? ":0" : ":") + seconds
    timeValue  += (hours >= 12) ? " P.M." : " A.M."
    document.clock.face.value = timeValue
    document.clock.face.value = timeValue1;
    timerID = setTimeout("showtime()",1000)
    timerRunning = true
}
